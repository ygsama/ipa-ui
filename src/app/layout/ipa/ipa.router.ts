import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IpaComponent} from './ipa.component';

var AuthGuard;
export const ipaRoutes = [
  {
    path: '',
    component: IpaComponent,
    // canActivate: [AuthGuard],
    // children: [
    //   {path: '', redirectTo: 'plan', pathMatch: 'full'},
    //   {path: 'plan', component: GroupComponent},
    //   {path: '**', component:GroupComponent}
    // ]
  }
];
