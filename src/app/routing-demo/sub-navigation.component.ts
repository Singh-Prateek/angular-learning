import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-navigation',
  template: ` <nav class="sub-nav-bar">
    <ul>
      <li>
        <a  [routerLink]="['home']" routerLinkActive="active" >Sub Home</a>
      </li>
      <li>
        <a  [routerLink]="['list']" routerLinkActive="active" >list</a>
      </li>
      <li>
        <a  [routerLink]="['about']" routerLinkActive="active">about</a>
      </li>
    </ul>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: []
})
export class SubNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
