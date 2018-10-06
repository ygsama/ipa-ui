import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
  // {
  //   path: 'home',
  //   component: HomeComponent
  // }
  // , {
  //   /*匹配不到路由的时候加载的组件*/
  //   path: '**', /*任意的路由*/
  //   redirectTo: 'plan'
  // }
];
