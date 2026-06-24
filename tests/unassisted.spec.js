import { test } from "@playwright/test";
import { CheckAddressPage } from "../pages/CheckAddressPage";
import { addresses } from "../test-data/addresses";

test("Unassisted Prospect Flow", async ({ page }) => {

  const checkAddress = new CheckAddressPage(page);

  await checkAddress.navigate();

  await checkAddress.enterAddress(
    addresses.pilot_eligible
  );
  console.log("Address Entered!")
  
  await checkAddress.suggestion();
  console.log("Suggestion clicked!")
  await checkAddress.verifygreencheckmark();
  console.log("Green checkmark verified!")

  await checkAddress.selectUnit("1D");
  console.log("Unit selected")

  await checkAddress.btnnext();
  console.log("Next Button Clicked!")

});