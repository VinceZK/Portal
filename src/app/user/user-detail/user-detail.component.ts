import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Message, MessageService} from "ui-message-angular";
import {msgStore} from "../../msgStore";
import {switchMap} from "rxjs/operators";
import {IdentityService} from "../../identity.service";
import {Observable, of} from "rxjs";
import {Entity} from "jor-angular";
import {existingUserIDValidator, existingUserNameValidator} from "./async-validators";
import {DialogService} from "../../dialog.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userForm: FormGroup;
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
              private dialogService: DialogService,
              private identityService: IdentityService,
              private messageService: MessageService) {
    this.messageService.setMessageStore(msgStore, 'EN');
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.action = params.get('action');
        if (this.action === 'new') {
          this.isNewMode = true;
          return this._createNewUser();
        } else {
          this.isNewMode = false;
          return this.identityService.getUserDetail(params.get('userID'));
        }
      })
    ).subscribe( data => {
      if ('ENTITY_ID' in data) {
        this.instanceGUID = data['INSTANCE_GUID'];
        this._generateUserForm(<Entity>data);
        this.originalUserValue = this.userForm.getRawValue();
        if (this.isNewMode || this.action === 'change') {
          this._switch2EditMode();
        } else {
          this._switch2DisplayMode();
        }
      } else {
        const errorMessages = <Message[]>data;
        errorMessages.forEach( msg => this.messageService.add(msg));
      }
    });
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
      if (emailFormGroup.invalid || !emailFormGroup.value.EMAIL || emailFormGroup.value.EMAIL.trim() === '') {
        emailArray.removeAt(lastIndex);
      }
      lastIndex--;
    }

    const addressArray = this.userForm.get('addresses') as FormArray;
    lastIndex = addressArray.length - 1;
    while (lastIndex >= 0) {
      const addressFormGroup = addressArray.at(lastIndex);
      if (addressFormGroup.invalid || !addressFormGroup.value.ADDRESS_VALUE || addressFormGroup.value.ADDRESS_VALUE.trim() === '') {
        addressArray.removeAt(lastIndex);
      }
      lastIndex--;
    }

    const roleArray = this.userForm.get('userRole') as FormArray;
    lastIndex = roleArray.length - 1;
    while (lastIndex >= 0) {
      const roleFormGroup = roleArray.at(lastIndex);
      if (roleFormGroup.invalid || !roleFormGroup.value.NAME || roleFormGroup.value.NAME.trim() === '') {
        roleArray.removeAt(lastIndex);
      }
      lastIndex--;
    }

    this.userForm.markAsPristine();
    // Replace the URL from to display
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
    roleArray.push( this.fb.group({NAME: [''], DESCRIPTION: [''], INSTANCE_GUID: ['']}));

    // Replace the URL from to display
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
            INSTANCE_GUID: [roleInstance['INSTANCE_GUID']]
          })
        );
      });
    }
  }

  _setCheckBoxState() {
    const userEmailFormArray = this.userForm.get('emails') as FormArray;
    const userAddressFormArray = this.userForm.get('addresses') as FormArray;
    if (this.readonly) {
      userEmailFormArray.controls.forEach( userEmailForm => userEmailForm.get('PRIMARY').disable());
      userAddressFormArray.controls.forEach( userEmailForm => userEmailForm.get('PRIMARY').disable());
    } else {
      userEmailFormArray.controls.forEach( userEmailForm => userEmailForm.get('PRIMARY').enable());
      userAddressFormArray.controls.forEach( userEmailForm => userEmailForm.get('PRIMARY').enable());
    }
  }

  save() {
    this.messageService.clearMessages();
    if (this._composeChangedUser()) {
      this.identityService.saveUser(<Entity>this.changedUser).subscribe( data => {
        this.changedUser = {};
        if ('INSTANCE_GUID' in data) {
          const userID = data['r_user'][0]['USER_ID'];
          this.isNewMode = false;
          this.instanceGUID = data['INSTANCE_GUID'];
          this.originalUserValue = this.userForm.getRawValue();
          this._switch2DisplayMode();
          this.messageService.reportMessage('USER', 'USER_SAVED', 'S', userID);
        } else {
          const errorMessages = <Message[]>data;
          errorMessages.forEach( msg => this.messageService.add(msg));
        }
      });
    }
  }

  _composeChangedUser() {
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

    const userBasicFormGroup = this.userForm.get('userBasic');
    if (userBasicFormGroup.dirty) {
      const userBasicNamesFormGroup = userBasicFormGroup.get('names') as FormGroup;
      if (userBasicNamesFormGroup.dirty) {
        const r_user = this.changedUser['r_user'] = {
          action: this.isNewMode ? 'add' : 'update', USER_ID: this.userForm.get('USER_ID').value};
          // r_user [1..1], always update
        Object.keys(userBasicNamesFormGroup.controls).forEach( key => {
          const control = userBasicNamesFormGroup.get(key);
          if (control.dirty) { r_user[key] = control.value; }
        });
      }
      const userBasicEmployeeFormGroup = userBasicFormGroup.get('employee') as FormGroup;
      if (userBasicEmployeeFormGroup.dirty) {
        const r_employee = this.changedUser['r_employee'] = {
          action: this.isNewMode ? 'add' : 'update', USER_ID: this.userForm.get('USER_ID').value};
        // r_employee [1..1], always update
        Object.keys(userBasicEmployeeFormGroup.controls).forEach( key => {
          const control = userBasicEmployeeFormGroup.get(key);
          if (control.dirty) { r_employee[key] = control.value; }
        });
      }
    }

    const userEmailFormArray = this.userForm.get('emails') as FormArray;
    if (userEmailFormArray.dirty) {
      const r_email = this.changedUser['r_email'] = [];
      const originalEmails = this.originalUserValue['emails'];
      userEmailFormArray.controls.forEach( emailFormGroup => {
        if (emailFormGroup.dirty) {
          const changedEmail = {};
          r_email.push(changedEmail);
          const index = originalEmails
            .findIndex( element => element['EMAIL'] === emailFormGroup.value['EMAIL']);
          changedEmail['action'] = index === -1 ? 'add' : 'update';
          changedEmail['EMAIL'] = emailFormGroup.get('EMAIL').value;
          Object.keys(emailFormGroup['controls']).forEach( key => {
            const control = emailFormGroup.get(key);
            if (control.dirty) { changedEmail[key] = control.value; }
          });
        }
      });
      originalEmails.forEach( originalEmail => {
        if (userEmailFormArray.controls
          .findIndex( element => element.value['EMAIL'] === originalEmail['EMAIL']) === -1) {
          r_email.push({ action: 'delete', EMAIL: originalEmail['EMAIL']});
        }
      });
    }

    const userAddressFormArray = this.userForm.get('addresses') as FormArray;
    if (userAddressFormArray.dirty) {
      const r_address = this.changedUser['r_address'] = [];
      const originalAddresses = this.originalUserValue['addresses'];
      userAddressFormArray.controls.forEach( addressFormGroup => {
        if (addressFormGroup.dirty) {
          const changedAddress = {};
          r_address.push(changedAddress);
          const index = originalAddresses
            .findIndex( element => element['ADDRESS_ID'] === addressFormGroup.value['ADDRESS_ID']);
          changedAddress['action'] = index === -1 ? 'add' : 'update';
          if (changedAddress['action'] === 'update') {
            changedAddress['ADDRESS_ID'] = addressFormGroup.get('ADDRESS_ID').value;
          }
          Object.keys(addressFormGroup['controls']).forEach( key => {
            const control = addressFormGroup.get(key);
            if (control.dirty) { changedAddress[key] = control.value; }
          });
        }
      });
      originalAddresses.forEach( originalAddress => {
        if (userAddressFormArray.controls
          .findIndex( element => element.value['ADDRESS_ID'] === originalAddress['ADDRESS_ID']) === -1) {
          r_address.push({ action: 'delete', ADDRESS_ID: originalAddress['ADDRESS_ID']});
        }
      });
    }

    const userPersonalizationFormGroup = this.userForm.get('userPersonalization');
    if (userPersonalizationFormGroup.dirty) {
      const r_personalization = this.changedUser['r_personalization'] = {};
      const originalPersonalization = this.originalUserValue['userPersonalization'];
      r_personalization['action'] = originalPersonalization['USER_ID'] ? 'update' : 'add';
      r_personalization['USER_ID'] = this.userForm.get('USER_ID').value;
      Object.keys(userPersonalizationFormGroup['controls']).forEach( key => {
        const control = userPersonalizationFormGroup.get(key);
        if (control.dirty) { r_personalization[key] = control.value; }
      });
    }

    const userRoleFormArray = this.userForm.get('userRole') as FormArray;
    const originalAssignedRoles = this.originalUserValue['userRole'];
    if (userRoleFormArray.dirty) {
      this.changedUser['relationships'] = [
        {
          RELATIONSHIP_ID: 'rs_user_role',
          values: []
        }
      ];
      const assignedRoles = this.changedUser['relationships'][0].values;
      userRoleFormArray.controls.forEach( roleFormGroup => {
        if (roleFormGroup.dirty) {
          assignedRoles.push({
            action: 'add', SYNCED: 1,
            PARTNER_INSTANCES: [
              {ENTITY_ID: 'permission', ROLE_ID: 'system_role', INSTANCE_GUID: roleFormGroup.value['INSTANCE_GUID']}
            ]
          });
        }
      });
      originalAssignedRoles.forEach( assignedRole => {
        const roleGUID = assignedRole.PARTNER_INSTANCES[0].INSTANCE_GUID;
        if (userRoleFormArray.controls.findIndex(
          roleFormGroup => roleFormGroup.value['INSTANCE_GUID'] === roleGUID) === -1) {
          assignedRoles.push({action: 'delete', RELATIONSHIP_INSTANCE_GUID: assignedRole.RELATIONSHIP_INSTANCE_GUID});
        }
      });
    }

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
