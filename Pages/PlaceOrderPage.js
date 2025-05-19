const { expect } = require('@playwright/test');
const { faker }= require('@faker-js/faker');
exports.PlaceOrderPage = class PlaceOrderPage{
    constructor(page){
        this.page = page;
        this.viewCartLink = page.locator(".text-center>a>u");
        this.checkoutButton = page.locator('.btn.btn-default.check_out');
        this.continueButton = page.locator('.btn.btn-primary');
        this.addressDetails = page.locator('div:nth-of-type(2) > .heading');
        this.textArea = page.locator('.form-control');
        this.placeOrderButton = page.locator('.btn.btn-default.check_out');
        this.nameOnCardField = page.locator("input[name='name_on_card']");
        this.cardNumberField = page.locator("input[name='card_number']");
        this.cvcField = page.locator("input[name='cvc']");
        this.expiryMonthField = page.locator("input[name='expiry_month']");
        this.expiryYearField = page.locator("input[name='expiry_year']");
        this.payButton = page.locator('button#submit');
        this.orderConfirmationMessage = page.locator('.col-sm-9.col-sm-offset-1');
        this.registerAndLoginPageLink = page.locator(".modal-content u");
    }

    async gotoHomePage(){
        await this.page.goto('https://www.automationexercise.com/');
    }

    async goToRegisterAndLoginPage(){
        await this.registerAndLoginPageLink.click();
    }

    async addProductToCart(){
        await this.page.locator('.features_items .product-image-wrapper').first().hover();
        await this.page.locator('.overlay-content .btn.add-to-cart').first().click();
        await this.page.waitForTimeout(2000);
        await this.viewCartLink.click();
        await this.checkoutButton.click();
    }
  async verifyAddressDetails(){
        await this.page.waitForTimeout(2000);
        const addressText = await this.addressDetails.innerText();
        expect(addressText).toContain('Address Details');
    }

   async addDetailsInTextArea(){
        await this.textArea.fill('This is a test message');
    }
    async clickOnPlaceOrderButton(){
            await this.placeOrderButton.click();
            await this.page.waitForTimeout(2000);
        }
    async fillCardDetails(){
        await this.nameOnCardField.fill(faker.person.fullName());
        await this.cardNumberField.fill(faker.finance.creditCardNumber());
        await this.cvcField.fill(faker.finance.creditCardCVV());
        await this.expiryMonthField.fill('12');
        await this.expiryYearField.fill('2025');
    }
    async clickOnPayButton(){
        await this.payButton.click();
    }
    async verifyOrderConfirmationMessage(){
        const orderText = await this.orderConfirmationMessage.innerText();
        expect(orderText).toContain('Congratulations! Your order has been confirmed!');
    }

    async clickOnContinueButton(){
        await this.continueButton.click();
        await this.page.waitForTimeout(2000);
    }
}
    