import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouter } from './app.router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupComponent } from './group/group.component';
import {GroupRouter} from './group/group.router';
import {HomeModule} from './home/home.module';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    GroupsComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
