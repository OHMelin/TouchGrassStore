import { secrets } from '../secrets'

export const environment = {
    production: false,
    POSTHOG_KEY: secrets.POSTHOG_KEY,
    POSTHOG_HOST: 'https://app.posthog.com',
};
