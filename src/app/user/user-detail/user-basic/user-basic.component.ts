import {Component, Input, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AttributeBase, AttributeControlService, RelationMeta} from "jor-angular";

@Component({
  selector: 'app-user-basic',
  templateUrl: './user-basic.component.html',
  styleUrls: ['./user-basic.component.css']
})
export class UserBasicComponent implements OnInit {
  @Input() readonly: boolean;
  @Input() userForm: FormGroup;
  @Input() relationMetas: RelationMeta[];
  private attrCtrls: AttributeBase[];
  userBasicNamesForm: FormGroup;
  userBasicEmployeeForm: FormGroup;

  constructor(private attributeControlService: AttributeControlService) { }

  ngOnInit() {
    this.userBasicNamesForm = this.userForm.get('userBasic.names') as FormGroup;
    this.userBasicEmployeeForm = this.userForm.get('userBasic.employee') as FormGroup;
    this.attrCtrls = this.attributeControlService.toAttributeControl(
      this.relationMetas.find( relationMeta => relationMeta.RELATION_ID === 'r_employee').ATTRIBUTES);
    this.attrCtrls = this.attrCtrls.concat(this.attributeControlService.toAttributeControl(
      this.relationMetas.find( relationMeta => relationMeta.RELATION_ID === 'r_user').ATTRIBUTES));
  }

  getAttrCtrlFromID(fieldName: string): AttributeBase {
    return this.attrCtrls.find( attrCtrl => attrCtrl.name === fieldName);
  }
}
