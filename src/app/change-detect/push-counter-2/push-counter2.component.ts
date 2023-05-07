import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-push-counter2',
    template: `
    <h3> count (push stratgey) = {{Counter.count}}</h3>
    <button (click)='0'>refresh</button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class PushCounter2Component implements OnInit {

    @Input() Counter: any;

    constructor() { }

    ngOnInit(): void {
    }

}
