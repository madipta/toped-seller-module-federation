import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { DiscussionModule } from '@/ui/features/discussion';
import { appRoutes } from './app/app.routes';
import { RemoteEntryComponent } from './app/remote-entry/entry.component';

bootstrapApplication(RemoteEntryComponent, {
  providers: [
    importProvidersFrom(DiscussionModule),
    provideAnimations(),
    provideRouter(appRoutes),
  ],
});
