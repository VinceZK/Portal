import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HandsontableComponent} from "./handsontable.component";

const routes: Routes = [
  {path: 'handsontable', component: HandsontableComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HandsontableRoutingModule { }
