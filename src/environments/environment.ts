import { secrets } from '../app/secrets'

export const environment = {
    production: true,
    POSTHOG_KEY: secrets.POSTHOG_KEY,
    POSTHOG_HOST: 'https://app.posthog.com',
};
