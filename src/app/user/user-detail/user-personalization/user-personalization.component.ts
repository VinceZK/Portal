import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-personalization',
  templateUrl: './user-personalization.component.html',
  styleUrls: ['./user-personalization.component.css']
})
export class UserPersonalizationComponent implements OnInit {
  @Input() readonly: boolean;
  @Input() userForm: FormGroup;
  userPersonalizationForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.userPersonalizationForm = this.userForm.get('userPersonalization') as FormGroup;
  }

}
