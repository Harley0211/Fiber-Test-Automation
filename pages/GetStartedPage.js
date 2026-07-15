import {expect} from "@playwright/test";
import { GetstartedLocators } from "../locators/getStarted.locators";

export class GetStartedPage {
    constructor(page) {
        this.page = page;
    }

    async verifyPersonalInfoDisplayed() {
        await expect(this.page.locator(GetstartedLocators.personalInfoTitle)).toBeVisible();
        await expect(this.page.locator(GetstartedLocators.firstName)).toBeVisible();
        await expect(this.page.locator(GetstartedLocators.lastName)).toBeVisible();
        await expect(this.page.locator(GetstartedLocators.phone)).toBeVisible();
        await expect(this.page.locator(GetstartedLocators.email)).toBeVisible();
        await expect(this.page.locator(GetstartedLocators.dateOfBirth)).toBeVisible();
        await expect(this.page.locator(GetstartedLocators.pin)).toBeVisible();
        await expect(this.page.locator(GetstartedLocators.pinRequirements)).toBeVisible();
        await expect(this.page.locator(GetstartedLocators.agreement)).toBeVisible();
        await expect(this.page.locator(GetstartedLocators.nextButton)).toBeVisible();

    }
}