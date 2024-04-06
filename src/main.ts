import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { secrets } from './secrets'
import posthog from 'posthog-js'

posthog.init(
  secrets.POSTHOG_KEY,
  {
    api_host:"https://us.posthog.com"
  }
)

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));