import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared.module';
import {essayRoutes} from './essay.router';
import {EssayService} from './essay.service';
import {EssayComponent} from './essay.component';
import {ListComponent} from './component/list.component';

const modules=[SharedModule];
const component=[EssayComponent,ListComponent];


@NgModule({
  declarations: [...component],
  imports: [
    CommonModule,
    RouterModule.forChild(essayRoutes),
    ...modules
  ],
  exports:[...component],
  providers:[EssayService]
})
export class EssayModule {
}
