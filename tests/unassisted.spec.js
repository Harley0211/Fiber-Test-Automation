import { test } from "@playwright/test";
import { CheckAddressPage } from "../pages/CheckAddressPage";
import { addresses } from "../test-data/addresses";

test("Unassisted Prospect Flow", async ({ page }) => {

  const checkAddress = new CheckAddressPage(page);

  await checkAddress.navigate();

  await checkAddress.checkAddress(
    addresses.eligible
  );

});