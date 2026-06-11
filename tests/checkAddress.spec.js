import { test, expect } from "@playwright/test";
import { checkAddress, CheckAddressPage } from "../pages/CheckAddressPage";

test("User can complete address flow", async ({ page }) => {
  await checkAddress();
});
