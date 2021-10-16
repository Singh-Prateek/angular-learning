import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeDetectModule } from './change-detect/change-detect.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChangeDetectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }