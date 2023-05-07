import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingDemoRoutingModule } from './routing-demo-routing.module';
import { HomeComponent } from './home.component';
import { ListComponent } from './list/list.component';
import { SubNavigationComponent } from './sub-navigation.component';
import { AboutSubnavComponent } from './about-subnav/about-subnav.component';


@NgModule({
    imports: [
        CommonModule,
        RoutingDemoRoutingModule,
        HomeComponent,
        ListComponent,
        SubNavigationComponent,
        AboutSubnavComponent
    ]
})
export class RoutingDemoModule { }
