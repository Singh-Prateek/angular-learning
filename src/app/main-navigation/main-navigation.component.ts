import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
    selector: 'app-main-navigation',
    templateUrl: './main-navigation.component.html',
    styleUrls: ['./main-navigation.component.scss'],
    standalone: true,
    imports: [RouterLinkActive, RouterLink]
})
export class MainNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
