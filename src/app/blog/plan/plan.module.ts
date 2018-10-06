import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {planRoutes} from './plan.router';
import {PlanComponent} from './plan.component';
import {RouterModule} from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [PlanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(planRoutes),
    NgZorroAntdModule
  ],
  exports: [CommonModule]
})
export class PlanModule {
}
