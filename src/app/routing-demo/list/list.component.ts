import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <h1>Sample List of vegetables</h1>
    <ul  *ngFor="let v of vegies">
      <li>{{v}}</li>
    </ul>
  `,
  styles: []
})
export class ListComponent implements OnInit {

  public vegies = ['bell pepper', 'carrot', 'potato', 'cabbage', 'broccoli', 'egg plant']
  constructor() { }

  ngOnInit(): void {
  }

}
