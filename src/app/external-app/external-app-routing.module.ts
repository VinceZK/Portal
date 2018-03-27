import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ExternalAppComponent} from "./external-app.component";

const routes: Routes = [
  {
    path: 'external-app/:appID', component: ExternalAppComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExternalAppRoutingModule { }
