import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AttributeBase, AttributeControlService, RelationMeta} from "jor-angular";

@Component({
  selector: 'app-user-personalization',
  templateUrl: './user-personalization.component.html',
  styleUrls: ['./user-personalization.component.css']
})
export class UserPersonalizationComponent implements OnInit {
  @Input() readonly: boolean;
  @Input() userForm: FormGroup;
  @Input() relationMetas: RelationMeta[];
  private attrCtrls: AttributeBase[];
  userPersonalizationForm: FormGroup;

  constructor(private attributeControlService: AttributeControlService) { }

  ngOnInit() {
    this.userPersonalizationForm = this.userForm.get('userPersonalization') as FormGroup;
    this.attrCtrls = this.attributeControlService.toAttributeControl(
      this.relationMetas.find( relationMeta => relationMeta.RELATION_ID === 'r_personalization').ATTRIBUTES);
  }

  getAttrCtrlFromID(fieldName: string): AttributeBase {
    return this.attrCtrls.find( attrCtrl => attrCtrl.name === fieldName);
  }
}
