import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  webServer: [
    {
      command: 'npm start',
      port: 3000,
    },
  ],
  use: {
    baseURL: 'http://localhost:3000',
  },
});
