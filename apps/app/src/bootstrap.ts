import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { SidenavModule } from '@/ui/core/dashboard';
import { HomeModule } from '@/ui/features/home';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { appRoutes } from './app/app.routes';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppModule, HomeModule, SidenavModule),
    provideAnimations(),
    provideRouter(appRoutes),
  ],
}).catch((err) => console.error(err));
