const { expect } = require('@playwright/test');
exports.LoginPage = class LoginPage {
    
    constructor(page) {
        this.page = page;
        this.GoToLoginPageButton = page.locator("a[href='/login']");
        this.LoginMessage = page.locator("div [class='login-form']>h2");
        this.email = page.locator("input[data-qa='login-email']");
        this.password = page.locator("input[placeholder='Password']");
        this.loginButton = page.locator("button[data-qa='login-button']");
        this.LoginSuccessMessage = page.locator("li:nth-child(10) a:nth-child(1)");
        this.LoginErrorMessage = page.locator(".login-form p");
        this.LogoutButton = page.locator(".nav.navbar-nav > li:nth-of-type(4) > a");

    }
    async gotoHomePage() {
        await this.page.goto('https://www.automationexercise.com/');
    }
    async clickOnLoginButton() {
        await this.GoToLoginPageButton.click();
    }
   
    async fillLoginDetails(email, password) {
        await this.GoToLoginPageButton.click();
        await expect(this.LoginMessage).toBeVisible();
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
        
    }
    async VerifyLoginSuccessMessage(){
        await expect(this.LoginSuccessMessage).toBeVisible();
    }
    async VerifyLoginErrorMessage(){
        await expect(this.LoginErrorMessage).toHaveText('Your email or password is incorrect!');
    }
    }   
