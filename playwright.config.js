// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  timeout: 120000,
  use: {
    trace: "on-first-retry",
    headless: false,
    launchOptions: {
      slowMo: 2000,
    },
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
