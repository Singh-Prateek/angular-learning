import { Routes } from '@angular/router';
import { AboutSubnavComponent } from './about-subnav/about-subnav.component';
import { HomeComponent } from './home.component';
import { ListComponent } from './list/list.component';
import { SubNavigationComponent } from './sub-navigation.component';

export const DemoRoutes: Routes = [
  {
    path: '',
    component: SubNavigationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: "list",
        component: ListComponent,
        title:"routing: List"
      },
      {
        path: "home",
        component: HomeComponent,
        title:"routing: Home"
      },
      {
        path: "about",
        component: AboutSubnavComponent,
        title:"routing: About"
      }
    ]
  }
];

export default DemoRoutes;
