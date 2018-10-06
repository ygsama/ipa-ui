import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ipaRoutes} from './ipa.router';
import {IpaComponent} from './ipa.component';
import {RouterModule} from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [IpaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ipaRoutes),
    NgZorroAntdModule
  ],
  exports: [CommonModule]
})
export class IpaModule {
}
