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
        await this.page.locator(OfferingLocators.modalClose).click();
    }

    async selectFiber1GigPlan() {
        const fiber1GigCard = this.page.locator(OfferingLocators.fiber1GigCard);
        await expect(fiber1GigCard).toBeVisible();
        await fiber1GigCard.getByTestId("offer-card-button").click();
    }


}

