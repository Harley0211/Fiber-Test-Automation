import { test, expect } from "@playwright/test";
import { CheckAddressPage } from "../pages/CheckAddressPage";

test("User can complete address flow", async ({ page }) => {
  const checkAddressPage = new CheckAddressPage(page);

  //navigate
  await checkAddressPage.goto();

  //search the address
  await checkAddressPage.searchAddress("61 delancey");

  //first suggestion
  await checkAddressPage.selectFirstAddressSuggestion();

  //first unit
  await checkAddressPage.selectFirstUnit();

  //is next button enabled?
  await expect(checkAddressPage.nextBtn).toBeEnabled();
});
