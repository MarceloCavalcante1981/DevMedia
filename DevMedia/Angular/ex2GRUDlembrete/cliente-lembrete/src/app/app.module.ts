import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErroMsgComponent, ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    ErroMsgComponent,
    ErrorMsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
