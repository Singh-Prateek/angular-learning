import { Router } from '@angular/router';
import { Location } from '@angular/common';

// Lightweight, framework-agnostic router/location stubs for unit tests.
// These provide the minimal surface area required by components that inject
// Router/Location or use `routerLink` directives in templates.

export const routerProvidersForTesting = [
  {
    provide: Router,
    useValue: {
      navigate: (_: any[]) => Promise.resolve(true),
      navigateByUrl: (_: any) => Promise.resolve(true),
      url: '/',
      events: { subscribe: () => ({ unsubscribe: () => {} }) },
      createUrlTree: (..._args: any[]) => ({}),
      serializeUrl: (_: any) => ''
    }
  },
  {
    provide: Location,
    useValue: {
      path: () => '/',
      prepareExternalUrl: (p: any) => p
    }
  }
];
