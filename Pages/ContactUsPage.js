const { expect } = require('@playwright/test');

exports.ContactUsPage = class ContactUsPage {
  constructor(page) {
    this.page = page;
    this.contactUsButton = page.locator("a[href='/contact_us']");
    this.contactUsTitle = page.locator(".contact-form > .text-center.title");
    this.nameInput = page.locator("input[name='name']");
    this.emailInput = page.locator("input[placeholder='Email']");
    this.subjectInput = page.locator("input[name='subject']");
    this.messageInput = page.locator("#message");
    this.uploadFileInput = page.locator("input[name='upload_file']");
    this.submitButton = page.locator("input[name='submit']");
    this.successMessage = page.locator(".alert.alert-success.status");
  }

  async gotoContactUsPage() {
    await this.page.goto('https://www.automationexercise.com/contact_us');
    await expect(this.contactUsTitle).toBeVisible();
  }

  async fillContactUsForm(name, email, subject, message, filePath) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.subjectInput.fill(subject);
    await this.messageInput.fill(message);
    await this.uploadFileInput.setInputFiles(filePath);
  }

  async handleSubmitAndAcceptDialog() {
    this.page.once('dialog', async (dialog) => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toContain('Press OK to proceed!');
    await dialog.accept();
    });

    await this.submitButton.click();
  }

  async verifySuccessMessage() {
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toHaveText('Success! Your details have been submitted successfully.');
  }
};
