import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-push-counter4',
    template: `
  <ng-container *ngIf="Counter | async; let data">
   <input [value]="cbx" (change)="textChange($event)" /> 
  <h3> count in child <br>(push stratgey) = {{data.count}}</h3>
   <pre>text input : {{cbx}} </pre>
  </ng-container>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, AsyncPipe]
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
