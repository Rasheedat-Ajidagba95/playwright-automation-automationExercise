const { expect } = require('@playwright/test');
const { faker }= require('@faker-js/faker');
exports.SignUpPage = class SignUpPage{

   constructor(page){
        this.page = page;
        this.SignUpButton = page.locator("a[href='/login']");
        this.SignUpMessage = page.locator("div [class='signup-form']>h2");
        this.name = page.locator("input[placeholder='Name']");
        this.email = page.locator("input[data-qa='signup-email']");
        this.signUpButton = page.locator("button[data-qa='signup-button']");
        this.enterAcctInfoMessage = page.locator(".login-form > h2");
        this.genderButton = page.locator("#id_gender2");
        this.nameField = page.locator("#name");
        this.password = page.locator("#password");
        this.daysDropdown = page.locator("#days");
        this.monthsDropdown = page.locator("#months");
        this.yearsDropdown = page.locator("#years");
        this.newsletterCheckbox = page.locator("#newsletter");
        this.firstName = page.locator("#first_name");
        this.lastName = page.locator("#last_name");
        this.companyNameField = page.locator("#company");
        this.addressField = page.locator("#address1");
        this.countryDropdown = page.locator("#country");
        this.stateField = page.locator("#state");
        this.cityField = page.locator("#city");
        this.zipcodeField = page.locator("#zipcode");
        this.mobileNumberField = page.locator("#mobile_number");
        this.createAccountButton = page.locator("section#form > .container form[method='post'] > .btn.btn-default");
        this.accountCreatedSuccessMessage = page.locator('.text-center > b');
        this.creatAccountButton = page.locator(".btn.btn-primary");    
    } 
    async gotoHomePage(){
        await this.page.goto('https://www.automationexercise.com/');
    }
    async clickOnSignUpButton(){
        await this.SignUpButton.click();
    }

    async fillFirstSignUpForm(){
        await expect(this.SignUpMessage).toBeVisible();
        await this.name.fill(faker.person.fullName());
        await this.email.fill(faker.internet.email());
        await this.signUpButton.click();
    }
    async fillSecondSignUpForm(){
        await expect(this.enterAcctInfoMessage).toBeVisible();
        await this.genderButton.click();
        await this.nameField.fill(faker.person.fullName());
        await this.password.fill(faker.internet.password());
        await this.daysDropdown.selectOption({ label: '1' });
        await this.monthsDropdown.selectOption({ label: 'January' });
        await this.yearsDropdown.selectOption({ label: '2000' });
        await this.newsletterCheckbox.check();
        await this.firstName.fill("John");
        await this.lastName.fill("Doe");
        await this.companyNameField.fill("fake company");
        await this.addressField.fill("123 Fake Street");
        await this.countryDropdown.selectOption({ label: 'United States' });
        await this.stateField.fill("California");
        await this.cityField.fill("Los Angeles");
        await this.zipcodeField.fill("90001");
        await this.mobileNumberField.fill("1234567890");
        await this.createAccountButton.click();
    }
    async verifyAccountCreated(){
        await expect(this.accountCreatedSuccessMessage).toBeVisible();
        
    }
}
