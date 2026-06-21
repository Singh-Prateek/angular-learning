import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
    <p>
      home works! 
    </p>
    <h1>
      this is the landing page for <b>RoutingDemoModule</b>.
    </h1>
  `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
