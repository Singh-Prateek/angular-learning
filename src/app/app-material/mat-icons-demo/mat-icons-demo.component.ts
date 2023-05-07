import { Component, OnInit } from '@angular/core';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-mat-icons-demo',
    templateUrl: './mat-icons-demo.component.html',
    styleUrls: ['./mat-icons-demo.component.scss'],
    standalone: true,
    imports: [MatIconModule]
})
export class MatIconsDemoComponent implements OnInit {

  constructor(private readonly iconRegistry: MatIconRegistry) {
    // console.info(iconRegistry.getDefaultFontSetClass());
    // iconRegistry.setDefaultFontSetClass("material-icons-round", "mat-ligature-font", "orange600");
    // console.info(iconRegistry.getDefaultFontSetClass());
  }

  ngOnInit(): void {
  }

}
