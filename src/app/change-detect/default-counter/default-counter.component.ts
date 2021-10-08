import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-counter',
  template: `<h3> count in child = {{Counter.count}}</h3>`,
})
export class DefaultCounterComponent implements OnInit {

  @Input() Counter: any;

  constructor() { }

  ngOnInit(): void {
  }

}
