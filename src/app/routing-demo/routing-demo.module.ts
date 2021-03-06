import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingDemoRoutingModule } from './routing-demo-routing.module';
import { HomeComponent } from './home.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RoutingDemoRoutingModule
  ]
})
export class RoutingDemoModule { }
