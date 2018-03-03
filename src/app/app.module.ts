import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExternalAppComponent } from './external-app/external-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import {RoleService} from "./role.service";
import {MockupModule} from "./mockup/mockup.module";
import {HistoryService} from "./history.service";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ExternalAppComponent,
    DashboardComponent,
    // MockupComponent,
    SideMenuComponent,
    HeadBarComponent
  ],
  imports: [
    BrowserModule,
    MockupModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    RoleService,
    HistoryService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
