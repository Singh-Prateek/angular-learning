import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-mat-sub-navigation',
    template: `<nav class="sub-nav-bar">
    <ul>
      <li>
        <a  [routerLink]="['date']" routerLinkActive="active" >date demo</a>
      </li>
      <li>
        <a  [routerLink]="['icon']" routerLinkActive="active">icon demos</a>
      </li>
    </ul>
  </nav>
  <router-outlet></router-outlet>
  `,
    imports: [RouterLinkActive, RouterLink, RouterOutlet]
})
export class MatSubNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
