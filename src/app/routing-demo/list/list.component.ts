import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
    selector: 'app-list',
    template: `
    <h1>Sample List of vegetables</h1>
    @for (v of vegies; track v) {
      <ul >
        <li>{{v}}</li>
      </ul>
    }
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: []
})
export class ListComponent implements OnInit {

  public vegies = ['bell pepper', 'carrot', 'potato', 'cabbage', 'broccoli', 'egg plant']
  constructor() { }

  ngOnInit(): void {
  }

}
