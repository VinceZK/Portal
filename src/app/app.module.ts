import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { MockupModule } from "./mockup/mockup.module";
import { HttpClientModule } from "@angular/common/http";
import { ExternalAppModule } from "./external-app/external-app.module";
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {MessageModule} from "ui-message-angular";
import {RouteReuseStrategy} from "@angular/router";
import {CustomReuseStrategy} from "./custom.reuse.strategy";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserDetailComponent} from "./user/user-detail/user-detail.component";
import {UserBasicComponent} from "./user/user-detail/user-basic/user-basic.component";
import {UserPersonalizationComponent} from "./user/user-detail/user-personalization/user-personalization.component";
import {UserRoleComponent} from "./user/user-detail/user-role/user-role.component";
import {UserEmailComponent} from "./user/user-detail/user-email/user-email.component";
import {UserAddressComponent} from "./user/user-detail/user-address/user-address.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JorAngularModule, SearchHelpComponent} from "jor-angular";

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HeadBarComponent,
    UserListComponent,
    UserDetailComponent,
    UserBasicComponent,
    UserPersonalizationComponent,
    UserRoleComponent,
    UserEmailComponent,
    UserAddressComponent,
    NotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    MockupModule,
    ExternalAppModule,
    AppRoutingModule,
    HttpClientModule,
    JorAngularModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
  ]
})
export class AppModule { }
