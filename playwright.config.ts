import { defineConfig } from '@playwright/test';

const PORT = 4392;

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: `http://localhost:${PORT}`,
    // The system Chrome, so no browser download is needed
    channel: 'chrome',
  },
  webServer: {
    command: `npm run build && npx astro preview --port ${PORT}`,
    url: `http://localhost:${PORT}/`,
    timeout: 180_000,
    reuseExistingServer: !process.env.CI,
  },
});
