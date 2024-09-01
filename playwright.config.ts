import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testMatch:['/tests/login.test.ts'],
  use:{
    headless:false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  retries: 2,
  reporter:[["dot"], ["html"]]
});
