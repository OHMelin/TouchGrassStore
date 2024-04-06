import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { environment } from './environments/environment';
import posthog from 'posthog-js'


posthog.init(
  environment.POSTHOG_KEY,
  {
    api_host: environment.POSTHOG_HOST,
    persistence: 'memory',
  }
)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
