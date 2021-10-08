import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-push-counter',
  template: `<h3> count in child <br>(push stratgey) = {{Counter.count}}</h3>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushCounterComponent implements OnInit {

  @Input() Counter: any;

  constructor() { }

  ngOnInit(): void {
  }

}
