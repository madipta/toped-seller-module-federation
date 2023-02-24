import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'chat',
    loadChildren: () => import('chat/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'home',
    loadChildren: () => import('home/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    loadChildren: () => import('home/Routes').then((m) => m.remoteRoutes),
  },
];
