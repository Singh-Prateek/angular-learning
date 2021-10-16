import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-d-app',
  templateUrl: './d-app.component.html',
  styleUrls: ['./d-app.component.scss']
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
