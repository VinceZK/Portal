import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HandsontableComponent} from "./handsontable.component";
import {HandsontableRoutingModule} from "./handsontable-routing.module";
import {HotTableModule} from "@handsontable/angular";

@NgModule({
  imports: [
    CommonModule,
    HotTableModule,
    HandsontableRoutingModule
  ],
  declarations: [
    HandsontableComponent
  ]
})
export class HandsontableModule { }
