import { test, expect } from "@playwright/test";

test("Unassisted Prospect Flow", async ({ page }) => {
  const qlab02 = "https://qlab02.fiber.t-mobile.com/check-address";

  //check-address page

  //check-address field
  await page.goto(qlab02);
  await page.locator("#address").fill("61 delancey");
  await expect(page.getByRole("listbox")).toBeVisible();
  await page.getByRole("option").first().click();

  // unit no. selection
  await expect(page.locator("#fca-unit")).toBeVisible();
  await page.getByRole("combobox").click();
  await page.getByRole("option").first().click();
  await page.getByTestId("fca-btn").click();

  // offering page
});
