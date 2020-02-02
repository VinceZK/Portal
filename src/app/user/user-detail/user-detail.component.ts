import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Message, MessageService} from "ui-message-angular";
import {msgStore} from "../../msgStore";
import {switchMap} from "rxjs/operators";
import {IdentityService} from "../../identity.service";
import {forkJoin, Observable, of} from "rxjs";
import {
  AttributeBase,
  AttributeControlService,
  Entity,
  EntityService,
  RelationMeta,
  UiMapperService
} from "jor-angular";
import {existingUserIDValidator, existingUserNameValidator} from "./async-validators";
import {DialogService} from "../../dialog.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userForm: FormGroup;
  relationMetas: RelationMeta[];
  attrCtrls: AttributeBase[];
  readonly = true;
  isNewMode = false;
  action: string;
  instanceGUID: string;
  originalUserValue = {};
  changedUser = {};
  tabStrip = 1;

  get pwdStatus(): string {
    switch (this.userForm.get('PWD_STATUS').value) {
      case '':
        return 'Initial';
      case 1:
        return 'Active';
      case 3:
        return 'Need Change';
      default:
        return 'Initial';
    }
  }

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private dialogService: DialogService,
              private identityService: IdentityService,
              private attributeControlService: AttributeControlService,
              private entityService: EntityService,
              private uiMapperService: UiMapperService,
              private messageService: MessageService) {
    this.messageService.setMessageStore(msgStore, 'EN');
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.action = params.get('action');
        if (this.action === 'new') {
          this.isNewMode = true;
          return forkJoin(
            this.entityService.getRelationMetaOfEntity('person'), this._createNewUser());
        } else {
          this.isNewMode = false;
          return forkJoin(
            this.entityService.getRelationMetaOfEntity('person'),
            this.identityService.getUserDetail(params.get('userID')));
        }
      })
    ).subscribe( data => {
      this.relationMetas = data[0] as RelationMeta[];
      this.attrCtrls = this.attributeControlService.toAttributeControl(
        this.relationMetas.find( relationMeta => relationMeta.RELATION_ID === 'r_user').ATTRIBUTES);
      if ('ENTITY_ID' in data[1]) {
        this.instanceGUID = data[1]['INSTANCE_GUID'];
        this._generateUserForm(<Entity>data[1]);
        if (this.isNewMode || this.action === 'change') {
          this._switch2EditMode();
        } else {
          this._switch2DisplayMode();
        }
      } else {
        const errorMessages = <Message[]>data[1];
        errorMessages.forEach( msg => this.messageService.add(msg));
      }
    });
  }

  getAttrCtrlFromID(fieldName: string): AttributeBase {
    return this.attrCtrls.find( attrCtrl => attrCtrl.name === fieldName);
  }

  switchTabStrip(tabStripID: number): void {
    this.tabStrip = tabStripID;
  }

  switchEditDisplay(): void {
    if (this.readonly ) {
      this._switch2EditMode();
    } else {
      if (this.userForm.dirty) {
        this.dialogService.confirm('Discard changes?').subscribe(confirm => {
          if (confirm) {
            this.userForm.reset(this.originalUserValue);
            this._switch2DisplayMode();
          }
        });
      } else {
        this._switch2DisplayMode();
      }
    }
    this.messageService.clearMessages();
  }

  _switch2DisplayMode(): void {
    this.readonly = true;
    this._setCheckBoxState();

    const userIDCtrl = this.userForm.get('USER_ID') as FormControl;
    userIDCtrl.clearAsyncValidators();
    const userNameCtrl = this.userForm.get('userBasic.names.USER_NAME') as FormControl;
    userNameCtrl.clearAsyncValidators();

    const emailArray = this.userForm.get('emails') as FormArray;
    let lastIndex = emailArray.length - 1;
    while (lastIndex >= 0) {
      const emailFormGroup = emailArray.at(lastIndex);
      if (emailFormGroup.invalid || !emailFormGroup.value.EMAIL) {
        emailArray.removeAt(lastIndex);
      }
      lastIndex--;
    }

    const addressArray = this.userForm.get('addresses') as FormArray;
    lastIndex = addressArray.length - 1;
    while (lastIndex >= 0) {
      const addressFormGroup = addressArray.at(lastIndex);
      if (addressFormGroup.invalid || !addressFormGroup.value.ADDRESS_VALUE) {
        addressArray.removeAt(lastIndex);
      }
      lastIndex--;
    }

    const roleArray = this.userForm.get('userRole') as FormArray;
    lastIndex = roleArray.length - 1;
    while (lastIndex >= 0) {
      const roleFormGroup = roleArray.at(lastIndex);
      if (roleFormGroup.invalid || !roleFormGroup.value.NAME) {
        roleArray.removeAt(lastIndex);
      }
      lastIndex--;
    }

    this.userForm.markAsPristine();
    // Replace the URL from change to display
    window.history.replaceState({}, '', `/users/${userIDCtrl.value};action=display`);
  }

  _switch2EditMode(): void {
    this.readonly = false;
    this._setCheckBoxState();

    const userIDCtrl = this.userForm.get('USER_ID') as FormControl;
    if (this.isNewMode) {
      userIDCtrl.setAsyncValidators(
        existingUserIDValidator(this.identityService, this.messageService));
    }

    const userNameCtrl = this.userForm.get('userBasic.names.USER_NAME') as FormControl;
    userNameCtrl.setAsyncValidators(
      existingUserNameValidator(this.identityService, this.messageService, this.userForm.get('USER_ID').value));

    const roleArray = this.userForm.get('userRole') as FormArray;
    roleArray.push( this.fb.group({
      NAME: [''],
      DESCRIPTION: [''],
      system_role_INSTANCE_GUID: [''],
      RELATIONSHIP_INSTANCE_GUID: [''],
    }));

    // Replace the URL from to display
    if (this.action === 'display') {this.action = 'change'; }
    window.history.replaceState({}, '', `/users/${userIDCtrl.value};action=` + this.action);
  }

  _createNewUser(): Observable<Entity> {
    const userDetail = new Entity();
    userDetail['ENTITY_ID'] = 'person';
    userDetail['r_user'] = [
      { USER_ID: '', LOCK: 0, PWD_STATUS: '', USER_NAME: '', DISPLAY_NAME: '',
        GIVEN_NAME: '', MIDDLE_NAME: '', FAMILY_NAME: ''}
    ];
    userDetail['r_employee'] = [
      {TITLE: '', DEPARTMENT_ID: '', COMPANY_ID: '', GENDER: ''}
    ];
    userDetail['r_email'] = [];
    userDetail['r_personalization'] = [
      {USER_ID: '', LANGUAGE: '', TIMEZONE: '', DECIMAL_FORMAT: '', DATE_FORMAT: ''}
    ];
    userDetail['relationships'] = [];
    return of(userDetail);
  }

  _generateUserForm(data: Entity): void {
    this.userForm = this.fb.group({
      USER_ID: [data['r_user'][0]['USER_ID'], [Validators.required]],
      LOCK: [data['r_user'][0]['LOCK']],
      PWD_STATUS: [data['r_user'][0]['PWD_STATUS']],
      userBasic: this.fb.group({
        names: this.fb.group({
          USER_NAME: [data['r_user'][0]['USER_NAME'], [Validators.required]],
          DISPLAY_NAME: [data['r_user'][0]['DISPLAY_NAME'], [Validators.required]],
          GIVEN_NAME: [data['r_user'][0]['GIVEN_NAME']],
          MIDDLE_NAME: [data['r_user'][0]['MIDDLE_NAME']],
          FAMILY_NAME: [data['r_user'][0]['FAMILY_NAME']]
        }),
        employee: this.fb.group({
          TITLE: [data['r_employee'][0]['TITLE']],
          DEPARTMENT_ID: [data['r_employee'][0]['DEPARTMENT_ID']],
          COMPANY_ID: [data['r_employee'][0]['COMPANY_ID'], [Validators.required]],
          GENDER: [data['r_employee'][0]['GENDER']]
        })
      }),
      emails:  this.fb.array([]),
      addresses: this.fb.array([]),
      userPersonalization: this.fb.group({
        USER_ID: [data['r_personalization'] ? data['r_personalization'][0]['USER_ID'] : ''],
        LANGUAGE: [data['r_personalization'] ? data['r_personalization'][0]['LANGUAGE'] : ''],
        TIMEZONE: [data['r_personalization'] ? data['r_personalization'][0]['TIMEZONE'] : ''],
        DECIMAL_FORMAT: [data['r_personalization'] ? data['r_personalization'][0]['DECIMAL_FORMAT'] : ''],
        DATE_FORMAT: [data['r_personalization'] ? data['r_personalization'][0]['DATE_FORMAT'] : '']
      }),
      userRole: this.fb.array([])
    });

    const emailArray = this.userForm.get('emails') as FormArray;
    data['r_email'].forEach( email => {
      emailArray.push(
        this.fb.group({
          EMAIL: [email['EMAIL'], [Validators.required]],
          TYPE: [email['TYPE'], [Validators.required]],
          PRIMARY: [email['PRIMARY']]
        })
      );
    });

    const addressArray = this.userForm.get('addresses') as FormArray;
    if (data['r_address']) {
      data['r_address'].forEach( address => {
        addressArray.push(
          this.fb.group({
            ADDRESS_ID: [address['ADDRESS_ID']],
            TYPE: [address['TYPE'], [Validators.required]],
            ADDRESS_VALUE: [address['ADDRESS_VALUE'], [Validators.required]],
            POSTCODE: [address['POSTCODE']],
            CITY: [address['CITY']],
            COUNTRY: [address['COUNTRY']],
            PRIMARY: [address['PRIMARY']]
          })
        );
      });
    }

    const roleArray = this.userForm.get('userRole') as FormArray;
    const userRoleRelationship = data['relationships'][0];
    if (userRoleRelationship) {
      userRoleRelationship.values.forEach( value => {
        const roleInstance = value.PARTNER_INSTANCES[0];
        roleArray.push(
          this.fb.group({
            NAME: [roleInstance['r_role'][0]['NAME']],
            DESCRIPTION: [roleInstance['r_role'][0]['DESCRIPTION']],
            system_role_INSTANCE_GUID: [roleInstance['INSTANCE_GUID']],
            RELATIONSHIP_INSTANCE_GUID: [value['RELATIONSHIP_INSTANCE_GUID']]
          })
        );
      });
    }

    this.originalUserValue = this.userForm.getRawValue();
  }

  _resetUserValue(data: Entity): void {
    this.originalUserValue = {
      USER_ID: data['r_user'][0]['USER_ID'],
      LOCK: data['r_user'][0]['LOCK'],
      PWD_STATUS: data['r_user'][0]['PWD_STATUS'],
      userBasic: {
        names: {
          USER_NAME: data['r_user'][0]['USER_NAME'],
          DISPLAY_NAME: data['r_user'][0]['DISPLAY_NAME'],
          GIVEN_NAME: data['r_user'][0]['GIVEN_NAME'],
          MIDDLE_NAME: data['r_user'][0]['MIDDLE_NAME'],
          FAMILY_NAME: data['r_user'][0]['FAMILY_NAME']
        },
        employee: {
          TITLE: data['r_employee'][0]['TITLE'],
          DEPARTMENT_ID: data['r_employee'][0]['DEPARTMENT_ID'],
          COMPANY_ID: data['r_employee'][0]['COMPANY_ID'],
          GENDER: data['r_employee'][0]['GENDER']
        }
      },
      emails: [],
      addresses: [],
      userPersonalization: {
        USER_ID: data['r_personalization'] ? data['r_personalization'][0]['USER_ID'] : '',
        LANGUAGE: data['r_personalization'] ? data['r_personalization'][0]['LANGUAGE'] : '',
        TIMEZONE: data['r_personalization'] ? data['r_personalization'][0]['TIMEZONE'] : '',
        DECIMAL_FORMAT: data['r_personalization'] ? data['r_personalization'][0]['DECIMAL_FORMAT'] : '',
        DATE_FORMAT: data['r_personalization'] ? data['r_personalization'][0]['DATE_FORMAT'] : ''
      },
      userRole: []
    };

    data['r_email'].forEach( email => {
      this.originalUserValue['emails'].push(
        {
          EMAIL: email['EMAIL'],
          TYPE: email['TYPE'],
          PRIMARY: email['PRIMARY']
        }
      );
    });

    if (data['r_address']) {
      data['r_address'].forEach( address => {
        this.originalUserValue['addresses'].push(
          {
            ADDRESS_ID: address['ADDRESS_ID'],
            TYPE: address['TYPE'],
            ADDRESS_VALUE: address['ADDRESS_VALUE'],
            POSTCODE: address['POSTCODE'],
            CITY: address['CITY'],
            COUNTRY: address['COUNTRY'],
            PRIMARY: address['PRIMARY']
          }
        );
      });
    }

    const userRoleRelationship = data['relationships'][0];
    if (userRoleRelationship) {
      userRoleRelationship.values.forEach( value => {
        const roleInstance = value.PARTNER_INSTANCES[0];
        this.originalUserValue['userRole'].push(
          {
            NAME: [roleInstance['r_role'][0]['NAME']],
            DESCRIPTION: [roleInstance['r_role'][0]['DESCRIPTION']],
            system_role_INSTANCE_GUID: [roleInstance['INSTANCE_GUID']],
            RELATIONSHIP_INSTANCE_GUID: [value['RELATIONSHIP_INSTANCE_GUID']]
          }
        );
      });
    }

    this.userForm.reset(this.originalUserValue);
  }

  _setCheckBoxState() {
    const userEmailFormArray = this.userForm.get('emails') as FormArray;
    const userAddressFormArray = this.userForm.get('addresses') as FormArray;
    const userEmployeeForm = this.userForm.get('userBasic').get('employee') as FormGroup;
    const userPersonalizationForm = this.userForm.get('userPersonalization') as FormGroup;
    if (this.readonly) {
      userEmailFormArray.controls.forEach( userEmailForm => {
        userEmailForm.get('PRIMARY').disable();
        userEmailForm.get('TYPE').disable();
      });
      userAddressFormArray.controls.forEach( userAddressForm => {
        userAddressForm.get('PRIMARY').disable();
        userAddressForm.get('TYPE').disable();
      });
      userEmployeeForm.get('GENDER').disable();
      userPersonalizationForm.get('LANGUAGE').disable();
      userPersonalizationForm.get('TIMEZONE').disable();
      userPersonalizationForm.get('DECIMAL_FORMAT').disable();
      userPersonalizationForm.get('DATE_FORMAT').disable();
    } else {
      userEmailFormArray.controls.forEach( userEmailForm => {
        userEmailForm.get('PRIMARY').enable();
        userEmailForm.get('TYPE').enable();
      });
      userAddressFormArray.controls.forEach( userAddressForm => {
        userAddressForm.get('PRIMARY').enable();
        userAddressForm.get('TYPE').enable();
      });
      userEmployeeForm.get('GENDER').enable();
      userPersonalizationForm.get('LANGUAGE').enable();
      userPersonalizationForm.get('TIMEZONE').enable();
      userPersonalizationForm.get('DECIMAL_FORMAT').enable();
      userPersonalizationForm.get('DATE_FORMAT').enable();
    }
  }

  save() {
    this.messageService.clearMessages();
    if (this._composeChangesToUser()) {
      this.identityService.saveUser(<Entity>this.changedUser).subscribe( data => {
        this.changedUser = {};
        if ('INSTANCE_GUID' in data) {
          const userID = data['r_user'][0]['USER_ID'];
          this.instanceGUID = data['INSTANCE_GUID'];
          this.isNewMode = false;
          this.identityService.getUserDetail(userID).subscribe(userData => {
            if ('ENTITY_ID' in userData) {
              this._switch2DisplayMode();
              this._resetUserValue(<Entity>userData);
            } else {
              const errorMessages = <Message[]>userData;
              errorMessages.forEach( msg => this.messageService.add(msg));
            }
          });
          this.messageService.reportMessage('USER', 'USER_SAVED', 'S', userID);
        } else {
          const errorMessages = <Message[]>data;
          errorMessages.forEach( msg => this.messageService.add(msg));
        }
      });
    }
  }

  _composeChangesToUser() {
    if (this.userForm.invalid) {
      this.messageService.reportMessage('USER', 'INVALID', 'E');
      return false;
    }

    if (this.userForm.dirty === false) {
      this.messageService.reportMessage('GENERAL', 'NO_CHANGE', 'W');
      return false;
    }

    this.changedUser['ENTITY_ID'] = 'person';
    this.changedUser['INSTANCE_GUID'] = this.instanceGUID;
    if (this.isNewMode) {
      this.changedUser['person'] = {action: 'add', TYPE: 'employee', SYSTEM_ACCESS: 'PORTAL'};
    }

    const userBasicFormGroup = this.userForm.get('userBasic');
    const userID = this.userForm.get('USER_ID').value;
    if (userBasicFormGroup.dirty) {
      const userBasicNamesFormGroup = userBasicFormGroup.get('names') as FormGroup;
      this.changedUser['r_user'] = this.uiMapperService.composeChangedRelation(
        userBasicNamesFormGroup, {USER_ID: userID}, this.isNewMode);

      const userBasicEmployeeFormGroup = userBasicFormGroup.get('employee') as FormGroup;
      this.changedUser['r_employee'] = this.uiMapperService.composeChangedRelation(
        userBasicEmployeeFormGroup, {USER_ID: userID}, this.isNewMode);
    }

    const userEmailFormArray = this.userForm.get('emails') as FormArray;
    this.changedUser['r_email'] = this.uiMapperService.composeChangedRelationArray(
      userEmailFormArray, this.originalUserValue['emails'], {EMAIL: null});

    const userAddressFormArray = this.userForm.get('addresses') as FormArray;
    this.changedUser['r_address'] = this.uiMapperService.composeChangedRelationArray(
      userAddressFormArray, this.originalUserValue['addresses'], {ADDRESS_ID: null});

    const userPersonalizationFormGroup = this.userForm.get('userPersonalization') as FormGroup;
    this.changedUser['r_personalization'] = this.uiMapperService.composeChangedRelation(
      userPersonalizationFormGroup, {USER_ID: userID}, !userPersonalizationFormGroup.get('USER_ID').value);

    const userRoleFormArray = this.userForm.get('userRole') as FormArray;
    const relationship = this.uiMapperService.composeChangedRelationship(
      'rs_user_role',
      [{ENTITY_ID: 'permission', ROLE_ID: 'system_role'}],
      userRoleFormArray, this.originalUserValue['userRole'], ['NAME', 'DESCRIPTION']);
    if (relationship) {this.changedUser['relationships'] = [relationship]; }

    return true;
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.isNewMode || (this.userForm && this.userForm.dirty)) {
      return this.dialogService.confirm('Discard changes?');
    } else {
      return true;
    }
  }
}

