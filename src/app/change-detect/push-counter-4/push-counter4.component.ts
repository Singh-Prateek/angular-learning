import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-push-counter4',
    template: `
  @if (Counter | async; as data) {
    <input [value]="cbx" (change)="textChange($event)" />
    <h3> count in child <br>(push stratgey) = {{data.count}}</h3>
    <pre>text input : {{cbx}} </pre>
  }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [AsyncPipe]
})
export class PushCounter4Component implements OnInit {

  @Input() Counter: Observable<any> = of({ count: 0 });

  cbx: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  textChange(args: Event) {
    this.cbx = Number((args.target as HTMLInputElement).value);
  }

}
