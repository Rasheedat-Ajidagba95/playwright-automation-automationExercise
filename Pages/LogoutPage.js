const { expect } = require('@playwright/test');
exports.LogoutPage = class LogoutPage {
    constructor(page) {
            this.page = page;
            this.GoToLoginPageButton = page.locator("a[href='/login']");
            this.LoginMessage = page.locator("div [class='login-form']>h2");
            this.email = page.locator("input[data-qa='login-email']");
            this.password = page.locator("input[placeholder='Password']");
            this.loginButton = page.locator("button[data-qa='login-button']");
            this.LoginSuccessMessage = page.locator("li:nth-child(10) a:nth-child(1)");
            this.LogoutButton = page.locator(".nav.navbar-nav > li:nth-of-type(4) > a");
        }

    async gotoLoginPage() {
        await this.page.goto('https://www.automationexercise.com/login');
    }
    async login(email, password) {
        await this.GoToLoginPageButton.click();
        await expect(this.LoginMessage).toBeVisible();
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    async VerifyLoginSuccessMessage() {
        await expect(this.LoginSuccessMessage).toBeVisible();
    }
    async logout() {
        await this.LogoutButton.click();
        await expect(this.LogoutButton).toBeVisible();
    }
}