import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PlanComponent} from './plan.component';

export const planRoutes = [
  {
    path: '',
    component: PlanComponent,
    // canActivate: [AuthGuard],
    // children: [
    //   {path: '', redirectTo: 'plan', pathMatch: 'full'},
    //   {path: 'plan', component: GroupComponent},
    //   {path: '**', component:GroupComponent}
    // ]
  }
];
