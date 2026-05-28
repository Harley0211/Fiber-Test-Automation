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

  async goto() {}
}
