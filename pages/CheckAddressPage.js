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

  async selectUnit(index) {
    await this.page.locator(
      CheckAddressLocators.unitDropdown
    ).click();

    await this.page
      .locator(CheckAddressLocators.options)
      .nth(index)
      .click();
  }

  async clickNext() {
    await this.page.locator(
      CheckAddressLocators.nextButton
    ).click();
  }

  async checkAddress(address) {
    await this.enterAddress(address);
    await this.selectUnit(3);
    await this.clickNext();
  }
}