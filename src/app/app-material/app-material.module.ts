import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerDemoComponent } from './date-picker-demo/date-picker-demo.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    DatePickerDemoComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AppMaterialModule { }
