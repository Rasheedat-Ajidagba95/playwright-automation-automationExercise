const { expect } = require('@playwright/test');
exports.TestCasePage = class TestCasePage {
    constructor(page) {
        this.page = page;
        this.testCaseButton = page.locator("a[href='/test_cases']");
        this.testCaseTitle = page.locator(".title.text-center");
        this.testCaseList = page.locator(".test-cases > .table-responsive > table > tbody > tr");
        this.testCaseDetails = page.locator(".test-cases > .table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(2)");
    }
    async gotoTestCasePage() {
        await this.page.goto('https://www.automationexercise.com/test_cases');
    }
    async verifyTestCasePage() {
        await this.testCaseButton.click();
        await expect(this.testCaseTitle).toBeVisible();
    }
}