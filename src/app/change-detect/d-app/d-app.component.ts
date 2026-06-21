import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PushCounter4Component } from '../push-counter-4/push-counter4.component';
import { PushCounter3Component } from '../push-counter-3/push-counter3.component';
import { PushCounter2Component } from '../push-counter-2/push-counter2.component';
import { PushCounterComponent } from '../push-counter/push-counter.component';
import { DefaultCounterComponent } from '../default-counter/default-counter.component';

@Component({
    selector: 'app-d-app',
    templateUrl: './d-app.component.html',
    styleUrls: ['./d-app.component.scss'],
    imports: [DefaultCounterComponent, PushCounterComponent, PushCounter2Component, PushCounter3Component, PushCounter4Component]
})
export class DAppComponent implements OnInit {

  Counter = {
    count: 1
  };

  CounterObs = new BehaviorSubject(this.Counter);

  CounterPush = {
    count: -1
  };
  constructor() { }

  ngOnInit(): void {
    console.info('init life cycle hook')
  }

  incCount() {
    this.Counter.count += 1;

    this.CounterPush = {
      count: this.Counter.count + 1
    }

    this.CounterObs.next(this.Counter);

    console.log(`this.Counter.count :${this.Counter.count}`)
  }

}
