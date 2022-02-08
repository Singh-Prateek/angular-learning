import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeDetectModule } from './change-detect/change-detect.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomAttrModule } from './custom-attr/custom-attr.module';
import { AppMaterialModule } from './app-material/app-material.module';
import { ScrollServiceComponent } from './scroll-service/scroll-service.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChangeDetectModule,
    CustomAttrModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }