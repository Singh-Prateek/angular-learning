import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DAppComponent } from './change-detect/d-app/d-app.component';

const routes: Routes = [
  {
    path:"changedetect",
    component: DAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
