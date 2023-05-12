import { Routes } from '@angular/router';
import { DAppComponent } from './change-detect/d-app/d-app.component';
import { AttrDemoComponent } from './custom-attr/attr-demo/attr-demo.component';
import { ScrollServiceComponent } from './scroll-service/scroll-service.component';
import { UniqueIdComponent } from './unique-id/unique-id.component';

export const routes: Routes = [
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
    loadChildren: () => import('./app-material/app-material-routing')
  },
  {
    path: "scroll",
    component: ScrollServiceComponent,
    title: "NG: scroll"
  },
  {
    path: "uuid",
    component: UniqueIdComponent
  },
  {
    path: "deeprouting",
    loadChildren: () => import('./routing-demo/routing-demo-routing')
  }
];