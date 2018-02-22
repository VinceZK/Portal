import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExternalAppComponent } from './external-app/external-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { MockupComponent } from './mockup/mockup.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeadBarComponent } from './head-bar/head-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ExternalAppComponent,
    DashboardComponent,
    MockupComponent,
    SideMenuComponent,
    HeadBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
