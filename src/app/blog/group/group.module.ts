import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {groupRoutes} from './group.router';
import {GroupComponent} from './group.component';
import {RouterModule} from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [GroupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(groupRoutes),
    NgZorroAntdModule
  ],
  exports: [CommonModule]
})
export class GroupModule {
}
