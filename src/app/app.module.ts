import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AModule } from './a/a.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AModule.forRoot({
      config:'config  yes'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
