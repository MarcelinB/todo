import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: "node server.front.js",
    port: 3001,
    timeout: 30 * 1000,  // Attendre 30 secondes maximum
    reuseExistingServer: true  // Réutiliser le serveur en local
  },
  testDir: './tests/todo.e2e.test.js',
  use: {
    baseURL: 'http://localhost:3001/index.html',
    headless: true,
  },
});
