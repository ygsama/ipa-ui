import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GroupsComponent} from './groups/groups.component';
import {GroupComponent} from './group/group.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'group',
    pathMatch: 'full'
  },
  {
    path: 'groups',
    component: GroupsComponent
  },
  {
    path: 'group',
    component: GroupComponent
  },
  {
    path: 'home',
    loadChildren: './home/groups.module#HomeModule'
  }
  ,{
    /*匹配不到路由的时候加载的组件*/
    path: '**', /*任意的路由*/
    component: GroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouter {
}
