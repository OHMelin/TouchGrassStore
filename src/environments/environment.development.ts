require('dotenv').config()

export const environment = {
    production: false,
    POSTHOG_KEY:process.env.POSTHOG_KEY,
    POSTHOG_HOST:'https://app.posthog.com',
};
