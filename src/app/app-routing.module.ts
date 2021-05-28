import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserDetailComponent} from "./user/user-detail/user-detail.component";
import {WorkProtectionGuard} from "./work-protection.guard";

const routes: Routes = [
  // The dashboard app is lazy loading
  // { path: 'users', loadChildren: 'app/user/user.module#UserModule'},
  { path: 'users', component: UserListComponent},
  { path: 'users/:userID', component: UserDetailComponent, canDeactivate: [WorkProtectionGuard]},
  { path: 'dashboard', loadChildren: () => import('app/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'handsontable', loadChildren: () => import('app/handsontable/handsontable.module').then(m => m.HandsontableModule)},
  { path: 'errors', component: ErrorPageComponent },
  { path: 'pageNotFound', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ]
})
export class AppRoutingModule {}
