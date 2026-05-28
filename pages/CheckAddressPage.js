import { expect } from "@playwright/test";

export class CheckAddressPage {
  constructor(page) {
    this.page = page;

    //address input
    this.addressInput = page.locator('[name="Address"]');

    //address suggestion
    this.addressSuggestionDropdown = page.locator(
      "#address-dropdown-suggestions-list",
    );
    this.addressSuggestions = page.locator(
      "#address-dropdown-suggestions-list li",
    );

    //unit number lists
    this.unitDropdown = page.locator('[name = "unit"]');
    this.unitListBox = page.getByRole("listbox");
    this.unitOption = page.getByRole("option");

    //next btn
    this.nextBtn = page.getByRole("button", {
      name: "Next",
    });
  }

  async goto() {
    await this.page.goto("https://qlab02.fiber.t-mobile.com/check-address");
  }
  async searchAddress(address) {
    await this.addressInput.fill(address);
  }

  async selectFirstAddressSuggestion() {
    await expect(this.addressSuggestionDropdown).toBeVisible();

    await this.addressSuggestions.first().click();
  }

  async selectFirstUnit() {
    await this.unitDropdown.click();

    await expect(this.unitListBox).toBeVisible();

    await this.unitOption.first().click();
  }
}
