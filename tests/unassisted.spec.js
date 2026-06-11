import { test, expect } from "@playwright/test";
import { checkAddress } from "../pages/CheckAddressPage";

test("Unassisted Prospect Flow", async ({ page }) => {
  //Check-address
  await page.goto("https://qlab02.fiber.t-mobile.com/check-address");
  await page.locator("#address").fill("61 delancey");
  await page.getByRole("listbox").first().click();
  await page.getByTestId("fca-unit").click();
  await page.getByRole("option").nth(3).click();
  await page.getByTestId("fca-btn").click();

  //Offering Page
  await page.
});
