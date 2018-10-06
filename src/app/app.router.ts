import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'plan',
    loadChildren: './blog/plan/plan.module#PlanModule'
  },
  {
    path: 'home',
    loadChildren: './blog/home/home.module#HomeModule'
  },
  {
    path: 'essay',
    loadChildren: './blog/essay/essay.module#EssayModule'
  }
  // ,{
    /*匹配不到路由的时候加载的组件*/
    // path: '**', /*任意的路由*/
    // component: GroupComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouter {
}
