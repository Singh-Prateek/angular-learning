import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-about-subnav',
    templateUrl: './about-subnav.component.html',
    styleUrls: ['./about-subnav.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true
})
export class AboutSubnavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
