import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePickerDemoComponent } from './date-picker-demo/date-picker-demo.component';
import { MatIconsDemoComponent } from './mat-icons-demo/mat-icons-demo.component';
import { MatSubNavigationComponent } from './mat-sub-navigation.component';

const routes: Routes = [
    {
      path: '',
      component: MatSubNavigationComponent,
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'date'
        },
        {
          path: "date",
          component: DatePickerDemoComponent
        },
        {
          path: "icon",
          component: MatIconsDemoComponent
        }
      ]
    }
  ];

  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AppMaterialRoutingModule { }
  