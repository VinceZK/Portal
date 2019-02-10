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

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HeadBarComponent,
    NotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    MessageModule,
    MockupModule,
    ExternalAppModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
