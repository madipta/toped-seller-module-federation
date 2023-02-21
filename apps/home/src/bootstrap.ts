import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { RemoteEntryComponent } from './app/remote-entry/entry.component';
import { appRoutes } from './app/app.routes';
import { HomeModule } from '@/ui/features/home';

bootstrapApplication(RemoteEntryComponent, {
  providers: [
    importProvidersFrom(HomeModule),
    provideAnimations(),
    provideRouter(appRoutes),
  ],
});

