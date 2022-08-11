import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-sub-navigation',
  template: `<nav>
    <ul>
      <li>
        <a  [routerLink]="['date']" >date demo</a>
      </li>
      <li>
        <a  [routerLink]="['icon']" >icon demos</a>
      </li>
    </ul>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: []
})
export class MatSubNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
