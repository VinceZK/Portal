import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from "./user-routing.module";
import {UserListComponent} from "./user-list/user-list.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessageModule} from "ui-message-angular";
import { UserBasicComponent } from './user-detail/user-basic/user-basic.component';
import { UserPersonalizationComponent } from './user-detail/user-personalization/user-personalization.component';
import { UserRoleComponent } from './user-detail/user-role/user-role.component';
import { UserEmailComponent } from './user-detail/user-email/user-email.component';
import { UserAddressComponent } from './user-detail/user-address/user-address.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    UserRoutingModule
  ],
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserBasicComponent,
    UserPersonalizationComponent,
    UserRoleComponent,
    UserEmailComponent,
    UserAddressComponent
  ]
})
export class UserModule { }
