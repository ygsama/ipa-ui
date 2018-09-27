import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {homeRoutes} from './home.router';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared.module';
import {HomeService} from './home.service';
import {JsonComponent} from './json.component';

const modules=[SharedModule];
const comp=[HomeComponent,JsonComponent];


@NgModule({
  declarations: [...comp],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    ...modules
  ],
  exports:[...comp],
  providers:[HomeService]
})
export class HomeModule {
}
