/**
 * This file includes a user function 'getRoleDetail',
 * which returns the role information and forms the portal navigation structure.
 * The role information is read based on the logon user ID.
 */
const userFunction = require('json-on-relations').UserFunction;
const entity = require('json-on-relations').Entity;
const async = require('async');

userFunction.register('getRoleDetail', function (input, user, callback) {
  entity.getInstancePieceByID (
    {RELATION_ID: 'r_user', USER_ID: user['identity']['userBasic']['USER_ID']},
    {RELATIONSHIPS: ['rs_user_role']},
    function (err, instance) {
      if (err) return callback(err);
      const permissions = instance.relationships[0].values || [];
      _getPermissions(permissions, function (err, results) {
        if (err) return callback(err);
        callback(null, results);
      });
  })
});

function _getPermissions(permissions, callback) {
  async.map(permissions, function (permission, callback) {
    entity.getInstanceByGUID(permission.PARTNER_INSTANCES[0].INSTANCE_GUID,
      function (err, instance) {
        if (err) return callback(err);
        const role = {name: instance['r_role'][0]['DESCRIPTION'], categories: []};
        const rs_system_role_category = instance.relationships.find(
          relationship => relationship.RELATIONSHIP_ID === 'rs_system_role_category');
        if (rs_system_role_category) {
          const categoryGUIDs = rs_system_role_category.values || [];
          _getCategories(categoryGUIDs, function (err, results) {
            if (err) return callback(err);
            role.categories = results;
            callback(null, role);
          })
        } else {
          callback(null, role);
        }
      });
  }, function (err, results) {
    if (err) callback(err);
    else callback(null, results);
  });
}

function _getCategories(categoryGUIDs, callback) {
  async.map(categoryGUIDs, function (category, callback) {
    entity.getInstanceByGUID(category.PARTNER_INSTANCES[0].INSTANCE_GUID,
      function (err, instance) {
        if (err) return callback(err);
        const category = {
          name: instance['r_app_category'][0]['NAME'],
          icon: instance['r_app_category'][0]['ICON'],
          apps: []
        };
        const rs_app_category = instance.relationships.find(
          relationship => relationship.RELATIONSHIP_ID === 'rs_app_category');
        if (rs_app_category) {
          const appGUIDs = rs_app_category.values || [];
          _getApps(appGUIDs, function (err, results) {
            if (err) return callback(err);
            category.apps = results;
            callback(null, category);
          });
        } else {
          callback(null, category);
        }
      })
  }, function (err, results) {
    if (err) callback(err);
    else callback(null, results);
  });
}

function _getApps(appGUIDs, callback) {
  async.map(appGUIDs, function (app, callback) {
    entity.getInstanceByGUID(app.PARTNER_INSTANCES[0].INSTANCE_GUID,
      function (err, instance) {
        if (err) callback(err);
        else callback(null,
          {name: instance['app'][0]['NAME'], appID: instance['app'][0]['APP_ID'],
            routeLink: instance['app'][0]['ROUTE_LINK'], isExternal: instance['app'][0]['IS_EXTERNAL']});
      })
  }, function (err, results) {
    if (err) callback(err);
    else callback(null, results);
  });
}
