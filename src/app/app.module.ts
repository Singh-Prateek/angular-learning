import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeDetectModule } from './change-detect/change-detect.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomAttrModule } from './custom-attr/custom-attr.module';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChangeDetectModule,
    CustomAttrModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }