import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './component/dashboard/dashboard.component';

import { LogsComponent } from './component/logs/logs.component';

import { ResultComponent } from './component/result/result.component';

import { ErrorPageComponent } from './shared/component/error-page/error-page.component';
import { LayoutComponent } from './shared/component/layout/layout.component';
import { LoginComponent } from './shared/component/login/login.component';

const routes: Routes = [
  {
    path:'login',
  component:LoginComponent,
 },
  {
    path:'',
    component: LayoutComponent,


    children: [
      {
      path:'',
      component: DashboardComponent,

    },
    {
      path:'result',
      component: ResultComponent,

    },

    {
      path:'history',
      component: LogsComponent
    },
    {
      path:'**',
     pathMatch: 'full',
    component:ErrorPageComponent,
    }




    ]

  },
  {
    path:'**',
   pathMatch: 'full',
  component:ErrorPageComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
