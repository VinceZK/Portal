function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./dist/jor-angular/fesm2015/jor-angular.js":
  /*!**************************************************!*\
    !*** ./dist/jor-angular/fesm2015/jor-angular.js ***!
    \**************************************************/

  /*! exports provided: Association, Attribute, AttributeBase, AttributeComponent, AttributeControlService, AttributeForm2Component, AttributeFormComponent, AttributeTableComponent, DataDomainH, DataDomainMeta, DataDomainValue, DataElementH, DataElementMeta, Entity, EntityMeta, EntityRelation, EntityService, EntityType, FieldsMappingPair, Involve, JorAngularModule, PartnerInstance, PartnerRole, Projection, QueryObject, Relation, RelationMeta, Relationship, RelationshipH, RelationshipInstance, RelationshipMeta, Role, RoleH, RoleMeta, RoleRelation, SearchHelp, SearchHelpComponent, SearchHelpField, Selection, Sort, UiMapperService, ɵa, ɵb */

  /***/
  function distJorAngularFesm2015JorAngularJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Association", function () {
      return Association;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Attribute", function () {
      return Attribute;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttributeBase", function () {
      return AttributeBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttributeComponent", function () {
      return AttributeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttributeControlService", function () {
      return AttributeControlService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttributeForm2Component", function () {
      return AttributeForm2Component;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttributeFormComponent", function () {
      return AttributeFormComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttributeTableComponent", function () {
      return AttributeTableComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataDomainH", function () {
      return DataDomainH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataDomainMeta", function () {
      return DataDomainMeta;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataDomainValue", function () {
      return DataDomainValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataElementH", function () {
      return DataElementH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataElementMeta", function () {
      return DataElementMeta;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Entity", function () {
      return Entity;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntityMeta", function () {
      return EntityMeta;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntityRelation", function () {
      return EntityRelation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntityService", function () {
      return EntityService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntityType", function () {
      return EntityType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FieldsMappingPair", function () {
      return FieldsMappingPair;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Involve", function () {
      return Involve;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JorAngularModule", function () {
      return JorAngularModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PartnerInstance", function () {
      return PartnerInstance;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PartnerRole", function () {
      return PartnerRole;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Projection", function () {
      return Projection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QueryObject", function () {
      return QueryObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Relation", function () {
      return Relation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelationMeta", function () {
      return RelationMeta;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Relationship", function () {
      return Relationship;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelationshipH", function () {
      return RelationshipH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelationshipInstance", function () {
      return RelationshipInstance;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelationshipMeta", function () {
      return RelationshipMeta;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Role", function () {
      return Role;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleH", function () {
      return RoleH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleMeta", function () {
      return RoleMeta;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleRelation", function () {
      return RoleRelation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchHelp", function () {
      return SearchHelp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchHelpComponent", function () {
      return SearchHelpComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchHelpField", function () {
      return SearchHelpField;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Selection", function () {
      return Selection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Sort", function () {
      return Sort;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiMapperService", function () {
      return UiMapperService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return DomainValueValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return JorAngularComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ui_message_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ui-message-angular */
    "./node_modules/ui-message-angular/fesm2015/ui-message-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/entity.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var Entity = function Entity() {
      _classCallCheck(this, Entity);
    };

    if (false) {}

    var Relationship = function Relationship() {
      _classCallCheck(this, Relationship);
    };

    if (false) {}

    var RelationshipInstance = function RelationshipInstance() {
      _classCallCheck(this, RelationshipInstance);
    };

    if (false) {}

    var PartnerInstance = function PartnerInstance() {
      _classCallCheck(this, PartnerInstance);
    };

    if (false) {}

    var PartnerRole = function PartnerRole() {
      _classCallCheck(this, PartnerRole);
    };

    if (false) {}

    var EntityMeta = function EntityMeta() {
      _classCallCheck(this, EntityMeta);
    };

    if (false) {}

    var Attribute = function Attribute() {
      _classCallCheck(this, Attribute);
    };

    if (false) {}

    var Role = function Role() {
      _classCallCheck(this, Role);
    };

    if (false) {}

    var RoleRelation = function RoleRelation() {
      _classCallCheck(this, RoleRelation);
    };

    if (false) {}

    var RelationshipMeta = function RelationshipMeta() {
      _classCallCheck(this, RelationshipMeta);
    };

    if (false) {}

    var Involve = function Involve() {
      _classCallCheck(this, Involve);
    };

    if (false) {}

    var RelationMeta = function RelationMeta() {
      _classCallCheck(this, RelationMeta);
    };

    if (false) {}

    var Association = function Association() {
      _classCallCheck(this, Association);
    };

    if (false) {}

    var FieldsMappingPair = function FieldsMappingPair() {
      _classCallCheck(this, FieldsMappingPair);
    };

    if (false) {}

    var EntityRelation = function EntityRelation() {
      _classCallCheck(this, EntityRelation);
    };

    if (false) {}

    var Selection = function Selection() {
      _classCallCheck(this, Selection);
    };

    if (false) {}

    var Projection = function Projection() {
      _classCallCheck(this, Projection);
    };

    if (false) {}

    var QueryObject = function QueryObject() {
      _classCallCheck(this, QueryObject);
    };

    if (false) {}

    var Sort = function Sort() {
      _classCallCheck(this, Sort);
    };

    if (false) {}

    var EntityType = function EntityType() {
      _classCallCheck(this, EntityType);
    };

    if (false) {}

    var Relation = function Relation() {
      _classCallCheck(this, Relation);
    };

    if (false) {}

    var RelationshipH = function RelationshipH() {
      _classCallCheck(this, RelationshipH);
    };

    if (false) {}

    var RoleH = function RoleH() {
      _classCallCheck(this, RoleH);
    };

    if (false) {}

    var RoleMeta = function RoleMeta() {
      _classCallCheck(this, RoleMeta);
    };

    if (false) {}

    var DataElementH = function DataElementH() {
      _classCallCheck(this, DataElementH);
    };

    if (false) {}

    var DataElementMeta = function DataElementMeta() {
      _classCallCheck(this, DataElementMeta);
    };

    if (false) {}

    var DataDomainH = function DataDomainH() {
      _classCallCheck(this, DataDomainH);
    };

    if (false) {}

    var DataDomainMeta = function DataDomainMeta() {
      _classCallCheck(this, DataDomainMeta);
    };

    if (false) {}

    var DataDomainValue = function DataDomainValue() {
      _classCallCheck(this, DataDomainValue);
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ui-mapper.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var UiMapperService =
    /*#__PURE__*/
    function () {
      function UiMapperService() {
        _classCallCheck(this, UiMapperService);
      }
      /**
       * Map a FormGroup to a JOR relation(with cardinality [0..1] and [1..1]) for adding or updating.
       * @param {?} formGroup
       * @param {?} keys
       * @param {?=} isNew
       * @return {?}
       */


      _createClass(UiMapperService, [{
        key: "composeChangedRelation",
        value: function composeChangedRelation(formGroup, keys) {
          var isNew = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

          if (!formGroup.dirty || !keys || Object.keys(keys).length === 0) {
            return {};
          }
          /** @type {?} */


          var changedRelation = {
            action: isNew ? 'add' : 'update'
          };
          Object.keys(keys).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            return changedRelation[key] = keys[key] || formGroup.value[key];
          });
          Object.keys(formGroup.controls).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            /** @type {?} */
            var control = formGroup.get(key);

            if (control.dirty) {
              changedRelation[key] = control.value;
            }
          });
          return changedRelation;
        }
        /**
         * Map a FormArray to JOR relation(with cardinality [0..n] or [1..n]) for adding, updating, or deletion.
         * @param {?} formArray
         * @param {?} originalArray
         * @param {?} keys
         * @return {?}
         */

      }, {
        key: "composeChangedRelationArray",
        value: function composeChangedRelationArray(formArray, originalArray, keys) {
          if (!formArray.dirty || !keys || Object.keys(keys).length === 0) {
            return [];
          }

          if (!originalArray) {
            originalArray = [];
          }
          /** @type {?} */


          var changedRelationArray = [];
          formArray.controls.forEach(
          /**
          * @param {?} formGroup
          * @return {?}
          */
          function (formGroup) {
            if (formGroup.dirty) {
              /** @type {?} */
              var changedRelation = {};
              changedRelationArray.push(changedRelation);
              /** @type {?} */

              var index = originalArray.findIndex(
              /**
              * @param {?} element
              * @return {?}
              */
              function (element) {
                /** @type {?} */
                var found = true;
                Object.keys(keys).forEach(
                /**
                * @param {?} key
                * @return {?}
                */
                function (key) {
                  if (keys[key]) {
                    return;
                  }

                  found = found && element[key] === formGroup.value[key];
                });
                return found;
              });
              changedRelation['action'] = index === -1 ? 'add' : 'update';
              Object.keys(keys).forEach(
              /**
              * @param {?} key
              * @return {?}
              */
              function (key) {
                return changedRelation[key] = keys[key] || formGroup.value[key];
              });
              Object.keys(formGroup['controls']).forEach(
              /**
              * @param {?} key
              * @return {?}
              */
              function (key) {
                /** @type {?} */
                var control = formGroup.get(key);

                if (control.dirty) {
                  changedRelation[key] = control.value;
                }
              });
            }
          });
          originalArray.forEach(
          /**
          * @param {?} originalRelation
          * @return {?}
          */
          function (originalRelation) {
            /** @type {?} */
            var index = formArray.controls.findIndex(
            /**
            * @param {?} element
            * @return {?}
            */
            function (element) {
              /** @type {?} */
              var found = true;
              Object.keys(keys).forEach(
              /**
              * @param {?} key
              * @return {?}
              */
              function (key) {
                if (keys[key]) {
                  return;
                }

                found = found && element.value[key] === originalRelation[key];
              });
              return found;
            });

            if (index === -1) {
              /** @type {?} */
              var deletedRelation = {
                action: 'delete'
              };
              Object.keys(keys).forEach(
              /**
              * @param {?} key
              * @return {?}
              */
              function (key) {
                return deletedRelation[key] = keys[key] || originalRelation[key];
              });
              changedRelationArray.push(deletedRelation);
            }
          });
          return changedRelationArray;
        }
        /**
         * Map a FormArray to JOR relationships for adding, updating, or deletion.
         * @param {?} relationshipID
         * @param {?} partnerRoles
         * @param {?} formArray
         * @param {?} originalArray
         * @param {?} nonRelationshipAttributes
         * @return {?}
         */

      }, {
        key: "composeChangedRelationship",
        value: function composeChangedRelationship(relationshipID, partnerRoles, formArray, originalArray, nonRelationshipAttributes) {
          if (!formArray.dirty) {
            return null;
          }
          /** @type {?} */


          var relationship = {
            RELATIONSHIP_ID: relationshipID,
            values: []
          };
          formArray.controls.forEach(
          /**
          * @param {?} formGroup
          * @return {?}
          */
          function (formGroup) {
            if (formGroup.dirty) {
              /** @type {?} */
              var changedRelationshipValue = {};
              relationship.values.push(changedRelationshipValue);

              if (formGroup.value['RELATIONSHIP_INSTANCE_GUID']) {
                changedRelationshipValue['action'] = 'update';
                changedRelationshipValue['RELATIONSHIP_INSTANCE_GUID'] = formGroup.value['RELATIONSHIP_INSTANCE_GUID'];
              } else {
                changedRelationshipValue['action'] = 'add';
                changedRelationshipValue['PARTNER_INSTANCES'] = [];
                partnerRoles.forEach(
                /**
                * @param {?} partnerRole
                * @return {?}
                */
                function (partnerRole) {
                  return changedRelationshipValue['PARTNER_INSTANCES'].push({
                    ENTITY_ID: partnerRole.ENTITY_ID,
                    ROLE_ID: partnerRole.ROLE_ID,
                    INSTANCE_GUID: formGroup.value[partnerRole.ROLE_ID + '_INSTANCE_GUID']
                  });
                });
              }

              Object.keys(formGroup['controls']).forEach(
              /**
              * @param {?} key
              * @return {?}
              */
              function (key) {
                if (nonRelationshipAttributes.includes(key) || key.substr(-13) === 'INSTANCE_GUID') {
                  return;
                }
                /** @type {?} */


                var control = formGroup.get(key);

                if (control.dirty) {
                  changedRelationshipValue[key] = control.value;
                }
              });
            }
          });
          originalArray.forEach(
          /**
          * @param {?} original
          * @return {?}
          */
          function (original) {
            if (formArray.controls.findIndex(
            /**
            * @param {?} formGroup
            * @return {?}
            */
            function (formGroup) {
              return formGroup.value['RELATIONSHIP_INSTANCE_GUID'] === original['RELATIONSHIP_INSTANCE_GUID'];
            }) === -1) {
              relationship.values.push({
                action: 'delete',
                RELATIONSHIP_INSTANCE_GUID: original['RELATIONSHIP_INSTANCE_GUID']
              });
            }
          });
          return relationship.values.length === 0 ? null : relationship;
        }
      }]);

      return UiMapperService;
    }();

    UiMapperService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    UiMapperService.ctorParameters = function () {
      return [];
    };
    /** @nocollapse */


    UiMapperService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function UiMapperService_Factory() {
        return new UiMapperService();
      },
      token: UiMapperService,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/entity.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var EntityService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} http
       * @param {?} messageService
       */
      function EntityService(http, messageService) {
        _classCallCheck(this, EntityService);

        this.http = http;
        this.messageService = messageService;
        this.originalHost = '';
        this.fakeUUIDs = [];
        this.messageService.setMessageStore([{
          msgCat: 'EXCEPTION',
          msgName: 'GENERIC',
          msgText: {
            EN: {
              shortText: 'Exception Occurs in Operation: %s',
              longText: '%s2'
            }
          }
        }, {
          msgCat: 'EXCEPTION',
          msgName: 'SESSION_EXPIRED',
          msgText: {
            EN: {
              shortText: 'Your session is expired',
              longText: 'Your session is expired, please <a href="/logon">re-logon</a>'
            }
          }
        }], 'EN');
      }
      /**
       * @param {?} host
       * @return {?}
       */


      _createClass(EntityService, [{
        key: "setOriginalHost",
        value: function setOriginalHost(host) {
          this.originalHost = host;
        }
        /**
         * @param {?} msgStore
         * @param {?} language
         * @return {?}
         */

      }, {
        key: "setMessageStore",
        value: function setMessageStore(msgStore, language) {
          this.messageService.setMessageStore(msgStore, language);
        }
        /**
         * List all entity IDs in the system
         * @return {?}
         */

      }, {
        key: "listEntityID",
        value: function listEntityID() {
          return this.http.get(this.originalHost + "/api/entity/EntityIDs").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listEntityID')));
        }
        /**
         * List entity IDs by a given role ID
         * @param {?} roleID
         * @return {?}
         */

      }, {
        key: "listEntityIDbyRole",
        value: function listEntityIDbyRole(roleID) {
          return this.http.get(this.originalHost + "/api/entity/EntityIDs/".concat(roleID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listEntityIDbyRole')));
        }
        /**
         * Return the entity meta for a given entity ID
         * @param {?} entityID
         * @return {?}
         */

      }, {
        key: "getEntityMeta",
        value: function getEntityMeta(entityID) {
          return this.http.get(this.originalHost + "/api/entity/meta/".concat(entityID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEntityMeta')));
        }
        /**
         * Return a list of entity objects according to the description of a given query object
         * @param {?} queryObject
         * @return {?}
         */

      }, {
        key: "searchEntities",
        value: function searchEntities(queryObject) {
          return this.http.post(this.originalHost + "/api/query", queryObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchEntities')));
        }
        /**
         * Return an entity instance for a given entity instance GUID
         * @param {?} instanceGUID
         * @return {?}
         */

      }, {
        key: "getEntityInstance",
        value: function getEntityInstance(instanceGUID) {
          return this.http.get(this.originalHost + "/api/entity/instance/".concat(instanceGUID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEntityInstance')));
        }
        /**
         * Return a relation's meta data for a given relation ID
         * @param {?} relationID
         * @return {?}
         */

      }, {
        key: "getRelationMeta",
        value: function getRelationMeta(relationID) {
          return this.http.get(this.originalHost + "/api/relation/meta/".concat(relationID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationMeta')));
        }
        /**
         * Return all relations' meta data for a given entity ID
         * @param {?} entityID
         * @return {?}
         */

      }, {
        key: "getRelationMetaOfEntity",
        value: function getRelationMetaOfEntity(entityID) {
          return this.http.get(this.originalHost + "/api/relation/meta/entity/".concat(entityID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationMetaOfEntity')));
        }
        /**
         * Create a new entity instance
         * @param {?} instance
         * @return {?}
         */

      }, {
        key: "createEntityInstance",
        value: function createEntityInstance(instance) {
          return this.http.post(this.originalHost + "/api/entity", instance, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('createEntityInstance')));
        }
        /**
         * Change an existing entity instance
         * @param {?} instance
         * @return {?}
         */

      }, {
        key: "changeEntityInstance",
        value: function changeEntityInstance(instance) {
          return this.http.put(this.originalHost + "/api/entity", instance, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('changeEntityInstance')));
        }
        /**
         * Delete an entity instance from a given instance GUID
         * @param {?} instanceGUID
         * @return {?}
         */

      }, {
        key: "deleteEntityInstance",
        value: function deleteEntityInstance(instanceGUID) {
          return this.http["delete"](this.originalHost + "/api/entity/instance/".concat(instanceGUID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteEntityInstance')));
        }
        /**
         * Return entity types(IDs) for a given search term
         * @param {?} term
         * @return {?}
         */

      }, {
        key: "listEntityType",
        value: function listEntityType(term) {
          return this.http.get(this.originalHost + "/api/model/entity-types?term=".concat(term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listEntityType')));
        }
        /**
         * Return the description of a given entity type(ID)
         * @param {?} entityID
         * @return {?}
         */

      }, {
        key: "getEntityTypeDesc",
        value: function getEntityTypeDesc(entityID) {
          return this.http.get(this.originalHost + "/api/model/entity-types/".concat(entityID, "/desc")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEntityTypeDesc')));
        }
        /**
         * Save an entity type after changing or creation
         * @param {?} entityType
         * @return {?}
         */

      }, {
        key: "saveEntityType",
        value: function saveEntityType(entityType) {
          return this.http.post(this.originalHost + "/api/model/entity-types", entityType, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveEntityType')));
        }
        /**
         * Return a list of relations in the system according to the search term
         * @param {?} term
         * @return {?}
         */

      }, {
        key: "listRelation",
        value: function listRelation(term) {
          return this.http.get(this.originalHost + "/api/model/relations?term=".concat(term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listRelation')));
        }
        /**
         * Return the description of a given relation ID
         * @param {?} relationID
         * @return {?}
         */

      }, {
        key: "getRelationDesc",
        value: function getRelationDesc(relationID) {
          return this.http.get(this.originalHost + "/api/model/relations/".concat(relationID, "/desc")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationDesc')));
        }
        /**
         * Save a relation after changing or creation
         * @param {?} relation
         * @return {?}
         */

      }, {
        key: "saveRelation",
        value: function saveRelation(relation) {
          return this.http.post(this.originalHost + "/api/model/relations", relation, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveRelation')));
        }
        /**
         * Return a list of relationships in the system according to the search term
         * @param {?} term
         * @return {?}
         */

      }, {
        key: "listRelationship",
        value: function listRelationship(term) {
          return this.http.get(this.originalHost + "/api/model/relationships?term=".concat(term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listRelationship')));
        }
        /**
         * Return a relationship definition from a given relationship ID
         * @param {?} relationshipID
         * @return {?}
         */

      }, {
        key: "getRelationship",
        value: function getRelationship(relationshipID) {
          return this.http.get(this.originalHost + "/api/model/relationships/".concat(relationshipID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationship')));
        }
        /**
         * Return the description of a given relationship ID
         * @param {?} relationshipID
         * @return {?}
         */

      }, {
        key: "getRelationshipDesc",
        value: function getRelationshipDesc(relationshipID) {
          return this.http.get(this.originalHost + "/api/model/relationships/".concat(relationshipID, "/desc")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationshipDesc')));
        }
        /**
         * Save a relationship after changing or creation
         * @param {?} relationship
         * @return {?}
         */

      }, {
        key: "saveRelationship",
        value: function saveRelationship(relationship) {
          return this.http.post(this.originalHost + "/api/model/relationships", relationship, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveRelationship')));
        }
        /**
         * Return a list of roles in the system according to the search term
         * @param {?} term
         * @return {?}
         */

      }, {
        key: "listRole",
        value: function listRole(term) {
          return this.http.get(this.originalHost + "/api/model/roles?term=".concat(term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listRole')));
        }
        /**
         * Return a role definition from a given role ID
         * @param {?} roleID
         * @return {?}
         */

      }, {
        key: "getRole",
        value: function getRole(roleID) {
          return this.http.get(this.originalHost + "/api/model/roles/".concat(roleID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRole')));
        }
        /**
         * Return the description of a given role ID
         * @param {?} roleID
         * @return {?}
         */

      }, {
        key: "getRoleDesc",
        value: function getRoleDesc(roleID) {
          return this.http.get(this.originalHost + "/api/model/roles/".concat(roleID, "/desc")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRoleDesc')));
        }
        /**
         * Save a role after changing or creation
         * @param {?} role
         * @return {?}
         */

      }, {
        key: "saveRole",
        value: function saveRole(role) {
          return this.http.post(this.originalHost + "/api/model/roles", role, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveRole')));
        }
        /**
         * Return a list of data elements in the system according to the search term
         * @param {?} term
         * @return {?}
         */

      }, {
        key: "listDataElement",
        value: function listDataElement(term) {
          return this.http.get(this.originalHost + "/api/model/data-elements?term=".concat(term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listDataElement')));
        }
        /**
         * Return a data element definition from a given element ID
         * @param {?} elementID
         * @return {?}
         */

      }, {
        key: "getDataElement",
        value: function getDataElement(elementID) {
          return this.http.get(this.originalHost + "/api/model/data-elements/".concat(elementID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDataElement')));
        }
        /**
         * Return the description of a given data element ID
         * @param {?} elementID
         * @return {?}
         */

      }, {
        key: "getDataElementDesc",
        value: function getDataElementDesc(elementID) {
          return this.http.get(this.originalHost + "/api/model/data-elements/".concat(elementID, "/desc")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDataElementDesc')));
        }
        /**
         * Save a data element after changing or creation
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "saveDataElement",
        value: function saveDataElement(element) {
          return this.http.post(this.originalHost + "/api/model/data-elements", element, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveDataElement')));
        }
        /**
         * Return a list of data domains in the system according to the search term
         * @param {?} term
         * @return {?}
         */

      }, {
        key: "listDataDomain",
        value: function listDataDomain(term) {
          return this.http.get(this.originalHost + "/api/model/data-domains?term=".concat(term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listDataDomain')));
        }
        /**
         * Return a data domain definition from a given domain ID
         * @param {?} domainID
         * @return {?}
         */

      }, {
        key: "getDataDomain",
        value: function getDataDomain(domainID) {
          return this.http.get(this.originalHost + "/api/model/data-domains/".concat(domainID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDataDomain')));
        }
        /**
         * Return the description of a given data domain ID
         * @param {?} domainID
         * @return {?}
         */

      }, {
        key: "getDataDomainDesc",
        value: function getDataDomainDesc(domainID) {
          return this.http.get(this.originalHost + "/api/model/data-domains/".concat(domainID, "/desc")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDataDomainDesc')));
        }
        /**
         * Save a data domain after changing or creation
         * @param {?} domain
         * @return {?}
         */

      }, {
        key: "saveDataDomain",
        value: function saveDataDomain(domain) {
          return this.http.post(this.originalHost + "/api/model/data-domains", domain, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveDataDomain')));
        }
        /**
         * Get data element meta
         * @param {?} elementID
         * @return {?}
         */

      }, {
        key: "getElementMeta",
        value: function getElementMeta(elementID) {
          return this.http.get(this.originalHost + "/api/model/element-meta/".concat(elementID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getElementMeta')));
        }
        /**
         * Return a fake relationship ID before saving
         * @return {?}
         */

      }, {
        key: "generateFakeRelationshipUUID",
        value: function generateFakeRelationshipUUID() {
          /** @type {?} */
          var nextPosition = this.fakeUUIDs.length + 1;
          /** @type {?} */

          var fakeUUID = 'NewRelationship_' + nextPosition;
          this.fakeUUIDs.push(fakeUUID);
          return fakeUUID;
        }
        /**
         * @private
         * @template T
         * @param {?=} operation
         * @param {?=} result
         * @return {?}
         */

      }, {
        key: "handleError",
        value: function handleError() {
          var _this = this;

          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return (
            /**
            * @param {?} error
            * @return {?}
            */
            function (error) {
              // TODO: send the error to remote logging infrastructure
              console.error(error); // log to console instead

              if (error.status === 401) {
                _this.messageService.addMessage('EXCEPTION', 'SESSION_EXPIRED', ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["messageType"].Exception);
              } else {
                _this.messageService.addMessage('EXCEPTION', 'GENERIC', ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["messageType"].Exception, operation, error.message);
              } // Let the app keep running by returning an empty result.


              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(
              /** @type {?} */
              result);
            }
          );
        }
      }]);

      return EntityService;
    }();

    EntityService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    EntityService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
      }];
    };
    /** @nocollapse */


    EntityService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function EntityService_Factory() {
        return new EntityService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageService"]));
      },
      token: EntityService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/search-help/search-help.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var SearchHelp = function SearchHelp() {
      _classCallCheck(this, SearchHelp);
    };

    if (false) {}

    var SearchHelpField = function SearchHelpField() {
      _classCallCheck(this, SearchHelpField);
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/search-help/search-help.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var SearchHelpComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} fb
       * @param {?} entityService
       */
      function SearchHelpComponent(fb, entityService) {
        _classCallCheck(this, SearchHelpComponent);

        this.fb = fb;
        this.entityService = entityService;
        this.isSearchHelpModalShown = false;
        this.isFilterShown = false;
        this.isSelectAllChecked = false;
        this.selectedIndex = -1;
        this.filterFields = [];
        this.listFields = [];
        this.listData = [];
      }
      /**
       * @return {?}
       */


      _createClass(SearchHelpComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this.filterFieldsFormGroup = this.fb.group({});
        }
        /**
         * @param {?} searchHelpMeta
         * @param {?} exportControl
         * @param {?=} afterExportFn
         * @return {?}
         */

      }, {
        key: "openSearchHelpModal",
        value: function openSearchHelpModal(searchHelpMeta, exportControl, afterExportFn) {
          var _this2 = this;

          this.searchHelpMeta = searchHelpMeta;
          this.exportControl = exportControl;
          this.afterExportFn = afterExportFn;
          this.filterFieldsFormGroup = this.fb.group({});
          this.filterFields = this.searchHelpMeta.FIELDS.filter(
          /**
          * @param {?} fieldMeta
          * @return {?}
          */
          function (fieldMeta) {
            return fieldMeta.FILTER_POSITION;
          });
          this.filterFields.sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            return a.FILTER_POSITION - b.FILTER_POSITION;
          });
          this.filterFields.forEach(
          /**
          * @param {?} fieldMeta
          * @return {?}
          */
          function (fieldMeta) {
            if (fieldMeta.IMPORT) {
              /** @type {?} */
              var ieFieldName = fieldMeta.IE_FIELD_NAME || fieldMeta.FIELD_NAME;

              if (exportControl.get(ieFieldName)) {
                fieldMeta.DEFAULT_VALUE = exportControl.get(ieFieldName).value;
              }
            }

            _this2.filterFieldsFormGroup.addControl(fieldMeta.FIELD_NAME, _this2.fb.control(fieldMeta.DEFAULT_VALUE));
          });
          this.listFields = this.searchHelpMeta.FIELDS.filter(
          /**
          * @param {?} fieldMeta
          * @return {?}
          */
          function (fieldMeta) {
            return fieldMeta.LIST_POSITION;
          });
          this.listFields.sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            return a.LIST_POSITION - b.LIST_POSITION;
          });

          if (this.searchHelpMeta.BEHAVIOUR === 'A') {
            this.search();
            this.isFilterShown = false;
          } else {
            this.isFilterShown = true;
          }

          this.isSearchHelpModalShown = true;
        }
        /**
         * @param {?} entityID
         * @param {?} relationID
         * @param {?} exportControl
         * @param {?} readonly
         * @param {?=} exportField
         * @param {?=} domainID
         * @param {?=} afterExportFn
         * @return {?}
         */

      }, {
        key: "openSearchHelpModalByEntity",
        value: function openSearchHelpModalByEntity(entityID, relationID, exportControl, readonly, exportField, domainID, afterExportFn) {
          var _this3 = this;

          /** @type {?} */
          var searchHelpMeta = new SearchHelp();
          searchHelpMeta.OBJECT_NAME = entityID;

          searchHelpMeta.METHOD =
          /**
          * @param {?} entityService
          * @return {?}
          */
          function (entityService) {
            return (
              /**
              * @param {?} searchTerm
              * @return {?}
              */
              function (searchTerm) {
                return entityService.searchEntities(searchTerm);
              }
            );
          }(this.entityService);

          searchHelpMeta.BEHAVIOUR = 'M';
          searchHelpMeta.MULTI = false;
          searchHelpMeta.FUZZY_SEARCH = false;
          searchHelpMeta.FIELDS = [];
          searchHelpMeta.READ_ONLY = readonly;
          searchHelpMeta.ENTITY_ID = entityID;
          searchHelpMeta.RELATION_ID = relationID;
          this.entityService.getRelationMeta(relationID).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            /** @type {?} */
            var relationMeta =
            /** @type {?} */
            data;
            relationMeta.ATTRIBUTES.forEach(
            /**
            * @param {?} attribute
            * @return {?}
            */
            function (attribute) {
              return searchHelpMeta.FIELDS.push({
                FIELD_NAME: attribute.ATTR_NAME,
                FIELD_DESC: attribute.LIST_HEADER_TEXT,
                IE_FIELD_NAME: attribute.DOMAIN_ID === domainID ? exportField : null,
                IMPORT: attribute.PRIMARY_KEY || attribute.DOMAIN_ID === domainID,
                EXPORT: attribute.PRIMARY_KEY || attribute.DOMAIN_ID === domainID,
                LIST_POSITION: attribute.ORDER,
                FILTER_POSITION: attribute.ORDER
              });
            });
            searchHelpMeta.FIELDS.push({
              FIELD_NAME: 'INSTANCE_GUID',
              FIELD_DESC: 'Instance GUID',
              IMPORT: false,
              EXPORT: true,
              LIST_POSITION: 999,
              FILTER_POSITION: 0
            });

            _this3.openSearchHelpModal(searchHelpMeta, exportControl, afterExportFn);
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "search",
        value: function search() {
          var _this4 = this;

          /** @type {?} */
          var searchTerm;

          if (this.searchHelpMeta.FUZZY_SEARCH) {
            searchTerm = this.fuzzySearchTerm || '';
          } else {
            searchTerm = new QueryObject();
            searchTerm.ENTITY_ID = this.searchHelpMeta.ENTITY_ID;
            searchTerm.RELATION_ID = this.searchHelpMeta.RELATION_ID;
            searchTerm.FILTER = [];
            this.filterFields.forEach(
            /**
            * @param {?} fieldMeta
            * @return {?}
            */
            function (fieldMeta) {
              /** @type {?} */
              var fieldValue = _this4.filterFieldsFormGroup.get(fieldMeta.FIELD_NAME).value;

              if (fieldValue) {
                if (fieldValue.includes('*') || fieldValue.includes('%')) {
                  searchTerm.FILTER.push({
                    FIELD_NAME: fieldMeta.FIELD_NAME,
                    OPERATOR: 'CN',
                    LOW: fieldValue
                  });
                } else {
                  searchTerm.FILTER.push({
                    FIELD_NAME: fieldMeta.FIELD_NAME,
                    OPERATOR: 'EQ',
                    LOW: fieldValue
                  });
                }
              }
            });
          }

          this.listData = [];
          this.isSelectAllChecked = false;

          if (typeof this.searchHelpMeta.METHOD === 'function') {
            /** @type {?} */
            var searchHelpMethod =
            /** @type {?} */
            this.searchHelpMeta.METHOD;
            searchHelpMethod(searchTerm).subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              return _this4._generateSearchList(data);
            });
          } else if (Array.isArray(this.searchHelpMeta.METHOD)) {
            this._generateSearchList(this.searchHelpMeta.METHOD);
          }
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "_generateSearchList",
        value: function _generateSearchList(data) {
          var _this5 = this;

          data.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            /** @type {?} */
            var listItem = {
              SELECTED: ''
            };

            _this5.listFields.forEach(
            /**
            * @param {?} field
            * @return {?}
            */
            function (field) {
              return listItem[field.FIELD_NAME] = item[field.FIELD_NAME];
            });

            _this5.listData.push(listItem);
          });
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "enterSearch",
        value: function enterSearch($event) {
          if ($event.keyCode === 13) {
            this.search();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "showFilter",
        value: function showFilter() {
          this.isFilterShown = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "hideFilter",
        value: function hideFilter() {
          this.isFilterShown = false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "selectAll",
        value: function selectAll() {
          this.isSelectAllChecked = !this.isSelectAllChecked;
          this.listData.forEach(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            return data.SELECTED = !data.SELECTED;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "confirmSelection",
        value: function confirmSelection() {
          var _this6 = this;

          // TODO: Currently, only single selection is supported. Multiple selection in later time
          if (this.searchHelpMeta.READ_ONLY) {
            return;
          }

          this.listFields.forEach(
          /**
          * @param {?} listField
          * @return {?}
          */
          function (listField) {
            if (_this6.exportControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]) {
              /** @type {?} */
              var exportControl =
              /** @type {?} */
              _this6.exportControl;
              /** @type {?} */

              var ieFieldName = listField.IE_FIELD_NAME || listField.FIELD_NAME;
              /** @type {?} */

              var exportFieldControl = exportControl.get(ieFieldName);

              if (listField.EXPORT && exportFieldControl) {
                exportFieldControl.setValue(_this6.listData[_this6.selectedIndex][listField.FIELD_NAME]);
                exportFieldControl.markAsDirty();
              }
            } else {
              if (listField.EXPORT) {
                _this6.exportControl[listField.FIELD_NAME] = _this6.listData[_this6.selectedIndex][listField.FIELD_NAME];
              }
            }
          });

          if (this.afterExportFn) {
            this.afterExportFn();
          }

          this.listData = [];
          this.isSearchHelpModalShown = false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "closeSearchHelpModal",
        value: function closeSearchHelpModal() {
          this.isSearchHelpModalShown = false;
        }
      }, {
        key: "displaySearchHelpModal",
        get: function get() {
          return this.isSearchHelpModalShown ? 'block' : 'none';
        }
      }]);

      return SearchHelpComponent;
    }();

    SearchHelpComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'dk-app-search-help',
        template: "<div class=\"modal fade\" id=\"searchHelp\" tabindex=\"-1\" role=\"dialog\"\n     [ngClass]=\"{'show': isSearchHelpModalShown}\" [ngStyle]=\"{'display': displaySearchHelpModal}\">\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n    <div class=\"modal-content dk-search-help-content\">\n      <div class=\"modal-header dk-search-help-header\">\n        <h6 class=\"modal-title\" id=\"addRelationship\">{{searchHelpMeta?.OBJECT_NAME}} ({{listData.length}})</h6>\n        <button type=\"button\" class=\"close\" (click)=\"closeSearchHelpModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n\n      <div class=\"modal-body\">\n        <div *ngIf=\"isFilterShown\" class=\"card mb-2\">\n          <div *ngIf=\"searchHelpMeta && searchHelpMeta.FUZZY_SEARCH\" class=\"mt-2 mx-2 row\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"fuzzySearchTerm\" (keyup)=\"enterSearch($event)\">\n          </div>\n          <div class=\"mt-2 mx-2 row\" [formGroup]=\"filterFieldsFormGroup\">\n            <div *ngFor=\"let filterField of filterFields\" class=\"col-6 form-group row\">\n              <label for=\"{{filterField.FIELD_NAME}}\" class=\"col-6 col-form-label col-form-label-sm text-right\">\n                {{filterField.FIELD_DESC}}:</label>\n              <input id=\"{{filterField.FIELD_NAME}}\" name=\"{{filterField.FIELD_NAME}}\" formControlName=\"{{filterField.FIELD_NAME}}\"\n                     type=\"text\" class=\"col-6 form-control form-control-sm\" [readonly]=\"filterField.FILTER_DISP_ONLY\" (keyup)=\"enterSearch($event)\">\n            </div>\n          </div>\n\n          <div class=\"mb-2\">\n            <button type=\"button\" id=\"search\" class=\"btn btn-sm btn-primary float-right mr-2\" (click)=\"search()\">\n              Search\n            </button>\n          </div>\n        </div>\n\n        <button *ngIf=\"!isFilterShown\" type=\"button\" class=\"btn btn-link float-right\" (click)=\"showFilter()\">Show Filter</button>\n        <button *ngIf=\"isFilterShown\" type=\"button\" class=\"btn btn-link float-right\" (click)=\"hideFilter()\">Hide Filter</button>\n\n        <table class=\"table table-bordered table-sm table-hover dk-search-table\">\n          <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\">\n              <input *ngIf=\"searchHelpMeta?.MULTI\" type=\"checkbox\" [(ngModel)]=\"isSelectAllChecked\" (click)=\"selectAll()\">\n            </th>\n            <th *ngFor=\"let listField of listFields\">{{listField.FIELD_DESC}}</th>\n          </tr>\n          </thead>\n\n          <tbody>\n          <tr *ngFor=\"let item of listData; let i = index\">\n            <td>\n              <input *ngIf=\"!searchHelpMeta.MULTI\" type=\"radio\" name=\"selectedIndex\" [value]=\"i\" [(ngModel)]=\"selectedIndex\" (dblclick)=\"confirmSelection()\">\n              <input *ngIf=\"searchHelpMeta.MULTI\" type=\"checkbox\" [(ngModel)]=\"item.SELECTED\">\n            </td>\n            <td *ngFor=\"let listField of listFields\">{{item[listField.FIELD_NAME]}}</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"modal-footer dk-search-help-footer\">\n        <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"closeSearchHelpModal()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"confirmSelection()\" [disabled]=\"searchHelpMeta?.READ_ONLY\">Confirm</button>\n      </div>\n    </div>\n  </div>\n</div>\n",
        styles: [".dk-search-help-header{padding:.3rem .5rem;background-color:#e9ecef}.dk-search-help-footer{padding:.5rem}.dk-search-table{display:block;overflow:scroll;max-height:40rem;white-space:nowrap;border:none}.dk-search-help-content{border:1px solid rgba(0,0,0,.4);box-shadow:8px 5px 5px rgba(0,0,0,.2)}"]
      }]
    }];
    /** @nocollapse */

    SearchHelpComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: EntityService
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/attribute/attribute-base.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AttributeBase = function AttributeBase() {
      _classCallCheck(this, AttributeBase);

      this.dropdownList = [];
    };

    if (false) {}

    var DropdownList = function DropdownList() {
      _classCallCheck(this, DropdownList);
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/attribute/attribute-validators.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // noinspection JSAnnotator


    var DomainValueValidator =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} entityService
       */
      function DomainValueValidator(entityService) {
        _classCallCheck(this, DomainValueValidator);

        this.entityService = entityService;
      }
      /**
       * @param {?} ctrl
       * @return {?}
       */


      _createClass(DomainValueValidator, [{
        key: "validate",
        value: function validate(ctrl) {
          /** @type {?} */
          var queryObject = new QueryObject(); // queryObject.ENTITY_ID = entityID;
          // queryObject.RELATION_ID = relationID;
          // queryObject.FILTER = [{FIELD_NAME: searchField, OPERATOR: 'EQ', LOW: ctrl.value}];

          return this.entityService.searchEntities(queryObject).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            if (data['msgName']) {
              return {
                message: data['msgName']['msgShortText']
              };
            } else {
              if (data.length === 0) {
                return {
                  message: 'Value is invalid'
                };
              } else {
                return null;
              }
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(
          /**
          * @return {?}
          */
          function () {
            return null;
          }));
        }
      }]);

      return DomainValueValidator;
    }();

    DomainValueValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    DomainValueValidator.ctorParameters = function () {
      return [{
        type: EntityService
      }];
    };
    /** @nocollapse */


    DomainValueValidator.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function DomainValueValidator_Factory() {
        return new DomainValueValidator(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(EntityService));
      },
      token: DomainValueValidator,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/attribute/attribute-control.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AttributeControlService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} entityService
       * @param {?} domainValueValidator
       */
      function AttributeControlService(entityService, domainValueValidator) {
        _classCallCheck(this, AttributeControlService);

        this.entityService = entityService;
        this.domainValueValidator = domainValueValidator;
      }
      /**
       * @param {?} attributes
       * @return {?}
       */


      _createClass(AttributeControlService, [{
        key: "toAttributeControl",
        value: function toAttributeControl(attributes) {
          var _this7 = this;

          /** @type {?} */
          var attributeControls = [];

          if (!attributes) {
            return attributeControls;
          }

          attributes.forEach(
          /**
          * @param {?} attribute
          * @return {?}
          */
          function (attribute) {
            return attributeControls.push(_this7.toSingleAttributeControl(attribute));
          });
          return attributeControls;
        }
        /**
         * @param {?} attribute
         * @return {?}
         */

      }, {
        key: "toSingleAttributeControl",
        value: function toSingleAttributeControl(attribute) {
          /** @type {?} */
          var attributeControl = new AttributeBase();
          attributeControl.key = attribute.ATTR_GUID;
          attributeControl.name = attribute.ATTR_NAME;
          attributeControl.label = attribute.LABEL_TEXT;
          attributeControl.list_label = attribute.LIST_HEADER_TEXT;
          attributeControl.relationId = attribute.RELATION_ID;
          attributeControl.searchHelpId = attribute.SEARCH_HELP_ID;
          attributeControl.searchHelpExportField = attribute.SEARCH_HELP_EXPORT_FIELD;
          attributeControl.domainId = attribute.DOMAIN_ID;
          attributeControl.domainEntityId = attribute.DOMAIN_ENTITY_ID;
          attributeControl.domainRelationId = attribute.DOMAIN_RELATION_ID;

          switch (attribute.DATA_TYPE) {
            case 1:
              // Char
              if (attribute.CAPITAL_ONLY) {
                attributeControl.controlType = 'text_capital'; // onkeyup="this.value = this.value.toUpperCase();"
              } else {
                if (attribute.DOMAIN_TYPE === 3) {
                  attributeControl.controlType = 'dropdown';

                  this._generateDropdownList(attribute.DOMAIN_ID, attributeControl);
                } else {
                  attributeControl.controlType = 'text';
                  attributeControl.pattern = attribute.REG_EXPR;
                }
              }

              attributeControl.maxLength = attribute.DATA_LENGTH;
              attributeControl.primaryKey = attribute.PRIMARY_KEY;
              break;

            case 2:
              // Integer
              if (attribute.DOMAIN_TYPE === 3) {
                attributeControl.controlType = 'dropdown';

                this._generateDropdownList(attribute.DOMAIN_ID, attributeControl);
              } else {
                attributeControl.controlType = 'integer';

                if (attribute.UNSIGNED) {
                  attributeControl.pattern = '^\\d+([^.,])?$';
                }

                attributeControl.autoIncrement = attribute.AUTO_INCREMENT;
              }

              attributeControl.primaryKey = attribute.PRIMARY_KEY;
              break;

            case 3:
              // Boolean
              attributeControl.controlType = 'checkbox';
              break;

            case 4:
              // Decimal
              attributeControl.controlType = 'decimal';

              this._setDecimalPattern(attributeControl, attribute);

              break;

            case 5:
              // String
              attributeControl.controlType = 'textarea';
              break;

            case 6:
              // Binary
              attributeControl.controlType = 'file';
              break;

            case 7:
              // Date
              attributeControl.controlType = 'date';
              break;

            case 8:
              // Timestamp
              attributeControl.controlType = 'timestamp';
              break;

            default:
              attributeControl.controlType = 'text';
          }

          return attributeControl;
        }
        /**
         * @param {?} domainID
         * @param {?} attributeControl
         * @return {?}
         */

      }, {
        key: "_generateDropdownList",
        value: function _generateDropdownList(domainID, attributeControl) {
          this.entityService.getDataDomain(domainID).subscribe(
          /**
          * @param {?} dataDomain
          * @return {?}
          */
          function (dataDomain) {
            return dataDomain['DOMAIN_VALUES'].forEach(
            /**
            * @param {?} domainValue
            * @return {?}
            */
            function (domainValue) {
              attributeControl.dropdownList.push({
                key: domainValue['LOW_VALUE'],
                value: domainValue['LOW_VALUE_TEXT'] || domainValue['LOW_VALUE']
              });
            });
          });
        }
        /**
         * @param {?} attributeControl
         * @param {?} attribute
         * @return {?}
         */

      }, {
        key: "_setDecimalPattern",
        value: function _setDecimalPattern(attributeControl, attribute) {
          /** @type {?} */
          var zeroPadding = '0000000000000000000000000000000000000';
          attributeControl.step = '0.' + zeroPadding.substr(0, attribute.DECIMAL - 1) + '1';
          attributeControl.placeholder = '0.' + zeroPadding.substr(0, attribute.DECIMAL - 1) + '0';
          /** @type {?} */

          var integerPlace = attribute.DATA_LENGTH - attribute.DECIMAL;
          attributeControl.pattern = attribute.UNSIGNED ? '^(' : '^(\\-?';
          attributeControl.pattern += integerPlace ? '\\d{1,' + integerPlace.toString() + '})' : '0)';
          attributeControl.pattern += '(\\.\\d{1,' + attribute.DECIMAL + '})?$';
          attributeControl.maxLength = attribute.DATA_LENGTH;
        }
        /**
         * @param {?} attribute
         * @param {?} instance
         * @return {?}
         */

      }, {
        key: "convertToFormControl",
        value: function convertToFormControl(attribute, instance) {
          /** @type {?} */
          var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](instance[attribute.ATTR_NAME] || '');

          if (attribute.PRIMARY_KEY && !attribute.AUTO_INCREMENT) {
            formControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
          } // if (attribute.DOMAIN_TYPE === 2 && !attribute.PRIMARY_KEY) {
          //   formControl.setAsyncValidators(this.domainValueValidator.validate.bind(this.domainValueValidator));
          // }


          return formControl;
        }
        /**
         * @param {?} attributes
         * @param {?} instance
         * @param {?=} isDirty
         * @return {?}
         */

      }, {
        key: "convertToFormGroup",
        value: function convertToFormGroup(attributes, instance, isDirty) {
          var _this8 = this;

          /** @type {?} */
          var group = {};
          attributes.forEach(
          /**
          * @param {?} attribute
          * @return {?}
          */
          function (attribute) {
            group[attribute.ATTR_NAME] = _this8.convertToFormControl(attribute, instance);

            if (instance[attribute.ATTR_NAME] && isDirty) {
              group[attribute.ATTR_NAME].markAsDirty();
            }
          });
          return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"](group);
        }
      }]);

      return AttributeControlService;
    }();

    AttributeControlService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    AttributeControlService.ctorParameters = function () {
      return [{
        type: EntityService
      }, {
        type: DomainValueValidator
      }];
    };
    /** @nocollapse */


    AttributeControlService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function AttributeControlService_Factory() {
        return new AttributeControlService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(EntityService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DomainValueValidator));
      },
      token: AttributeControlService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/attribute/attribute.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AttributeComponent =
    /*#__PURE__*/
    function () {
      function AttributeComponent() {
        _classCallCheck(this, AttributeComponent);
      }
      /**
       * @return {?}
       */


      _createClass(AttributeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /** @type {?} */
          var fieldCtrl = this.formGroup.get(this.attributeControl.name);

          switch (this.attributeControl.controlType) {
            case 'timestamp':
              if (!this.readonly && !fieldCtrl.value) {
                /** @type {?} */
                var currentTimestamp = new Date();
                fieldCtrl.setValue(currentTimestamp.getFullYear() + '-' + ('0' + (currentTimestamp.getMonth() + 1)).slice(-2) + '-' + ('0' + currentTimestamp.getDate()).slice(-2) + ' ' + ('0' + currentTimestamp.getHours()).slice(-2) + ':' + ('0' + currentTimestamp.getMinutes()).slice(-2) + ':' + ('0' + currentTimestamp.getSeconds()).slice(-2));
                fieldCtrl.markAsDirty();
              }

              break;

            case 'date':
              if (!this.readonly && !fieldCtrl.value) {
                /** @type {?} */
                var currentDate = new Date();
                fieldCtrl.setValue(currentDate.getFullYear() + '-' + ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-' + ('0' + currentDate.getDate()).slice(-2));
                fieldCtrl.markAsDirty();
              }

              break;

            default:
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.attributeControl.controlType === 'dropdown' || this.attributeControl.controlType === 'checkbox') {
            this.readonly ? this.formGroup.get(this.attributeControl.name).disable() : this.formGroup.get(this.attributeControl.name).enable();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "onKeyup",

        /**
         * @param {?} attributeName
         * @return {?}
         */
        value: function onKeyup(attributeName) {
          /** @type {?} */
          var fieldCtrl = this.formGroup.get(attributeName);
          fieldCtrl.setValue(fieldCtrl.value.toUpperCase());
        }
        /**
         * @param {?} attributeControl
         * @return {?}
         */

      }, {
        key: "onSearchHelp",
        value: function onSearchHelp(attributeControl) {
          this.searchHelpComponent.openSearchHelpModalByEntity(attributeControl.domainEntityId, attributeControl.domainRelationId, this.formGroup, this.readonly, attributeControl.name, attributeControl.domainId);
        }
      }, {
        key: "invalid",
        get: function get() {
          return this.formGroup.controls[this.attributeControl.name].invalid;
        }
        /**
         * @return {?}
         */

      }, {
        key: "errorMessage",
        get: function get() {
          /** @type {?} */
          var fieldCtrl = this.formGroup.get(this.attributeControl.name);

          if (fieldCtrl.getError('pattern')) {
            return 'The pattern is not correct';
          } else if (fieldCtrl.getError('required')) {
            return 'Required';
          } else if (fieldCtrl.getError('message')) {
            return fieldCtrl.getError('message');
          } else {
            return null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "isReadonly",
        get: function get() {
          return this.readonly || this.attributeControl.autoIncrement;
        }
      }]);

      return AttributeComponent;
    }();

    AttributeComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'dk-app-attribute',
        template: "<div [formGroup]=\"formGroup\">\n  <div [ngSwitch]=\"attributeControl.controlType\">\n    <div class=\"input-group\">\n      <input *ngSwitchCase=\"'text'\" type=\"text\" class=\"form-control\"\n             [class.form-control-sm] = \"isSmallSize\"\n             [formControlName]=\"attributeControl.name\"\n             [id]=\"attributeControl.key\"\n             [maxlength]=\"attributeControl.maxLength\"\n             [pattern]=\"attributeControl.pattern\"\n             [readonly]=\"isReadonly\" >\n      <input *ngSwitchCase=\"'text_capital'\" type=\"text\" class=\"form-control\"\n             [class.form-control-sm] = \"isSmallSize\"\n             [formControlName]=\"attributeControl.name\"\n             [id]=\"attributeControl.key\"\n             [maxlength]=\"attributeControl.maxLength\"\n             (keyup)=\"onKeyup(attributeControl.name)\"\n             [readonly]=\"isReadonly\" >\n      <input *ngSwitchCase=\"'integer'\" type=\"number\" class=\"form-control\"\n             [class.form-control-sm] = \"isSmallSize\"\n             [formControlName]=\"attributeControl.name\"\n             [id]=\"attributeControl.key\"\n             [pattern]=\"attributeControl.pattern\"\n             [readonly]=\"isReadonly\" >\n      <div *ngIf=\"attributeControl.searchHelpId || attributeControl.domainRelationId\" class=\"input-group-append\">\n        <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" (click)=\"onSearchHelp(attributeControl)\">\n          <span class=\"fas fa-search\"></span>\n        </button>\n      </div>\n    </div>\n    <input *ngSwitchCase=\"'decimal'\" type=\"number\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [step]=\"attributeControl.step\"\n           [placeholder]=\"attributeControl.placeholder\"\n           [pattern]=\"attributeControl.pattern\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'checkbox'\" type=\"checkbox\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\">\n    <input *ngSwitchCase=\"'textarea'\" type=\"textarea\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'file'\" type=\"file\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'date'\" type=\"date\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'timestamp'\" type=\"text\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [readonly]=\"isReadonly\" >\n    <select *ngSwitchCase=\"'dropdown'\" class=\"form-control\"\n            [class.form-control-sm] = \"isSmallSize\"\n            [formControlName]=\"attributeControl.name\"\n            [id]=\"attributeControl.key\">\n      <option *ngFor=\"let opt of attributeControl.dropdownList\" [value]=\"opt.key\">{{opt.value}}</option>\n    </select>\n  </div>\n\n  <div *ngIf=\"!noErrorMsg\" [class.ng-invalid]=\"invalid\" class=\"dk-invalid-feedback\">\n    {{errorMessage}}\n  </div>\n</div>\n\n<dk-app-search-help></dk-app-search-help>\n",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    AttributeComponent.ctorParameters = function () {
      return [];
    };

    AttributeComponent.propDecorators = {
      attributeControl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formGroup: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      readonly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isSmallSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      noErrorMsg: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      searchHelpComponent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [SearchHelpComponent, {
          "static": false
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/attribute/attribute-form/attribute-form.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AttributeFormComponent =
    /*#__PURE__*/
    function () {
      function AttributeFormComponent() {
        _classCallCheck(this, AttributeFormComponent);
      }
      /**
       * @return {?}
       */


      _createClass(AttributeFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AttributeFormComponent;
    }();

    AttributeFormComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'dk-app-attribute-form',
        template: "<div class=\"form-group row\" [formGroup]=\"formGroup\">\n  <label class=\"col-4 col-form-label text-right\"\n         [class.form-control-sm]=\"isSmallSize\"\n         [attr.for]=\"attributeControl.key\">\n    {{attributeControl.label}}<strong *ngIf=\"attributeControl.primaryKey\" class=\"primaryKey\">*</strong>:\n  </label>\n\n  <dk-app-attribute class=\"col-8\" [attributeControl]=\"attributeControl\" [formGroup]=\"formGroup\"\n                 [isSmallSize]=\"isSmallSize\" [readonly]=\"readonly\">\n  </dk-app-attribute>\n\n</div>\n",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    AttributeFormComponent.ctorParameters = function () {
      return [];
    };

    AttributeFormComponent.propDecorators = {
      attributeControl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formGroup: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      readonly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isSmallSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/attribute/attribute-form2/attribute-form2.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AttributeForm2Component =
    /*#__PURE__*/
    function () {
      function AttributeForm2Component() {
        _classCallCheck(this, AttributeForm2Component);
      }
      /**
       * @return {?}
       */


      _createClass(AttributeForm2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "invalid",
        get: function get() {
          return this.formGroup.controls[this.attributeControl.name].invalid;
        }
        /**
         * @return {?}
         */

      }, {
        key: "errorMessage",
        get: function get() {
          /** @type {?} */
          var fieldCtrl = this.formGroup.get(this.attributeControl.name);

          if (fieldCtrl.getError('pattern')) {
            return 'The pattern is not correct';
          } else if (fieldCtrl.getError('required')) {
            return 'Required';
          } else if (fieldCtrl.getError('message')) {
            return fieldCtrl.getError('message');
          } else {
            return null;
          }
        }
      }]);

      return AttributeForm2Component;
    }();

    AttributeForm2Component.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'dk-app-attribute-form2',
        template: "<div class=\"form-group\" [formGroup]=\"formGroup\">\n  <label class=\"col-form-label\"\n         [class.form-control-sm]=\"isSmallSize\"\n         [attr.for]=\"attributeControl.key\">\n    {{attributeControl.label}}<strong *ngIf=\"attributeControl.primaryKey\" class=\"primaryKey\">*</strong>:\n    <span [class.ng-invalid]=\"invalid\" class=\"dk-invalid-feedback\">{{errorMessage}}</span>\n  </label>\n\n  <dk-app-attribute [attributeControl]=\"attributeControl\" [formGroup]=\"formGroup\"\n                    [isSmallSize]=\"isSmallSize\" [readonly]=\"readonly\" [noErrorMsg]=\"true\">\n  </dk-app-attribute>\n\n</div>\n",
        styles: [""]
      }]
    }];
    /** @nocollapse */

    AttributeForm2Component.ctorParameters = function () {
      return [];
    };

    AttributeForm2Component.propDecorators = {
      attributeControl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formGroup: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      readonly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isSmallSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/attribute/attribute-table/attribute-table.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AttributeTableComponent =
    /*#__PURE__*/
    function () {
      function AttributeTableComponent() {
        _classCallCheck(this, AttributeTableComponent);

        this.isDetailModalShown = false;
        this.isErrorModalShown = false;
      }
      /**
       * @return {?}
       */


      _createClass(AttributeTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "openDetailModal",

        /**
         * @param {?} index
         * @return {?}
         */
        value: function openDetailModal(index) {
          this.currentFormGroup = this.formArray.at(index);
          this.isDetailModalShown = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "closeDetailModal",
        value: function closeDetailModal() {
          if (!this.readonly && this.currentFormGroup.dirty) {
            this.currentFormGroup.setValue(this.currentFormGroup.value); // Or the value won't be updated.
          }

          this.isDetailModalShown = false;
        }
        /**
         * @param {?} errorTitle
         * @param {?} errorDescription
         * @return {?}
         */

      }, {
        key: "openErrorModal",
        value: function openErrorModal(errorTitle, errorDescription) {
          this.errorTitle = errorTitle;
          this.errorDescription = errorDescription;
          this.isErrorModalShown = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "closeErrorModal",
        value: function closeErrorModal() {
          this.isErrorModalShown = false;
        }
        /**
         * @param {?=} index
         * @return {?}
         */

      }, {
        key: "deleteRelationInstance",
        value: function deleteRelationInstance() {
          var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          switch (this.entityRelation.CARDINALITY) {
            case '[0..n]':
              this.formArray.removeAt(index);
              this.formArray.markAsDirty();

              if (this.formArray.length === 0) {
                this.entityRelation.EMPTY = true;
              }

              break;

            case '[1..n]':
              if (this.formArray.length === 1) {
                this.openErrorModal('Deletion Fail', 'The relation requires at lease one entry!');
              } else {
                this.formArray.removeAt(index);
                this.formArray.markAsDirty();
              }

          }
        }
      }, {
        key: "displayDetailModal",
        get: function get() {
          return this.isDetailModalShown ? 'block' : 'none';
        }
        /**
         * @return {?}
         */

      }, {
        key: "displayErrorModal",
        get: function get() {
          return this.isErrorModalShown ? 'block' : 'none';
        }
      }]);

      return AttributeTableComponent;
    }();

    AttributeTableComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'dk-app-attribute-table',
        template: "<table class=\"table table-bordered relation-table\"\n       [class.table-sm]=\"isSmallSize\"\n       [formGroup]=\"parentFormGroup\">\n  <thead class=\"thead-light\">\n  <tr>\n    <th scope=\"col\">\n      Action\n    </th>\n    <th scope=\"col\" *ngFor=\"let attributeControl of attributeControls\">\n      {{attributeControl.label}}<strong *ngIf=\"attributeControl.primaryKey\" class=\"primaryKey\">*</strong>\n    </th>\n  </tr>\n  </thead>\n\n  <tbody [formArrayName]=\"entityRelation.RELATION_ID\">\n    <tr *ngFor=\"let formGroup of formArray.controls; let i = index\">\n      <td class=\"actions\">\n        <button class=\"btn\" [class.btn-sm]=\"isSmallSize\" type=\"button\" (click)=\"openDetailModal(i)\" title=\"Detail\">\n          <span *ngIf=\"readonly\" class=\"fas fa-search\"></span>\n          <span *ngIf=\"!readonly\" class=\"fas fa-pen\"></span>\n        </button>\n        <button class=\"btn\" [class.btn-sm]=\"isSmallSize\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteRelationInstance(i)\" title=\"Delete\">\n          <span class=\"far fa-trash-alt\"></span>\n        </button>\n      </td>\n      <td *ngFor=\"let attributeControl of attributeControls\">\n        <dk-app-attribute [attributeControl]=\"attributeControl\" [isSmallSize] = \"isSmallSize\"\n                          [formGroup]=\"formGroup\" [readonly]=\"readonly\">\n\n        </dk-app-attribute>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<div *ngIf=\"currentFormGroup\" class=\"modal fade dk-modal-open\" [ngClass]=\"{'show': isDetailModalShown}\"\n     [ngStyle]=\"{'display': displayDetailModal}\" id=\"detailModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"detail\">Line Detail</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeDetailModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <dk-app-attribute-form *ngFor=\"let attributeControl of attributeControls\"\n                               [readonly]=\"readonly\" [isSmallSize]=\"isSmallSize\"\n                            [attributeControl]=\"attributeControl\" [formGroup]=\"currentFormGroup\">\n        </dk-app-attribute-form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" [class.btn-sm]=\"isSmallSize\" (click)=\"closeDetailModal()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" [ngClass]=\"{'show': isErrorModalShown}\"\n     [ngStyle]=\"{'display': displayErrorModal}\" id=\"errorModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"error\">{{errorTitle}}</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeErrorModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{errorDescription}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" [class.btn-sm]=\"isSmallSize\" (click)=\"closeErrorModal()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n",
        styles: [".relation-table{display:block;overflow-x:auto;white-space:nowrap;border:none}.actions{width:5rem;min-width:5rem;max-width:6rem}.dk-modal-open{overflow:auto}"]
      }]
    }];
    /** @nocollapse */

    AttributeTableComponent.ctorParameters = function () {
      return [];
    };

    AttributeTableComponent.propDecorators = {
      attributeControls: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formArray: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      parentFormGroup: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      entityRelation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isSmallSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      readonly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/jor-angular.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var JorAngularComponent =
    /*#__PURE__*/
    function () {
      function JorAngularComponent() {
        _classCallCheck(this, JorAngularComponent);
      }
      /**
       * @return {?}
       */


      _createClass(JorAngularComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JorAngularComponent;
    }();

    JorAngularComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'dk-jor-angular',
        template: "<!-- html content -->\n",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: ["input.ng-invalid,select.ng-invalid{border-color:#dc3545}.ng-invalid+.invalid-tooltip{display:block;max-width:inherit}.ng-invalid+.dk-invalid-feedback,.ng-invalid.dk-invalid-feedback{display:inline}.dk-invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.primaryKey{color:red}.errorMessage{color:red;font-size:.8rem}"]
      }]
    }];
    /** @nocollapse */

    JorAngularComponent.ctorParameters = function () {
      return [];
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/jor-angular.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var JorAngularModule = function JorAngularModule() {
      _classCallCheck(this, JorAngularModule);
    };

    JorAngularModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [JorAngularComponent, SearchHelpComponent, AttributeComponent, AttributeFormComponent, AttributeTableComponent, AttributeForm2Component],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
        exports: [JorAngularComponent, SearchHelpComponent, AttributeComponent, AttributeFormComponent, AttributeForm2Component, AttributeTableComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: jor-angular.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=jor-angular.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: 'entity',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | entity-entity-module */
        [__webpack_require__.e("default~entity-entity-module~model-model-module"), __webpack_require__.e("entity-entity-module")]).then(__webpack_require__.bind(null,
        /*! ./entity/entity.module */
        "./src/app/entity/entity.module.ts")).then(function (m) {
          return m.EntityModule;
        });
      }
    }, {
      path: 'model',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | model-model-module */
        [__webpack_require__.e("default~entity-entity-module~model-model-module"), __webpack_require__.e("model-model-module")]).then(__webpack_require__.bind(null,
        /*! ./model/model.module */
        "./src/app/model/model.module.ts")).then(function (m) {
          return m.ModelModule;
        });
      }
    }, {
      path: '',
      redirectTo: '/entity/list',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jor-angular */
    "./dist/jor-angular/fesm2015/jor-angular.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppComponent = function AppComponent(entityService) {
      _classCallCheck(this, AppComponent);

      this.entityService = entityService;
      this.entityService.setOriginalHost(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].originalHost);
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"]
      }];
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    }), __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./custom.reuse.strategy */
    "./src/app/custom.reuse.strategy.ts");
    /* harmony import */


    var jor_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! jor-angular */
    "./dist/jor-angular/fesm2015/jor-angular.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], jor_angular__WEBPACK_IMPORTED_MODULE_7__["JorAngularModule"]],
      providers: [{
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"],
        useClass: _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_6__["CustomReuseStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/custom.reuse.strategy.ts":
  /*!******************************************!*\
    !*** ./src/app/custom.reuse.strategy.ts ***!
    \******************************************/

  /*! exports provided: CustomReuseStrategy */

  /***/
  function srcAppCustomReuseStrategyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomReuseStrategy", function () {
      return CustomReuseStrategy;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CustomReuseStrategy =
    /*#__PURE__*/
    function () {
      function CustomReuseStrategy() {
        _classCallCheck(this, CustomReuseStrategy);

        this.routesToCache = ['list'];
        this.storedRouteHandles = new Map();
      }
      /**
       * When navigation from a reusable component, and if shouldReuseRoute return false,
       * this method is invoked to decide whether the current route should be stored.
       * @param route
       */


      _createClass(CustomReuseStrategy, [{
        key: "shouldDetach",
        value: function shouldDetach(route) {
          // console.log('detaching', route);
          return this.routesToCache.indexOf(route.routeConfig.path) > -1;
        }
        /**
         * If the current route need to be stored, that is shouldDetach return true,
         * then on this method, you can implement a way to store routes. Usually in a Map.
         * @param route
         * @param handle
         */

      }, {
        key: "store",
        value: function store(route, handle) {
          // console.log('store', route);
          this.storedRouteHandles.set(route.routeConfig.path, handle);
        }
        /**
         * When navigation to a reusable component, and if shouldReuseRoute return false,
         * this method is invoked to decide whether the target component can be get from a reuse buffer.
         * @param route
         */

      }, {
        key: "shouldAttach",
        value: function shouldAttach(route) {
          // console.log('shouldAttach', route);
          return this.storedRouteHandles.has(route.routeConfig.path);
        }
        /**
         * If shouldAttach return true, then this method is invoke to retrieve the component from the buffer.
         * @param route
         */

      }, {
        key: "retrieve",
        value: function retrieve(route) {
          return this.storedRouteHandles.get(route.routeConfig.path);
        }
        /**
         * By default, Angular doesn't re-initializing the same component if the navigation is not to
         * a different one. For example, you switch different entity ID in the same entity type detail page.
         * In this way, shouldReuseRoute should return true to avoid executing other methods in this Class.
         * However, if you navigate from search&list component to entity detail component, then the method should return false.
         * So that other methods can be executed to decide whether the search&list component should be stored for future reuse.
         * @param future
         * @param curr
         */

      }, {
        key: "shouldReuseRoute",
        value: function shouldReuseRoute(future, curr) {
          // console.log('shouldReuseRoute, future:', future, 'current:', curr);
          return future.routeConfig === curr.routeConfig;
        }
      }]);

      return CustomReuseStrategy;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }; // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      originalHost: 'http://localhost:3000'
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/VinceZK/workspace/javascript/json-on-relations/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map