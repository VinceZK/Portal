import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogService} from "../../dialog.service";
import {IdentityService} from "../../identity.service";
import {MessageModule, MessageService} from "ui-message-angular";
import {CommonModule} from "@angular/common";
import {UserRoutingModule} from "../user-routing.module";
import {UserListComponent} from "../user-list/user-list.component";
import {UserBasicComponent} from "./user-basic/user-basic.component";
import {UserPersonalizationComponent} from "./user-personalization/user-personalization.component";
import {UserRoleComponent} from "./user-role/user-role.component";
import {UserEmailComponent} from "./user-email/user-email.component";
import {UserAddressComponent} from "./user-address/user-address.component";
import {ActivatedRouteStub} from "../../../testing/activated-route-stub";
import {of} from "rxjs";

let component: UserDetailComponent;
let fixture: ComponentFixture<UserDetailComponent>;
const userDetail = {
  INSTANCE_GUID: "2FBE7490E10F11E8A90957FA46F2CECA", ENTITY_ID: "person",
  r_user: [
    { DISPLAY_NAME: "Vincent Zhang", FAMILY_NAME: "Zhang", GIVEN_NAME: "Vincent", LOCK: null,
      MIDDLE_NAME: "xxxx", PASSWORD: "Dark1234", PWD_STATE: 1, USER_ID: "DH001", USER_NAME: "VINCEZK"}
  ],
  r_employee: [
    { COMPANY_ID: "Darkhouse", DEPARTMENT_ID: "Development", GENDER: "Male", TITLE: "Developer", USER_ID: "DH001" }
  ],
  r_email: [
    { EMAIL: "DH001@hotmail.com", PRIMARY: 1, TYPE: "private" }
  ],
  r_address: [
    { ADDRESS_ID: 527, ADDRESS_VALUE: "Room #999, Building #99, XXX Road #999",
      CITY: "Shanghai", COUNTRY: "China", POSTCODE: 201202, PRIMARY: 1, TYPE: "Current Live"},
    { ADDRESS_ID: 528, ADDRESS_VALUE: "Village LeeZhoo",
      CITY: "Haimen", COUNTRY: "China", POSTCODE: 226126, PRIMARY: 0, TYPE: "Born Place"}
  ],
  r_personalization: [
    { DATE_FORMAT: null, DECIMAL_FORMAT: null, LANGUAGE: "ZH", TIMEZONE: " UTC+8", USER_ID: "DH001"}
  ],
  relationships: [
    { RELATIONSHIP_ID: "rs_user_role", SELF_ROLE_ID: "system_user",
      values: [
        {
          PARTNER_INSTANCES: [{
            ENTITY_ID: "permission", INSTANCE_GUID: "391E75B02A1811E981F3C33C6FB0A7C1", ROLE_ID: "system_role",
            r_role: [{ DESCRIPTION: "Administrator", NAME: "administrator" }]
          }],
          RELATIONSHIP_INSTANCE_GUID: "06FEB4702A1B11E981F3C33C6FB0A7C1", SYNCED: 1
        }
      ]
    }
  ]
};
const userDetailFormValue = {
  LOCK: null, PWD_STATUS: null, USER_ID: "DH001",
  userBasic: {
    employee: { COMPANY_ID: "Darkhouse", DEPARTMENT_ID: "Development", GENDER: "Male", TITLE: "Developer" },
    names: {
      DISPLAY_NAME: "Vincent Zhang", FAMILY_NAME: "Zhang", GIVEN_NAME: "Vincent", MIDDLE_NAME: "xxxx", USER_NAME: "VINCEZK"
    }
  },
  emails: [
    { EMAIL: "DH001@hotmail.com", TYPE: "private", PRIMARY: 1 },
  ],
  addresses: [
    { ADDRESS_ID: 527, ADDRESS_VALUE: "Room #999, Building #99, XXX Road #999",
      CITY: "Shanghai", COUNTRY: "China", POSTCODE: 201202, PRIMARY: 1, TYPE: "Current Live"
    },
    { ADDRESS_ID: 528, ADDRESS_VALUE: "Village LeeZhoo",
      CITY: "Haimen", COUNTRY: "China", POSTCODE: 226126, PRIMARY: 0, TYPE: "Born Place"
    }
  ],
  userPersonalization: {
    DATE_FORMAT: null, DECIMAL_FORMAT: null, LANGUAGE: "ZH", TIMEZONE: " UTC+8", USER_ID: "DH001"
  },
  userRole: [
    {NAME: "administrator", DESCRIPTION: "Administrator", INSTANCE_GUID: "391E75B02A1811E981F3C33C6FB0A7C1"}
  ]
};
const newUserDetail = {
  ENTITY_ID: "person",
  r_email: [],
  r_employee: [{COMPANY_ID: "", DEPARTMENT_ID: "", GENDER: "", TITLE: ""}],
  r_personalization: [{USER_ID: "", LANGUAGE: "", TIMEZONE: "", DECIMAL_FORMAT: "", DATE_FORMAT: ""}],
  r_user: [{DISPLAY_NAME: "", FAMILY_NAME: "", GIVEN_NAME: "", LOCK: 0, MIDDLE_NAME: "",
            PWD_STATUS: "", USER_ID: "", USER_NAME: ""}],
  relationships: []
};

fdescribe('UserDetailComponent', () => {
  let activatedRoute: ActivatedRouteStub;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const identityServiceSpy = jasmine.createSpyObj('IdentityServiceSpy',
    ['getUserDetail', 'saveUser', 'getUserByUserName', 'getUserByUserID']);
  identityServiceSpy.getUserDetail.withArgs(null).and.returnValue( of(newUserDetail));
  identityServiceSpy.getUserDetail.withArgs('DH001').and.returnValue( of(userDetail));

  beforeEach(async(() => {
    activatedRoute = new ActivatedRouteStub();
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MessageModule,
        UserRoutingModule
      ],
      declarations: [
        UserListComponent,
        UserDetailComponent,
        UserBasicComponent,
        UserPersonalizationComponent,
        UserRoleComponent,
        UserEmailComponent,
        UserAddressComponent
      ],
      providers: [
        FormBuilder,
        {provide: ActivatedRoute, useValue: activatedRoute},
        DialogService,
        {provide: IdentityService, useValue: identityServiceSpy},
        MessageService,
        {provide: Router, useValue: routerSpy}
      ]
    })
    .compileComponents();
  }));

  describe('initialize the component', () => {
    beforeEach(async(() => {
      fixture = TestBed.createComponent(UserDetailComponent);
      component = fixture.componentInstance;
      // 1st change detection triggers ngOnInit
      fixture.detectChanges();
      return fixture.whenStable().then( () => {
        // 2dn change detection gets a user
        fixture.detectChanges();
      });
    }));

    it('should initialize the component in display mode', async(() => {
      activatedRoute.setParamMap({ userID: 'DH001', action: 'display' });
      expect(identityServiceSpy.getUserDetail.calls.any())
        .toBe(true, 'getUserDetail is called once');
      expect(component.isNewMode).toBeFalsy('not in new mode');
      expect(component.instanceGUID).toBe('2FBE7490E10F11E8A90957FA46F2CECA');
      expect(component.originalUserValue).toEqual(userDetailFormValue);
      expect(component.readonly).toBeTruthy('in display mode');
    }));

    it('should initialize the component in change mode', async(() => {
      activatedRoute.setParamMap({ userID: 'DH001', action: 'change'  });
      expect(component.readonly).toBeFalsy('in change mode');
    }));

    it('should initialize the component in new mode', async(() => {
      activatedRoute.setParamMap({ action: 'new' });
      expect(component.isNewMode).toBeTruthy('in new mode');
      expect(component.instanceGUID).toBeUndefined();
      expect(component.readonly).toBeFalsy('in change mode');
    }));
  });
});
