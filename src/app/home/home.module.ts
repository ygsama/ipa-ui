import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {homeRoutes} from './home.router';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports:[HomeComponent]
})
export class HomeModule {
}
