import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '../home/home.component';

import {GroupComponent} from './group.component';

var AuthGuard;
export const groupRoutes = [
  {
    path: '',
    component: GroupComponent,
    // canActivate: [AuthGuard],
    // children: [
    //   {path: '', redirectTo: 'group', pathMatch: 'full'},
    //   {path: 'group', component: GroupComponent},
    //   {path: '**', component:GroupComponent}
    // ]
  }
];
