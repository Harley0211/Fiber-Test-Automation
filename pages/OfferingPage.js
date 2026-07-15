import { expect } from "@playwright/test";
import { OfferingLocators } from "../locators/offering.locators";

export class OfferingPage {
    constructor (page){
        this.page=page;
    }

    //website was updated and the modal is no longer displayed on the offering page. The following code is commented out to avoid test failure.

    // async verifyVoipModal() {
    //     const modal = this.page.locator(OfferingLocators.VoipModal);
    //     console.log(await modal.count());
    //     await expect(modal).toBeVisible();
    // }   
    
    // async closeVoipModal() {
    //     await this.page.locator(OfferingLocators.modalClose).click();
    // }

    async selectFiber1GigPlan() {
        const fiber1GigCard = this.page.locator(OfferingLocators.fiber1GigCard);
        await expect(fiber1GigCard).toBeVisible();
        await fiber1GigCard.getByTestId("offer-card-button").click();
    }


}

