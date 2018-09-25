import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';

import {GroupComponent} from '../group/group.component';
import {GroupsComponent} from '../groups/groups.component';

export  const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // children:[]   /*配置子路由*/
  },
  // {
  //   path: 'group',
  //   component: GroupComponent
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // }
  // , {
  //   /*匹配不到路由的时候加载的组件*/
  //   path: '**', /*任意的路由*/
  //   redirectTo: 'group'
  // }
];
