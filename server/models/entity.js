/**
 * Created by VinceZK on 10/25/14.
 * { ENTITY_ID: 'people',
 *   ENTITY_DESC: 'People Entity',
 *   ATTRIBUTES:
 *   [
 *     RowDataPacket {
 *       ATTR_GUID: '13976E0B39AEBAFBDC35764518DB72D9', RELATION_ID: 'people', ATTR_NAME: 'HEIGHT', ATTR_DESC: null,
 *       DATA_ELEMENT: null, DATA_TYPE: 2, DATA_LENGTH: null, SEARCHABLE: 0, NOT_NULL: 0, UNIQUE: 0, FINALIZE: 0,
 *       AUTO_INCREMENT: 0, IS_MULTI_VALUE: 0 }
 *   ]
 *   ROLES:
 *   [
 *     { ROLE_ID: 'system_user',
 *       ROLE_DESC: 'System user for login',
 *       RELATIONS: ['r_address', 'r_email', 'r_user'],
 *       RELATIONSHIPS: [{ RELATIONSHIP_ID: 'user_role',  RELATIONSHIP_DESC: 'A system user has muliple use roles',
 *                         VALID_PERIOD: 3162240000,
 *                         INVOLVES: [RowDataPacket { ROLE_ID: 'system_user', CARDINALITY: '[1..1]' },
 *                                    RowDataPacket { ROLE_ID: 'user_role', CARDINALITY: '[1..n]' } ]}]
 *     }
 *   ]
 * }
 *
 * {
 *   RELATION_ID: 'r_user',
 *   RELATION_DESC: 'System Logon User',
 *   VERSION_NO: 1,
 *   ATTRIBUTES: [ RowDataPacket {ATTR_GUID: '13976E0B39AEBAFBDC35764518DB72D9', RELATION_ID: 'people', ATTR_NAME: 'HEIGHT',}]
 * }
 */
'use strict';
const _ = require('underscore');
const async = require('async');
const guid = require('../util/guid.js');
const entityDB = require('./connections/mysql_mdb.js');
const timeUtil = require('../util/date_time.js');
const Message = require('ui-message').Message;
const MsgArrayStore = require('ui-message').MsgArrayStore;
const msgArray = require('./message.js');

const msgStore = new MsgArrayStore(msgArray);
const message = new Message(msgStore, 'EN');

module.exports = {
  entityDB: entityDB,
  createInstance: createInstance,
  getInstanceByGUID:getInstanceByGUID,
  hardDeleteByGuid: hardDeleteByGuid
};

/**
 * save the entity JSON object in DB
 * @param instance = JSON object, for example:
 * { entity_id: 'people',
 *   attribute1: 'value1', attribute2: 'value2', attribute3: ['s1', 's2', 's3'] ... ,
 *   relation1: [{action: 'add', a: '1', b: '2'}, {action: 'delete', a: '3', b: '4'}],
 *   relation2: {c: '3', b: '4'}, ... ,
 *   relationships:[
 *     {relationship_id: 'user_role', entity_id: 'user_role', role_id: 'user_role',
 *      values:[{instance_guid: '8BFB602731CBCD2090D7F9347957C4C5',
 *               valid_from:'2018-06-27 00:00:00', valid_to:'2030-12-31 00:00:00'}]
 *     }]
 * }
 * @param callback(err,result,instanceGuid), result is the JSON of the instance created
 */
function createInstance(instance, callback) {
  let instanceGUID = guid.genTimeBased();
  let entityMeta;
  let insertSQL;
  let insertSQLs = [];
  let errorMessages = [];
  let relations = [];
  let relationshipInstances = [];

  if(!instance['ENTITY_ID']){
    return callback(message.report('ENTITY', 'ENTITY_ID_MISSING', 'E'));
  }else{
    entityMeta = entityDB.getEntityMeta(instance['ENTITY_ID'])
  }

  if(!entityMeta)
    return callback(message.report('ENTITY', 'ENTITY_NOT_EXIST', 'E', instance['ENTITY_ID']));

  //Parse the give instance JSON and convert it SQLs
  _.each(instance, function (value, key) {
    if(key === 'relationships'){ //Relationships is a reserved key
      let results = _generateInsertRelationshipsSQL(value, entityMeta, instanceGUID, relationshipInstances);
      _hasErrors(results)? _mergeResults(errorMessages, results) : _mergeResults(insertSQLs, results);
    } else if (key === 'ENTITY_ID'){
      //Do Nothing
    } else {
      if (typeof value === 'object') { //Relations or multiple value attributes
        if (_isRelation(key)) { //Relations
          __processRelations(value, key);
        } else { //multiple value attributes
          let results = _generateInsertMultiValueAttributeSQL(key, value, entityMeta, instanceGUID);
          _hasErrors(results)? _mergeResults(errorMessages, results) : _mergeResults(insertSQLs, results);
        }
      } else { // Single value attributes
        let results = _generateInsertSingleValueAttributeSQL(key, value, entityMeta, instanceGUID);
        _hasErrors(results)? _mergeResults(errorMessages, results) : _mergeResults(insertSQLs, results);
      }
    }
  });
  if(errorMessages.length > 0) return callback(errorMessages);

  //Insert entity instance
  insertSQL = "INSERT INTO ENTITY_INSTANCES VALUES ("
    + entityDB.pool.escape(instance['ENTITY_ID']) + ","
    + entityDB.pool.escape(instanceGUID) + ", 0 ," + "'1')";
  insertSQLs.push(insertSQL);

  // console.log(insertSQLs);
  async.series([
    function (callback) {//Foreign key check
      async.map(relations, function (relation, callback) {
        _checkForeignKey(relation.relationRow, relation.association, callback);
      }, function (err, results) {
        if(err) return callback(err);
        if(results.length > 0 && results[0]) return callback(results);//The results should already be error messages
          else return callback(null);
      });
    },
    function (callback) {//Relationship instances check
      async.map(relationshipInstances, function (relationshipInstance, callback) {
        _checkEntityExist(relationshipInstance, callback)
      }, function (err, results) {
        if(err) return callback(err);
        if(results.length > 0 && results[0]) return callback(results); //The results should already be error messages
          else return callback(null);
      });
    },
    function (callback) {//Run all insert SQLs parallel
      entityDB.doUpdatesParallel(insertSQLs, function (err) {
        if (err) {
          callback(message.report('ENTITY', 'GENERAL_ERROR', 'E', err));
        } else {
          callback(null);
        }
      });
    }
  ],function (err) {
    if(err) return callback(err); //The err should already be error messages
    else {
      instance['INSTANCE_GUID'] = instanceGUID;
      return callback(null,instance);
    }
  });

  function __processRelations(value, key){
    if(!_checkEntityHasRelation(key, entityMeta)){
      return errorMessages.push(message.report('ENTITY', 'RELATION_NOT_VALID', 'E', key, entityMeta.ENTITY_ID));
    }
    let relationMeta = entityDB.getRelationMeta(key);
    if (_.isArray(value)){
      value.forEach(function (element) {
        __processSingleRelation(element, key, relationMeta);
      })
    }else{ //Single line
      __processSingleRelation(value, key, relationMeta);
    }
  }

  function __processSingleRelation(value, key, relationMeta) {
    relationMeta.ASSOCIATIONS.forEach(function(association){
      if(association.FOREIGN_KEY_CHECK === 1)
        relations.push({relationID: key, relationRow: value, association: association});
    });
    let results = _generateInsertRelationSQL(key, value, instanceGUID);
    _hasErrors(results)? _mergeResults(errorMessages, results) : _mergeResults(insertSQLs, results);
  }
}
/**
 * save the entity JSON object in mysql DB and return an auto-incremental objectID
 * @param instance = JSON object
 * @param callback(err, results, recGuid)
 */
function createObjectWithReturnId(instance, callback) {

}

/**
 * Soft delete an entity instance by set the DEL flag to 1
 * @param idAttr = {OBJECT_ID:ID_VALUE}
 * for example: {USER_ID: "JACK"}
 * @param callback(err, retCode)
 * retCode === -1: the unique attribute OBJECT_ID is not exist
 * retCode === 0: no object is updated, possibly the object ID is not exist
 * retCode === 1: the corresponding object is updated
 */
function softDeleteById(idAttr, callback) {

}
/**
 * Soft delete an entity instance by set the DEL flag to 1 through internal GUID
 * @param recGuid
 * @param callback(err, retCode)
 * retCode === 0: no object is updated, possibly the object ID is not exist
 * retCode === 1: the corresponding object is updated
 */
function softDeleteByGuid(recGuid, callback) {

}
/**
 * Restore the soft deleted blog, set DEL flag = 0
 * @param idAttr = {OBJECT_ID:ID_VALUE}
 * for example: {USER_ID: "JACK"}
 * @param callback(err, retCode)
 * retCode === -1: the unique attribute OBJECT_ID is not exist
 * retCode === 0: no user is updated, possibly the userId is not exist
 * retCode === 1: the corresponding user is restored
 */
function restoreObject(idAttr, callback) {

}
/**
 * Restore the soft deleted blog, set DEL flag = 0
 * @param recGuid
 * @param callback(err, retCode)
 * retCode === 0: no user is updated, possibly the userId is not exist
 * retCode === 1: the corresponding user is restored
 */
function restoreObjectByGuid(recGuid, callback) {

}

/**
 * Delete the object from the DB
 * @param idAttr = {OBJECT_ID:ID_VALUE}
 * for example: {USER_ID: "JACK"}
 * @param callback(err, retCode)
 * retCode === -2: Need soft deletion first
 * retCode === -1: the unique attribute OBJECT_ID is not exist
 * retCode === 0: no object is deleted, possibly the objectId is not exist
 * retCode === 1: the corresponding object is deleted
 */
function hardDeleteById(idAttr, callback) {

}

/**
 * Delete the object from the DB by INSTANCE_GUID
 * @param instanceGUID
 * @param callback(err)
 */
function hardDeleteByGuid(instanceGUID, callback) {
  let deleteSQLs = [];
  _getEntityInstanceHead(instanceGUID, function (err, instanceHead) {
    if(err)return callback(err); //Already message instance
    let entityMeta = entityDB.getEntityMeta(instanceHead.ENTITY_ID);

    deleteSQLs.push("delete from ENTITY_INSTANCES where INSTANCE_GUID = " + entityDB.pool.escape(instanceGUID));
    deleteSQLs.push("delete from VALUE where INSTANCE_GUID = " + entityDB.pool.escape(instanceGUID));
    entityMeta.UNIQUE_ATTRIBUTE_INDICES.forEach(function (element) {
      deleteSQLs.push("delete from " + entityDB.pool.escapeId(element.IDX_TABLE)
        + " where INSTANCE_GUID = " + entityDB.pool.escape(instanceGUID));
    });
    entityMeta.ATTRIBUTE_INDICES.forEach(function (element) {
      deleteSQLs.push("delete from " + entityDB.pool.escapeId(element.IDX_TABLE)
        + " where INSTANCE_GUID = " + entityDB.pool.escape(instanceGUID));
    });
    entityMeta.ROLES.forEach(function (role) {
      role.RELATIONS.forEach(function (relation){
        deleteSQLs.push("delete from " + entityDB.pool.escapeId(relation)
          + " where INSTANCE_GUID = " + entityDB.pool.escape(instanceGUID));
      });
    });

    let selectSQL = "select RELATIONSHIP_INSTANCE_GUID from RELATIONSHIP_INVOLVES_INSTANCES "
      + " where ENTITY_INSTANCE_GUID = " + entityDB.pool.escape(instanceGUID);
    entityDB.executeSQL(selectSQL, function (err, results) {
      if(err)return callback(message.report('ENTITY', 'GENERAL_ERROR', 'E', err));
      let GUIDArray;
      results.forEach(function(row){
        GUIDArray?GUIDArray = GUIDArray + " , " + entityDB.pool.escape(row['RELATIONSHIP_INSTANCE_GUID'])
          : GUIDArray = "( " + entityDB.pool.escape(row['RELATIONSHIP_INSTANCE_GUID']);
      });
      if(GUIDArray) GUIDArray = GUIDArray + " )";
      deleteSQLs.push("delete from RELATIONSHIP_INSTANCES where RELATIONSHIP_INSTANCE_GUID in " + GUIDArray);
      deleteSQLs.push("delete from RELATIONSHIP_INVOLVES_INSTANCES where RELATIONSHIP_INSTANCE_GUID in " + GUIDArray);

      entityDB.doUpdatesParallel(deleteSQLs, function (err) {
        if (err) {
          callback(message.report('ENTITY', 'GENERAL_ERROR', 'E', err));
        } else {
          callback(null);
        }
      });

    });

  });
}

/**
 * Get object in a JSON format from its ID attributes
 * @param idAttr = {OBJECT_ID:ID_VALUE}
 * @param callback(err, instance)
 * err = 'UNIQUE_ATTR_NOT_EXIST' means the ID attribute is not exist
 * instance is a JSON object or NULL if the ID is not exist!
 */
function getObjectById(idAttr, callback) {
}
/**
 * Get an instance in a JSON format from its instanceGUID
 * @param instanceGUID
 * @param callback(err,instance)
 * instance is a JSON object or NULL if the ID is not exist!
 * Here is an example:
 * {  ENTITY_ID: 'people',
      HOBBY: ['Reading', 'Movie', 'Coding'], HEIGHT: 170, GENDER: 'male', FINGER_PRINT: 'CA67DE15727C72961EB4B6B59B76743E',
      r_user: {action: 'add', USER_ID: 'DH001', USER_NAME:'VINCEZK', DISPLAY_NAME: 'Vincent Zhang'},
      r_email: [{EMAIL: 'zklee@hotmail.com', TYPE: 'private', PRIMARY:1},
                {EMAIL: 'vinentzklee@gmail.com', TYPE: 'private important', PRIMARY:0}
        ],
      r_address: [{COUNTRY: 'China', CITY:'Shanghai', POSTCODE: '201202',
                   ADDRESS_VALUE:'Room #402, Building #41, Dongjing Road #393',
                   TYPE: 'Current Live', PRIMARY:1},
                  {COUNTRY: 'China', CITY:'Haimen', POSTCODE: '226126',
                   ADDRESS_VALUE:'Group 8 Lizhu Tangjia',
                   TYPE: 'Born Place', PRIMARY:0}],
      r_employee: {USER_ID: 'DH001', COMPANY:'Darkhouse', DEPARTMENT: 'Development', TITLE: 'Developer', GENDER:'Male'},
      relationships:[
         {RELATIONSHIP_ID: 'user_role', ENTITY_ID: 'user_role', ROLE_ID: 'user_role',
            values:[{INSTANCE_GUID: '5F50DE92743683E1ED7F964E5B9F6167',
                       VALID_FROM:'2018-06-27 00:00:00', VALID_TO:'2030-12-31 00:00:00'}]
           }]
    }
 */
function getInstanceByGUID(instanceGUID, callback) {

  _getEntityInstanceHead(instanceGUID, function (err, instanceHead) {
    if(err)return callback(err); //Already message instance
    let instance = {INSTANCE_GUID: instanceGUID};
    instance.ENTITY_ID = instanceHead.ENTITY_ID;
    let entityMeta = entityDB.getEntityMeta(instance.ENTITY_ID);

    async.parallel([
      function (callback) {
        __getAttributeValue(instance, entityMeta, callback);
      },
      function (callback) {
        __getRelationValue(instance, entityMeta, callback);
      },
      function (callback) {
        __getRelationshipValue(instance, entityMeta, callback);
      }
    ],function (err) {
      if(err)callback(err); //Already message instance
      callback(null, instance)
    })

  });

  function __getAttributeValue(instance, entityMeta, callback) {
    let selectSQL =
      "select * from VALUE where INSTANCE_GUID = " + entityDB.pool.escape(instanceGUID);
    entityDB.executeSQL(selectSQL, function (err, results) {
      if(err)return callback(message.report('ENTITY', 'GENERAL_ERROR', 'E', err));
      results.forEach(function(attributeValue){
        let attributeMeta = entityMeta.ATTRIBUTES.find(function (attributeMeta) {
          return attributeMeta['ATTR_GUID'] === attributeValue['ATTR_GUID'];
        });
        if(attributeMeta['IS_MULTI_VALUE'] === 1){
          instance[attributeMeta.ATTR_NAME]?instance[attributeMeta.ATTR_NAME].push(attributeValue['VALUE']):
            instance[attributeMeta.ATTR_NAME] = [attributeValue['VALUE']];
        }else{
          instance[attributeMeta.ATTR_NAME] = attributeValue['VALUE'];
        }
      });
      callback(null);
    });
  }

  function __getRelationValue(instance, entityMeta, callback) {
    let relations = [];
    entityMeta.ROLES.forEach(function (role) {
      role.RELATIONS.forEach(function (relation) {
        relations.push(relation);
      })
    });

    async.map(relations, function (relation, callback) {
      let selectSQL = "select * from " + entityDB.pool.escapeId(relation)
        + " where INSTANCE_GUID = " + entityDB.pool.escape(instanceGUID);
      entityDB.executeSQL(selectSQL, function (err, results) {
        if(err)return callback(message.report('ENTITY', 'GENERAL_ERROR', 'E', err));
        if(results.length > 0)
          instance[relation] = results;
        callback(null);
      })
    },function (err) {
      if(err)callback(err);
      callback(null);
    })
  }

  function __getRelationshipValue(instance, entityMeta, callback) {
    let selectSQL =
      "select A.RELATIONSHIP_ID, A.ENTITY_INSTANCE_GUID, A.ENTITY_ID, A.ROLE_ID, B.VALID_FROM, B.VALID_TO" +
      "  from RELATIONSHIP_INVOLVES_INSTANCES as A " +
      "  join RELATIONSHIP_INSTANCES as B " +
      "    on A.RELATIONSHIP_INSTANCE_GUID = B.RELATIONSHIP_INSTANCE_GUID " +
      " where B.RELATIONSHIP_INSTANCE_GUID = " +
      "(select RELATIONSHIP_INSTANCE_GUID from RELATIONSHIP_INVOLVES_INSTANCES " +
      " where ENTITY_INSTANCE_GUID =" + entityDB.pool.escape(instanceGUID) + ")";
    entityDB.executeSQL(selectSQL, function (err, results) {
      if(err)return callback(message.report('ENTITY', 'GENERAL_ERROR', 'E', err));
      if(results.length === 0)return callback(null);

      instance.relationships = [];
      let selfRoleID = results.find(function (row) {
        return row['ENTITY_INSTANCE_GUID'] === instanceGUID;
      }).ROLE_ID;
      results.forEach(function (row) {
        if(row['ENTITY_INSTANCE_GUID'] === instanceGUID){//Bypass self
          return;
        }
        let relationship = instance.relationships.find(function (element) {
          return element.RELATIONSHIP_ID === row.RELATIONSHIP_ID &&
                 element.PARTNER_ENTITY_ID === row.ENTITY_ID;
        });
        if(relationship){
          relationship.values.push(
            {INSTANCE_GUID: row['ENTITY_INSTANCE_GUID'], VALID_FROM:row['VALID_FROM'], VALID_TO:row['VALID_TO']}
          );
        }else{
          relationship = {
            RELATIONSHIP_ID: row['RELATIONSHIP_ID'],
            SELF_ROLE_ID: selfRoleID,
            PARTNER_ENTITY_ID: row['ENTITY_ID'],
            PARTNER_ROLE_ID: row['ROLE_ID'],
            values:[{INSTANCE_GUID: row['ENTITY_INSTANCE_GUID'], VALID_FROM:row['VALID_FROM'], VALID_TO:row['VALID_TO']}]
          };
          instance.relationships.push(relationship);
        }
      });

      callback(null);
    })
  }
}
function _getEntityInstanceHead(instanceGUID, callback) {
  let selectSQL = "select * from ENTITY_INSTANCES where INSTANCE_GUID = " + entityDB.pool.escape(instanceGUID);
  entityDB.executeSQL(selectSQL, function (err, results) {
    if(err)return callback(message.report('ENTITY', 'GENERAL_ERROR', 'E', err));
    if(results.length === 0)
      return callback(message.report('ENTITY','ENTITY_INSTANCE_NOT_EXIST','E', instanceGUID));
    callback(null, results[0]);
  })
}
/**
 * update object attributes based on an ID
 * @param idAttr
 * @param changeAttr = {ATTR_NAME1:ATTR_VALUE1, ATTR_NAME2:ATTR_VALUE2, ....}
 * @param callback(err,retCode,key)
 * retCode === -4: Unique attributes can not be updated!
 * retCode === -3: Attribute is not exist for the entity!
 * retCode === -2: The object is soft deleted,so it can not be updated!
 * retCode === -1: The idAttr is not exist!
 * retCode === 0: The object ID is not exist!
 * retCode >= 1: number of attributes are updated!
 * key is the attribute key
 */
function changeObjectById(idAttr, changeAttr, callback) {
}

/**
 * update object attributes based on an ID
 * @param recGuid
 * @param changeAttr = {ATTR_NAME1:ATTR_VALUE1, ATTR_NAME2:ATTR_VALUE2, ....}
 * @param callback(err,retCode,key)
 * retCode === -4: Unique attributes can not be updated!
 * retCode === -3: Attribute is not exist for the entity!
 * retCode === -2: The object is soft deleted,so it can not be updated!
 * retCode === 0: The object ID is not exist!
 * retCode >= 1: number of attributes are updated!
 * key is the attribute key
 */
function changeObjectByGuid(recGuid, changeAttr, callback) {

}

/**
 * Interanl USE!
 * @param selectSQL
 * @param changeAttr
 * @param callback
 */
function changeObject(selectSQL, changeAttr, callback) {

}

function _hasErrors(results) {
  return results.find(function (element) {
    return element['msgCat'];
  })
}

function _mergeResults(to, from) {
  from.forEach(function (element) {
    to.push(element);
  })
}

function _checkEntityInvolvesRelationship(relationshipID, entityMeta) {
  return entityMeta.ROLES.find(function (element) {
    let relationship = element.RELATIONSHIPS.find(function (element) {
      return element.RELATIONSHIP_ID === relationshipID;
    });
    if(relationship) return true;
  });
}
/**
 * @param relationships
 * relationships:
 * [
 *  {RELATIONSHIP_ID: 'user_role', PARTNER_ENTITY_ID: 'user_role', PARTNER_ROLE_ID: 'user_role',
 *   values:[{INSTANCE_GUID: '8BFB602731CBCD2090D7F9347957C4C5',
 *            VALID_FROM:'2018-06-27 00:00:00', VALID_TO:'2030-12-31 00:00:00'}]
 *  }
 * ]
 * @param entityMeta
 * @param instanceGUID
 * @param relationshipInstances
 * @returns {*}
 * @private
 */
function _generateInsertRelationshipsSQL(relationships, entityMeta, instanceGUID, relationshipInstances) {
  let errorMessages = [];
  let insertSQLs = [];

  relationships.forEach(function (relationship) {
    let roleMeta = _checkEntityInvolvesRelationship(relationship['RELATIONSHIP_ID'], entityMeta);
    if(!roleMeta){
      errorMessages.push(
        message.report('ENTITY', 'RELATIONSHIP_NOT_VALID', 'E', relationship['RELATIONSHIP_ID'], entityMeta.ENTITY_ID));
      return;
    }

    let relationshipMeta = roleMeta.RELATIONSHIPS.find(function (element) {
      return element.RELATIONSHIP_ID === relationship['RELATIONSHIP_ID'];
    });
    let involvesMeta = relationshipMeta.INVOLVES.find(function (element) {
      return element.ROLE_ID === relationship['PARTNER_ROLE_ID'];
    });
    if(!involvesMeta){
      errorMessages.push(
        message.report('ENTITY', 'ROLE_NOT_VALID', 'E', relationship['PARTNER_ROLE_ID'], relationshipMeta.RELATIONSHIP_ID));
      return;
    }
    if(involvesMeta.CARDINALITY === '[1..1]' && values.length > 1){
      errorMessages.push(
        message.report('ENTITY', 'R', 'RELATIONSHIP_INSTANCE_SINGULAR', involvesMeta.ROLE_ID, relationshipMeta.RELATIONSHIP_ID));
      return;
    }

    relationship['values'].forEach(function (value) {
      if(relationshipInstances)relationshipInstances.push(
        {ENTITY_ID: relationship[`PARTNER_ENTITY_ID`] ,INSTANCE_GUID: value[`INSTANCE_GUID`]});

      let relationshipInstanceGUID = guid.genTimeBased();
      let validFrom = value['VALID_FROM']?value['VALID_FROM']: timeUtil.getCurrentDateTime();
      let validTo = value['VALID_TO']?value['VALID_TO']: timeUtil.getFutureDateTime(relationshipMeta.VALID_PERIOD);
      insertSQLs.push(
        "insert into RELATIONSHIP_INSTANCES values (" + entityDB.pool.escape(relationshipInstanceGUID) + " , "
        + entityDB.pool.escape(validFrom) + " , " + entityDB.pool.escape(validTo) + " , "
        + entityDB.pool.escape(relationshipMeta.RELATIONSHIP_ID) + ")"
      );
      insertSQLs.push( //Self
        "insert into RELATIONSHIP_INVOLVES_INSTANCES values (" + entityDB.pool.escape(relationshipInstanceGUID) + " , "
        + entityDB.pool.escape(instanceGUID) + " , " + entityDB.pool.escape(relationshipMeta.RELATIONSHIP_ID) + " , "
        + entityDB.pool.escape(entityMeta.ENTITY_ID) + " , " + entityDB.pool.escape(roleMeta.ROLE_ID) + ")"
      );
      insertSQLs.push( //Counter part
        "insert into RELATIONSHIP_INVOLVES_INSTANCES values (" + entityDB.pool.escape(relationshipInstanceGUID) + " , "
        + entityDB.pool.escape(value['INSTANCE_GUID']) + " , " + entityDB.pool.escape(relationshipMeta.RELATIONSHIP_ID) + " , "
        + entityDB.pool.escape(relationship['PARTNER_ENTITY_ID'])+ " , " + entityDB.pool.escape(relationship['PARTNER_ROLE_ID']) + ")"
      );
    });
  });

  if (errorMessages.length > 0) return errorMessages;
  return insertSQLs;
}

function _checkEntityHasRelation(relationID, entityMeta) {
  let role = entityMeta.ROLES.find(function (element) {
    return element.RELATIONS.find(function (element) {
      return element === relationID;
    })
  });

  return role?role.RELATIONS.find(function (element) {
    return element === relationID;
  }):false;
}

function _isRelation(relationID) {
  return entityDB.getRelationMeta(relationID);
}

//TODO Handle ROLE_INSTANCE
function _generateInsertRelationSQL(relationID, relationRow, instanceGUID) {
  let relationMeta = entityDB.getRelationMeta(relationID);
  let errorMessages = [];
  let insertSQLs = [];
  let insertColumns;
  let insertValues;

  _.each(relationRow, function (value, key) {
    let attributeMeta = relationMeta.ATTRIBUTES.find(function (ele) {
      return ele.ATTR_NAME === key;
    });

    if(attributeMeta){
      insertColumns?insertColumns = insertColumns + "," + entityDB.pool.escapeId(key):
        insertColumns = " (" + entityDB.pool.escapeId(key);
      insertValues?insertValues = insertValues +  "," + entityDB.pool.escape(value):
        insertValues = " (" + entityDB.pool.escape(value);
    } else {
      if (key !== 'action'){ //Reserved key "Action" is ignored in creation, as it is supposed to be all 'add'
        errorMessages.push(message.report('ENTITY','RELATION_ATTRIBUTE_NOT_EXIST', 'E', key, relationID));
      }
    }
  });
  if (errorMessages.length > 0) return errorMessages;

  if(insertColumns)insertColumns = insertColumns + ", `INSTANCE_GUID` ) ";
  if(insertValues)insertValues = insertValues + " , " + entityDB.pool.escape(instanceGUID) + " ) ";
  if(insertColumns && insertValues){
    insertSQLs.push("insert into " + entityDB.pool.escapeId(relationID) + insertColumns + " values " + insertValues);
    return insertSQLs;
  }

}

function _generateInsertMultiValueAttributeSQL(attributeName, value, entityMeta, instanceGUID) {
  let errorMessages = [];
  let attributeMeta = _checkEntityHasAttribute(attributeName, entityMeta);
  if(!attributeMeta){
    errorMessages.push(message.report('ENTITY', 'ATTRIBUTE_NOT_VALID', 'E', entityMeta.ENTITY_ID, attributeName));
    return errorMessages;
  }
  if(attributeMeta['IS_MULTI_VALUE'] !== 1){
    errorMessages.push(message.report('ENTITY', 'ATTRIBUTE_NOT_MULTI_VALUE', 'E', attributeName, entityMeta.ENTITY_ID));
    return errorMessages;
  }

  let insertSQLs = [];
  let insertSQL;
  let multipleValues = _.unique(value); // Remove duplicate values

  //Insert attribute value
  multipleValues.forEach(function (element, index) {
    insertSQL = "INSERT INTO VALUE (`INSTANCE_GUID`, `ATTR_GUID`, `VALUE_ID`, `VALUE`, `VERSION_NO`, `CHANGE_NO`) VALUES ("
      + entityDB.pool.escape(instanceGUID) + ","
      + entityDB.pool.escape(attributeMeta.ATTR_GUID) + ","
      + index.toString() + ","
      + entityDB.pool.escape(element) + ","
      + "'0', '1')";
    insertSQLs.push(insertSQL);
  });

  //Insert non-unique indices
  let attributeIndex = entityMeta.ATTRIBUTE_INDICES.find(function (element) {
    return element.ATTR_NAME === attributeName;
  });
  if(attributeIndex){
    multipleValues.forEach(function (element) { // Remove duplicate values
      insertSQL = "INSERT INTO " + attributeIndex.IDX_TABLE + " (`VALUE`, `INSTANCE_GUID`) VALUES ("
        + entityDB.pool.escape(element) + "," + entityDB.pool.escape(instanceGUID) + ")";
      insertSQLs.push(insertSQL);
    });
  }

  return insertSQLs;
}

function _generateInsertSingleValueAttributeSQL(attributeName, value, entityMeta, instanceGUID) {
  let errorMessages = [];
  let attributeMeta = _checkEntityHasAttribute(attributeName, entityMeta);
  if(!attributeMeta){
    errorMessages.push(message.report('ENTITY', 'ATTRIBUTE_NOT_VALID', 'E', entityMeta.ENTITY_ID, attributeName));
    return errorMessages;
  }

  let insertSQLs = [];
  let insertSQL;
  //Insert unique indices
  let uniqueIndex = entityMeta.UNIQUE_ATTRIBUTE_INDICES.find(function (element) {
    return element.ATTR_NAME === attributeName;
  });
  if(uniqueIndex){
    insertSQL = "INSERT INTO " + uniqueIndex.IDX_TABLE + " (`VALUE`, `INSTANCE_GUID`) VALUES ("
      + entityDB.pool.escape(value) + "," + entityDB.pool.escape(instanceGUID) + ")";
    insertSQLs.push(insertSQL);
  }

  //Insert non-unique indices
  let attributeIndex = entityMeta.ATTRIBUTE_INDICES.find(function (element) {
    return element.ATTR_NAME === attributeName;
  });
  if(attributeIndex){
    insertSQL = "INSERT INTO " + attributeIndex.IDX_TABLE + " (`VALUE`, `INSTANCE_GUID`) VALUES ("
      + entityDB.pool.escape(value) + "," + entityDB.pool.escape(instanceGUID) + ")";
    insertSQLs.push(insertSQL);
  }

  //Insert attribute value
  insertSQL = "INSERT INTO VALUE (`INSTANCE_GUID`, `ATTR_GUID`, `VALUE_ID`, `VALUE`, `VERSION_NO`, `CHANGE_NO`) VALUES ("
    + entityDB.pool.escape(instanceGUID) + ","
    + entityDB.pool.escape(attributeMeta['ATTR_GUID']) + ","
    + "'0'," //To-Do: Multi Value is not considered yet
    + entityDB.pool.escape(value) + ","
    + "'0', '1')";
  insertSQLs.push(insertSQL);

  return insertSQLs;
}

function _checkEntityHasAttribute(attributeName, entityMeta) {
  return entityMeta.ATTRIBUTES.find(function (element) {
    return element.ATTR_NAME === attributeName;
  })
}

/**
 * Check foreign key exist from the right relation
 * @param relationRow
 * @param association
 * {
 *    RIGHT_RELATION_ID: 'r_employee',
 *    CARDINALITY: '[1..1]',
 *    FOREIGN_KEY_CHECK: 0,
 *    FIELDS_MAPPING: [{LEFT_FIELD: 'USER_ID', RIGHT_FIELD: 'USER_ID'}]
 *  }
 * @param callback
 * @private
 */
function _checkForeignKey(relationRow, association, callback) {
  let selectSQL = "select * from " + entityDB.pool.escape(association.RIGHT_RELATION_ID) + " where ";
  let foreignKeyValue = '';

  association.FIELDS_MAPPING.forEach(function (element, index) {
    if(index === 0){
      selectSQL = selectSQL +
        entityDB.pool.escape(element.RIGHT_FIELD) + " = " + entityDB.pool.escape(relationRow[element.LEFT_FIELD]);
      foreignKeyValue = foreignKeyValue + element.RIGHT_FIELD + " : " + relationRow[element.LEFT_FIELD];
    }else{
      selectSQL = selectSQL + " and " +
        entityDB.pool.escape(element.RIGHT_FIELD) + " = " + entityDB.pool.escape(relationRow[element.LEFT_FIELD]);
      foreignKeyValue = foreignKeyValue + " , " + element.RIGHT_FIELD + " : " + relationRow[element.LEFT_FIELD];
    }
  });

  entityDB.executeSQL(selectSQL, function (err, rows) {
    if (err) return callback(message.report('ENTITY', 'GENERAL_ERROR', 'E', err));
    if (rows.length === 0)
      return callback(null, message.report('ENTITY','FOREIGN_KEY_CHECK_ERROR','E',
        foreignKeyValue,association.RIGHT_RELATION_ID));
    else callback(null, null);
  })
}

function _checkEntityExist(relationshipInstance, callback) {
  let selectSQL = "select * from ENTITY_INSTANCES where INSTANCE_GUID = "
    + entityDB.pool.escape(relationshipInstance.INSTANCE_GUID)
    + " and ENTITY_ID = " + entityDB.pool.escape(relationshipInstance.ENTITY_ID);
  entityDB.executeSQL(selectSQL, function (err, rows) {
    if (err) return callback(message.report('ENTITY', 'GENERAL_ERROR', 'E', err));
    if (rows.length === 0)
      return callback(null, message.report('ENTITY','ENTITY_INSTANCE_NOT_EXIST','E', relationshipInstance.INSTANCE_GUID));
    else return callback(null, null);
  })
}
