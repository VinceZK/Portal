import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import {MockupComponent} from "./mockup.component";

const routes: Routes = [
  {
    path: 'mockup/:UI', component: MockupComponent
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
export class MockupRoutingModule { }
