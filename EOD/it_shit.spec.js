import { test } from "@playwright/test";

test("Unassisted Prospect Flow", async ({ page }) => {
  await page.goto(
    "https://docs.google.com/forms/d/e/1FAIpQLSeU3Cn0eW9aVJZlA2wSRg_KFuU8VPVeJ7OsXtZE-uKP2kNwzw/viewform?pli=1&pli=1&fbzx=-8215956104082690086",
  );

  // CHECK-IN
  await page.locator('input[aria-label="Hour"]').first().fill('10');
  await page.locator('input[aria-label="Minute"]').first().fill('00');
  await page.locator('[aria-label="AM or PM"]').first().click();
  await page.locator('[role="option"][data-value="PM"]').click();
  
  // CHECK-OUT
  await page.locator('input[aria-label="Hour"]').nth(1).fill('07');
  await page.locator('input[aria-label="Minute"]').nth(1).fill('00');


//   await page.getByLabel("AGENT'S FULL NAME").fill("Valencia, Harley Dave C.");


});
