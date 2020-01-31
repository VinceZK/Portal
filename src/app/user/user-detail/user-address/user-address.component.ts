import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AttributeBase, AttributeControlService, RelationMeta} from "jor-angular";

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {
  @Input() readonly: boolean;
  @Input() userForm: FormGroup;
  @Input() relationMetas: RelationMeta[];
  private attrCtrls: AttributeBase[];
  userAddressFormArray: FormArray;

  constructor(private fb: FormBuilder,
              private attributeControlService: AttributeControlService) { }

  ngOnInit() {
    this.userAddressFormArray = this.userForm.get('addresses') as FormArray;
    this.attrCtrls = this.attributeControlService.toAttributeControl(
      this.relationMetas.find( relationMeta => relationMeta.RELATION_ID === 'r_address').ATTRIBUTES);
  }

  getAttrCtrlFromID(fieldName: string): AttributeBase {
    return this.attrCtrls.find( attrCtrl => attrCtrl.name === fieldName);
  }

  addAddress() {
    const addressFormGroup = this.fb.group({
      ADDRESS_ID: [''],
      TYPE: ['', [Validators.required]],
      ADDRESS_VALUE: ['', [Validators.required]],
      POSTCODE: [''],
      CITY: [''],
      COUNTRY: [''],
      PRIMARY: []
    });
    if (this.userAddressFormArray.length === 0) {
      addressFormGroup.get('PRIMARY').setValue(1);
      addressFormGroup.get('PRIMARY').markAsDirty();
    }
    this.userAddressFormArray.push(addressFormGroup);
  }

  deleteAddress(index: number) {
    if (this.userAddressFormArray.length > 1 &&
        this.userAddressFormArray.at(index).value['PRIMARY']) {
      const newPrimaryIndex = index === 0 ? 1 : 0;
      this.userAddressFormArray.at(newPrimaryIndex).get('PRIMARY').setValue(1);
      this.userAddressFormArray.at(newPrimaryIndex).get('PRIMARY').markAsDirty();
    }
    this.userAddressFormArray.removeAt(index);
    this.userAddressFormArray.markAsDirty();
  }
}
