import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ChatModule } from '@/ui/features/chat';
import { appRoutes } from './app/app.routes';
import { RemoteEntryComponent } from './app/remote-entry/entry.component';

bootstrapApplication(RemoteEntryComponent, {
  providers: [
    importProvidersFrom(ChatModule),
    provideAnimations(),
    provideRouter(appRoutes),
  ],
});
