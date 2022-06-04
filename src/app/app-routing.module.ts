import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePickerDemoComponent } from './app-material/date-picker-demo/date-picker-demo.component';
import { DAppComponent } from './change-detect/d-app/d-app.component';
import { AttrDemoComponent } from './custom-attr/attr-demo/attr-demo.component';
import { ScrollServiceComponent } from './scroll-service/scroll-service.component';
import { UniqueIdComponent } from './unique-id/unique-id.component';

const routes: Routes = [
  {
    path: "changedetect",
    component: DAppComponent,
    title: "NG: change detection"
  },
  {
    path: "attrdemo",
    component: AttrDemoComponent,
    title: "NG: attribute demo"
  },
  {
    path: "materialdemo",
    component: DatePickerDemoComponent,
    title: "NG: date picker customization"
  },
  {
    path: "scroll",
    component: ScrollServiceComponent,
    title: "NG: scroll"
  },
  {
    path: "uuid",
    component: UniqueIdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
