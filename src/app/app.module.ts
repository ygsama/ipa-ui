import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouter } from './app.router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {SharedModule} from './blog/shared.module';


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // GroupComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
