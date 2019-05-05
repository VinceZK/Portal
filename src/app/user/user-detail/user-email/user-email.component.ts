import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "ui-message-angular";

@Component({
  selector: 'app-user-email',
  templateUrl: './user-email.component.html',
  styleUrls: ['./user-email.component.css']
})
export class UserEmailComponent implements OnInit {
  @Input() readonly: boolean;
  @Input() userForm: FormGroup;
  userEmailFormArray: FormArray;

  constructor(private fb: FormBuilder,
              private messageService: MessageService) { }

  ngOnInit() {
    this.userEmailFormArray = this.userForm.get('emails') as FormArray;
    if (!this.readonly && this.userEmailFormArray.length === 0) {
      this.addEmail();
    }
  }

  addEmail() {
    const emailFormGroup = this.fb.group({
      EMAIL: ['', [Validators.required]],
      TYPE: ['', [Validators.required]],
      PRIMARY: ['']
    });
    if (this.userEmailFormArray.length === 0) {
      emailFormGroup.get('PRIMARY').setValue(1);
      emailFormGroup.get('PRIMARY').markAsDirty();
    }
    this.userEmailFormArray.push(emailFormGroup);
  }

  deleteEmail(index: number) {
    if (this.userEmailFormArray.length === 1) {
      this.messageService.reportMessage('USER', 'AT_LEAST_ONE_EMAIL', 'E');
    } else {
      if (this.userEmailFormArray.at(index).value['PRIMARY']) {
        const newPrimaryIndex = index === 0 ? 1 : 0;
        this.userEmailFormArray.at(newPrimaryIndex).get('PRIMARY').setValue(1);
        this.userEmailFormArray.at(newPrimaryIndex).get('PRIMARY').markAsDirty();
      }
      this.userEmailFormArray.removeAt(index);
      this.userEmailFormArray.markAsDirty();
    }
  }
}
