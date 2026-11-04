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
    // The fixture gives the build German and French editions (and DE tags) to make
    // /de/ and /fr/ landing pages from, until the content has its own (src/utils/editions.ts).
    command: `LANDING_EDITIONS_FIXTURE=tests/fixtures/landing-editions.json npm run build && npx astro preview --port ${PORT}`,
    url: `http://localhost:${PORT}/`,
    timeout: 180_000,
    reuseExistingServer: !process.env.CI,
  },
});
