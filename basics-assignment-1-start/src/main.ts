// main.ts is the entry point for the angular application
// It compiles and 'bootstraps' the application by giving it the root module.
// in this case, the root module is 'AppModule'.  AppModule will be rendered in the
// DOM inside the tag <app-root>

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
