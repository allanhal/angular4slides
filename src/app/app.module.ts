import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MnFullpageModule } from 'ngx-fullpage';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MnFullpageModule.forRoot() // Don't forget to call .forRoot() static method
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
