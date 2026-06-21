import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { AppDateAdapter, APP_LUXON_DATE_FORMATS } from './ExtendNativeAdapter';
import { LnMenuComponent, LnMenuItemComponent } from '../ln-menu.component';
import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-date-picker-demo',
    templateUrl: './date-picker-demo.component.html',
    styleUrls: ['./date-picker-demo.component.scss'],
    providers: [{ provide: DateAdapter, useClass: AppDateAdapter },
        { provide: MAT_DATE_FORMATS, useValue: APP_LUXON_DATE_FORMATS },
        { provide: MAT_DATE_LOCALE, useValue: 'en-IN' },
    ],
    imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, CdkMenu, LnMenuComponent, CdkMenuItem, LnMenuItemComponent]
})
export class DatePickerDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
