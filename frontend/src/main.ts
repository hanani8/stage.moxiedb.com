import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import "@angular/compiler";

import { AppModule } from './app/app.module';
import { adminEnvironment } from './environments/environment';
import { iUserEnvironment } from './environments/environment';
import { xUserEnvironment } from './environments/environment';

if (adminEnvironment.production) {
  enableProdMode();
}
if (iUserEnvironment.production) {
  enableProdMode();
}
if (xUserEnvironment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
