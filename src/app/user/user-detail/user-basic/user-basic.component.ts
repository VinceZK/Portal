import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-basic',
  templateUrl: './user-basic.component.html',
  styleUrls: ['./user-basic.component.css']
})
export class UserBasicComponent implements OnInit {
  @Input() readonly: boolean;
  @Input() userForm: FormGroup;
  userBasicNamesForm: FormGroup;
  userBasicEmployeeForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.userBasicNamesForm = this.userForm.get('userBasic.names') as FormGroup;
    this.userBasicEmployeeForm = this.userForm.get('userBasic.employee') as FormGroup;
  }
}
