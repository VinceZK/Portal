import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExternalAppComponent } from './external-app/external-app.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'external-app/:appID', component: ExternalAppComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
