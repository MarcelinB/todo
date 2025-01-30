import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: "npx live-server --port=3001 --root=public",
    port: 3001,
    timeout: 30 * 1000,  // Attendre 30 secondes maximum
    reuseExistingServer: !process.env.CI,  // Réutiliser le serveur en local
  },
  testDir: './tests/e2e',
  use: {
    baseURL: 'http://localhost:3001/index.html',
    headless: true,
  },
});
