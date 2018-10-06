import {Routes, RouterModule} from '@angular/router';
import {EssayComponent} from './essay.component';



export const essayRoutes: Routes = [
  {
    path: '',
    component: EssayComponent,
  },

  // , {
  //   /*匹配不到路由的时候加载的组件*/
  //   path: '**', /*任意的路由*/
  //   redirectTo: 'plan'
  // }
];
