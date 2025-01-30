import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  // Dossier où Playwright cherche les tests
  testIgnore: ['tests/api/*.test.js'],  // Ignore tous les tests Jest
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
  },
});
