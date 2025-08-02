import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    video: 'on-first-retry',
    trace: 'on-first-retry'
  },
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium'
      }
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox'
      }
    },
    {
      name: 'webkit',
      use: {
        browserName: 'webkit'
      }
    }
  ]
};

export default config;