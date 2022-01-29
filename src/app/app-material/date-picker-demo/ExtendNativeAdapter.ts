import { Inject, Injectable, Optional } from "@angular/core";
import { LuxonDateAdapter } from "@angular/material-luxon-adapter";
import { MatDateFormats, MAT_DATE_LOCALE } from "@angular/material/core";


@Injectable()
export class AppDateAdapter extends LuxonDateAdapter {
    /**
     *
     */
    constructor(@Optional() @Inject(MAT_DATE_LOCALE) private matDateLocale: string,) {
        super(matDateLocale);
    }

    override getDayOfWeekNames(style: "long" | "short" | "narrow"): string[] {
        const weekNames = super.getDayOfWeekNames(style);
        if (style === "narrow") {
            return weekNames.map((s,idx) => `${s.toLocaleUpperCase(this.matDateLocale)}(${idx+1})`);
        }

        return weekNames;
    }
}

export const APP_LUXON_DATE_FORMATS: MatDateFormats = {
    parse: {
      dateInput: 'D',
    },
    display: {
      dateInput: 'EEE, DDD',
      monthYearLabel: 'LLL yy',
      dateA11yLabel: 'DD',
      monthYearA11yLabel: 'LLLL yyyy',
    },
  };