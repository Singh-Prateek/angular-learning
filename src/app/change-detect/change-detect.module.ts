import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultCounterComponent } from './default-counter/default-counter.component';
import { PushCounterComponent } from './push-counter/push-counter.component';
import { DAppComponent } from './d-app/d-app.component';
import { PushCounter2Component } from './push-counter-2/push-counter2.component';
import { PushCounter3Component } from './push-counter-3/push-counter3.component';
import { PushCounter4Component } from './push-counter-4/push-counter4.component';



@NgModule({
  declarations: [
    DefaultCounterComponent,
    PushCounterComponent,
    PushCounter2Component,
    DAppComponent,
    PushCounter3Component,
    PushCounter4Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DAppComponent
  ]
})
export class ChangeDetectModule { }
