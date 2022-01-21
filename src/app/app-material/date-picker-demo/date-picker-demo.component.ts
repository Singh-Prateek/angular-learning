import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { AppDateAdapter, APP_LUXON_DATE_FORMATS } from './ExtendNativeAdapter';

@Component({
  selector: 'app-date-picker-demo',
  templateUrl: './date-picker-demo.component.html',
  styleUrls: ['./date-picker-demo.component.scss'],
  providers: [{ provide: DateAdapter, useClass: AppDateAdapter },
  { provide: MAT_DATE_FORMATS, useValue: APP_LUXON_DATE_FORMATS },
  {provide: MAT_DATE_LOCALE, useValue:'en-IN'},
  ]
})
export class DatePickerDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
