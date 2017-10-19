import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MnFullpageModule } from 'ngx-fullpage';

import { AppComponent } from './app.component';
import { SlidesComponent } from './component/slides/slides.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent
  ],
  imports: [
    BrowserModule,
    MnFullpageModule.forRoot() // Don't forget to call .forRoot() static method
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
