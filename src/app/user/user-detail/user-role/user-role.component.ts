import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {IdentityService} from "../../../identity.service";
import {SearchHelpComponent} from "jor-angular";

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {
  @Input() readonly: boolean;
  @Input() userForm: FormGroup;
  userRoleFormArray: FormArray;

  constructor(private fb: FormBuilder,
              private identityService: IdentityService) { }

  @ViewChild(SearchHelpComponent, { static: true })
  private searchHelpComponent: SearchHelpComponent;

  ngOnInit() {
    this.userRoleFormArray = this.userForm.get('userRole') as FormArray;
    // Recheck each role since every time the template is initialized, Angular clears the error status.
    if (!this.readonly) {
      this.userRoleFormArray.controls.forEach( (ctrl, index) => {
        this.onChangeRoleID(index);
      });
    }
  }

  deleteRole(index: number): void {
    if (index !== this.userRoleFormArray.length - 1) {
      this.userRoleFormArray.removeAt(index);
      this.userRoleFormArray.markAsDirty();
    }
  }

  onChangeRoleID(index: number): void {
    const currentRole = this.userRoleFormArray.at(index);
    if (this.oldRole(currentRole)) {
      currentRole.get('NAME').setErrors({message: 'Duplicate Role'});
      return;
    }

    if (index === this.userRoleFormArray.length - 1 && currentRole.value.NAME.trim() !== '') {
      // Only work if the last line is not new and empty
      this.userRoleFormArray.push(
        this.fb.group({
          NAME: [''],
          DESCRIPTION: [''],
          system_role_INSTANCE_GUID: [''],
          RELATIONSHIP_INSTANCE_GUID: ['']
        })
      );
    }

    if (currentRole.value.NAME) {
      this.identityService.getRoleDesc(currentRole.value.NAME).subscribe(data => {
        if (data['msgCat']) {
          currentRole.get('NAME').setErrors({message: data['msgShortText']});
        } else {
          currentRole.get('DESCRIPTION').setValue(data['DESCRIPTION']);
          currentRole.get('system_role_INSTANCE_GUID').setValue(data['INSTANCE_GUID']);
        }
      });
    }
  }

  oldRole(userRoleForm: AbstractControl): boolean {
    const existIndex = this.userRoleFormArray.controls.findIndex(
      role => role.value.NAME === userRoleForm.value.NAME && role.pristine && role.value.NAME !== '');
    return existIndex !== -1 ;
  }

  onSearchHelp(rowID: number, exportObject: AbstractControl): void {
    const afterExportFn = function (context: any, ruleIdx: number) {
      return () => context.onChangeRoleID(ruleIdx);
    }(this, rowID).bind(this);
    this.searchHelpComponent.openSearchHelpModalByEntity('permission', 'r_role',
      exportObject, this.readonly, null, null, afterExportFn);
  }

}
