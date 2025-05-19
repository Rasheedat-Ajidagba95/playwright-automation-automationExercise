const { expect } = require('@playwright/test');
exports.SubscriptionPage = class SubscriptionPage {
    constructor(page) {
        this.page = page
        this.subscriptionEmailField = page.locator("#susbscribe_email");
        this.subscriptionButtonSubmit = page.locator("button#subscribe > .fa.fa-arrow-circle-o-right");
        this.subscriptionSuccessMessage = page.locator(".alert-success");
    }

    async goToSubscriptionInHomePage() {
        await this.page.goto('https://www.automationexercise.com/');
    
    }
    async goToSubscriptionInCartPage() {
        await this.page.goto('https://www.automationexercise.com/view_cart');
    }
    async submitSubscriptionEmail(email) {
        await this.page.waitForSelector("#susbscribe_email");
        await this.subscriptionEmailField.fill(email);
        await this.subscriptionButtonSubmit.click();
    }
    async verifySubscriptionSuccessMessage() {
        await this.page.waitForSelector(".alert-success");
        await expect(this.subscriptionSuccessMessage).toBeVisible();
    }
}