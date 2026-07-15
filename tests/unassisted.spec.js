import { test } from "@playwright/test";
import { CheckAddressPage } from "../pages/CheckAddressPage";
import { OfferingPage} from "../pages/OfferingPage";
import { addresses } from "../test-data/addresses";

test("Unassisted Prospect Flow", async ({ page }) => {

  const checkAddress = new CheckAddressPage(page);
  const offeringPage = new OfferingPage(page);

  const selectedPlan = 0;
  


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


  // //Offering
  // await offeringPage.verifyVoipModal();
  // console.log("Modal Displays on the offering page")

  // await offeringPage.closeVoipModal();
  // console.log("Modal closed");

  //website was updated and the modal is no longer displayed on the offering page. The following code is commented out to avoid test failure.
  // await offeringPage.selectFiber1GigPlan();
  // console.log("VOIP Modal Diplayed");

  // await offeringPage.closeVoipModal();
  // console.log("VOIP Modal closed");

  await offeringPage.selectFiber1GigPlan();
  console.log("Fiber 1 Gig Plan Selected");

});
