import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'chat',
    loadChildren: () => import('chat/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'discussion',
    loadChildren: () => import('discussion/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    loadChildren: () => import('home/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-implemented/not-implemented.component').then(
        (m) => m.NotImplementedComponent
      ),
  },
];
