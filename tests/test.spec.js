import { test } from "@playwright/test";

test("Check Address Page", async ({ page }) => {
  await page.goto("https://www.google.com");
});
