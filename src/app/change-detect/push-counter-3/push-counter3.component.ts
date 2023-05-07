import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { catchError, EMPTY, filter, Observable, of, Subscription } from 'rxjs';

@Component({
    selector: 'app-push-counter3',
    template: `<h3> count in child <br>(push stratgey) = {{count}}</h3>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class PushCounter3Component implements OnInit, OnDestroy {

  count: number = 0;
  @Input() Counter: Observable<any> = of({ count: 0 });

  sink: Subscription = new Subscription();

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.sink = this.Counter
      .pipe(
        filter(data => data.count > 0),
        catchError(err => {
          console.error(err);
          return EMPTY;
        })
      )
      .subscribe(data => {
        this.count = data.count;
        this.cd.markForCheck();
      });

  }

  ngOnDestroy(): void {
    this.sink?.unsubscribe();
  }

}
