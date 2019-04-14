import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {
  @Input() readonly: boolean;
  @Input() userForm: FormGroup;
  userAddressFormArray: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userAddressFormArray = this.userForm.get('addresses') as FormArray;
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
