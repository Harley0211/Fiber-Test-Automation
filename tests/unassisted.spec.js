import { test, expect } from "@playwright/test";
import { checkAddress } from "../pages/CheckAddressPage";

test("Unassisted Prospect Flow", async ({ page }) => {
  await checkAddress(page);
});
