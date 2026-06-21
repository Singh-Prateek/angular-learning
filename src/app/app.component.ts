import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [MainNavigationComponent, RouterOutlet]
})
export class AppComponent {
  title = 'angular';
}
