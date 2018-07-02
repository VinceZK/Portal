/**
 * Created by VinceZK on 06/29/18.
 */
const entity = require('../server/models/entity.js');

describe.only('entity tests', function () {
  before(function (done) {
    entity.entityDB.loadEntity('person', done);
  });

  let instance =
    { ENTITY_ID: 'person',
      HOBBY: ['Reading', 'Movie', 'Coding'], HEIGHT: '170', GENDER: 'male', FINGER_PRINT: 'CA67DE15727C72961EB4B6B59B76743E',
      r_user: {USER_ID: 'DH001', USER_NAME:'VINCEZK', DISPLAY_NAME: 'Vincent Zhang'},
      r_email: [{EMAIL: 'zklee@hotmail.com', TYPE: 'private', PRIMARY:1},
                {EMAIL: 'vinentzklee@gmail.com', TYPE: 'private important', PRIMARY:0}
        ],
      r_address: [{COUNTRY: 'China', CITY:'Shanghai', POSTCODE: 201202,
                   ADDRESS_VALUE:'Room #402, Building #41, Dongjing Road #393',
                   TYPE: 'Current Live', PRIMARY:1},
                  {COUNTRY: 'China', CITY:'Haimen', POSTCODE: 226126,
                   ADDRESS_VALUE:'Group 8 Lizhu Tangjia',
                   TYPE: 'Born Place', PRIMARY:0}],
      r_employee: {USER_ID: 'DH001', COMPANY:'Darkhouse', DEPARTMENT: 'Development', TITLE: 'Developer', GENDER:'Male'},
      relationships:[
         {RELATIONSHIP_ID: 'user_role', SELF_ROLE_ID: 'system_user', PARTNER_ROLE_ID: 'system_role', PARTNER_ENTITY_ID: 'system_role',
           values:[{INSTANCE_GUID: '5F50DE92743683E1ED7F964E5B9F6167'}]
           }]
    };

  it('should create an instance of person', function (done) {
    entity.createInstance(instance,function (err, instance) {
      should(err).eql(null);
      done();
    });
  });

  it('should get an instance of person', function (done) {
    entity.getInstanceByGUID(instance.INSTANCE_GUID, function (err, instance2) {
      should(err).eql(null);
      instance2.ENTITY_ID.should.eql(instance.ENTITY_ID);
      instance2.HOBBY.should.eql(instance.HOBBY);
      instance2.r_user.should.containDeep([instance.r_user]);
      instance2.r_email.should.containDeep(instance.r_email);
      instance2.r_address.should.containDeep(instance.r_address);
      instance2.r_employee.should.containDeep([instance.r_employee]);
      instance2.relationships.should.containDeep(instance.relationships);
      done();
    })
  });

  it('should delete an instance from DB', function (done) {
    entity.hardDeleteByGuid(instance.INSTANCE_GUID, function (err) {
      should(err).eql(null);
      done();
    })
  });

  after('Close the MDB', function (done) {
    entity.entityDB.closeMDB(done);
  })
});
