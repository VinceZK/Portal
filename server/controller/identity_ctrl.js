/**
 * This file includes a user function 'getRoleDetail',
 * which returns the role information and forms the portal navigation structure.
 * The role information is read based on the logon user ID.
 */
const userFunction = require('json-on-relations').UserFunction;
const entity = require('json-on-relations').Entity;

userFunction.register('getRoleDetail', function (input, user, callback) {
  entity.getInstancePieceByID(
    {RELATION_ID: 'r_user', USER_ID: user['identity']['userBasic']['USER_ID']},
    {RELATIONSHIPS: [
      {
        RELATIONSHIP_ID: 'rs_user_role',
        PARTNER_ENTITY_PIECES: {
          RELATIONS: ['r_role'],
          RELATIONSHIPS: [
            {
              RELATIONSHIP_ID: 'rs_role_category_profile',
              PARTNER_ENTITY_PIECES: [{
                ENTITY_ID: 'category',
                piece: { RELATIONS: ['r_app_category'],
                  RELATIONSHIPS: [{RELATIONSHIP_ID: 'rs_app_category',
                    PARTNER_ENTITY_PIECES: { RELATIONS: ['app'] } }]}}]
            }
          ]
        }}
      ]
    },

    function (err, instance) {
      if (err) return callback(err);
      const results = [];
      const rs_user_role = instance.relationships[0];
      if (!rs_user_role) return callback(null, results);

      rs_user_role.values.forEach( userRoleValue => {
        const userRoleInstance = userRoleValue.PARTNER_INSTANCES[0];
        const roleInstance = {
          name: userRoleInstance['r_role'][0]['DESCRIPTION'],
          categories: []
        };
        results.push(roleInstance);
        const rs_role_category_profile = userRoleInstance.relationships[0];
        if (!rs_role_category_profile) return;

        rs_role_category_profile.values.forEach( roleCategoryValue => {
          const roleCategoryInstance =
            roleCategoryValue.PARTNER_INSTANCES.find(partner => partner.ENTITY_ID === 'category');
          const categoryInstance = {
            order: roleCategoryValue['ORDER'],
            name: roleCategoryInstance['r_app_category'][0]['NAME'],
            icon: roleCategoryInstance['r_app_category'][0]['ICON'],
            apps: []
          };
          roleInstance.categories.push(categoryInstance);
          const rs_app_category = roleCategoryInstance.relationships[0];
          if (!rs_app_category) return;

          rs_app_category.values.forEach( categoryAppValue => {
            const categoryAppInstance = categoryAppValue.PARTNER_INSTANCES[0];
            const appInstance = {
              order: categoryAppValue['ORDER'],
              name: categoryAppInstance['app'][0]['NAME'],
              appID: categoryAppInstance['app'][0]['APP_ID'],
              routeLink: categoryAppInstance['app'][0]['ROUTE_LINK'],
              isExternal: categoryAppInstance['app'][0]['IS_EXTERNAL']
            };
            categoryInstance.apps.push(appInstance);
          })
        });
      });
      results[0]['categories'].sort((a, b) => a.order - b.order);
      callback(null, results);
    }
  )
});
