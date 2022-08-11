import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerDemoComponent } from './date-picker-demo/date-picker-demo.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconsDemoComponent } from './mat-icons-demo/mat-icons-demo.component';
import { MatSubNavigationComponent } from './mat-sub-navigation.component';
import { AppMaterialRoutingModule } from './app-material-routing.module';


@NgModule({
  declarations: [
    DatePickerDemoComponent,
    MatIconsDemoComponent,
    MatSubNavigationComponent
  ],
  imports: [
    CommonModule,
    AppMaterialRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AppMaterialModule { }
