import { expect } from "@playwright/test";
import { OfferingLocators } from "../locators/offering.locators";

export class OfferingPage {
    constructor (page){
        this.page=page;
    }

    async verifyVoipModal() {
        const modal = this.page.locator(OfferingLocators.VoipModal);
        console.log(await modal.count());
        await expect(modal).toBeVisible();
    }   

    async closeVoipModal() {
    await this.page
        .getByTestId("modal-close-icon")
        .click();

}

    async selectAPlan(index){
        await this.page
        .locator(`#choose_plan_${index}`)
        .getByTestId("offer-card-button")
        .click(); 
    }



}