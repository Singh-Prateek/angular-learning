import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultCounterComponent } from './default-counter/default-counter.component';
import { PushCounterComponent } from './push-counter/push-counter.component';
import { DAppComponent } from './d-app/d-app.component';



@NgModule({
  declarations: [
    DefaultCounterComponent,
    PushCounterComponent,
    DAppComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DAppComponent
  ]
})
export class ChangeDetectModule { }
