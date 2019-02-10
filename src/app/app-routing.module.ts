import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {ErrorPageComponent} from "./error-page/error-page.component";

const routes: Routes = [
  // The dashboard app is lazy loading
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
  { path: 'handsontable', loadChildren: 'app/handsontable/handsontable.module#HandsontableModule'},
  { path: 'errors', component: ErrorPageComponent },
  { path: 'pageNotFound', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
