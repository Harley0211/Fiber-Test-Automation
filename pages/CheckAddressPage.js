import { expect } from "@playwright/test";
import { CheckAddressLocators } from "../locators/checkAddress.locators";

export class CheckAddressPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(
      "https://qlab02.fiber.t-mobile.com/check-address"
    );
  }

  async enterAddress(address) {
    await this.page.locator(
      CheckAddressLocators.addressInput
    ).fill(address);
  }

  async suggestion(){
    await this.page.locator(
      CheckAddressLocators.addressSuggestions
    ).first().click();
  }

  async verifygreencheckmark(){
    await expect(
      this.page.locator(CheckAddressLocators.eligible_greencheck)
    ).toBeVisible();
    
  }

  async selectUnit (unit){
    await this.page
      .locator(CheckAddressLocators.unitDropdown)
      .waitFor({state : "visible"});
    
    await this.page.locator(CheckAddressLocators.unitDropdown)
      .click();
    await this.page.getByRole('option', {name: unit})
      .click();

  }

  async btnnext(){
    await this.page.locator(CheckAddressLocators.btn_next).click();
  }





  
}