import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import {RoleService} from "./role.service";
import {MockupModule} from "./mockup/mockup.module";
import {HistoryService} from "./history.service";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {HttpClientModule} from "@angular/common/http";
import {ExternalAppModule} from "./external-app/external-app.module";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HeadBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    MockupModule,
    ExternalAppModule,
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
