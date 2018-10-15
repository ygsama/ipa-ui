import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ipaRoutes} from './ipa.router';
import {IpaComponent} from './ipa.component';
import {RouterModule} from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {SharedModule} from '../shared.module';


const modules=[SharedModule];
const comp=[IpaComponent];

@NgModule({
  declarations: [...comp],
  imports: [
    ...modules,
    RouterModule.forChild(ipaRoutes),
  ],
  exports: [CommonModule]
})
export class IpaModule {
}
