import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-app',
  templateUrl: './d-app.component.html',
  styleUrls: ['./d-app.component.scss']
})
export class DAppComponent implements OnInit {

  Counter = {
    count: 1
  };

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

    console.log(`this.Counter.count :${this.Counter.count}`)
  }

}
