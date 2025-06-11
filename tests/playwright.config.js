import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  // Directory where your test files are
  use: {
    video: 'on',       // Enable video recording
    headless: false,   // Show the browser UI during the test
  },
});
