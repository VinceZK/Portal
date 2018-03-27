import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExternalAppRoutingModule} from "./external-app-routing.module";
import {ExternalAppComponent} from "./external-app.component";

@NgModule({
  imports: [
    CommonModule,
    ExternalAppRoutingModule
  ],
  declarations: [
    ExternalAppComponent
  ]
})
export class ExternalAppModule { }
