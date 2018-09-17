import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '../home/home.component';

import {GroupComponent} from './group.component';
import {GroupsComponent} from '../groups/groups.component';

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
  // {
  //   path: 'groups',
  //   loadChildren: './home/home.modele#GroupsModule'
  // },
  // {
  //   path: 'group',
  //   loadChildren: './home/group.modele#GroupModule'
  // },
  // {
  //   path: 'home',
  //   loadChildren: './home/groups.modele#HomeModule'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(groupRoutes)],
  exports: [RouterModule]
})
export class GroupRouter {
}
