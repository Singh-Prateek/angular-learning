import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerDemoComponent } from './date-picker-demo/date-picker-demo.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    DatePickerDemoComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
  ]
})
export class AppMaterialModule { }
