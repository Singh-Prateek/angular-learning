import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSubnavComponent } from './about-subnav/about-subnav.component';
import { HomeComponent } from './home.component';
import { ListComponent } from './list/list.component';
import { SubNavigationComponent } from './sub-navigation.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingDemoRoutingModule { }
