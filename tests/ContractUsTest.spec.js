import { test, expect } from '@playwright/test';
import { ContactUsPage } from '../Pages/ContactUsPage';

let contactUsPage;
test('Contact Us Form Submission', async ({ page }) => {
  contactUsPage = new ContactUsPage(page);

  await contactUsPage.gotoContactUsPage();
  await contactUsPage.fillContactUsForm(
    'rashTester1',
    'rashesster2@yopmail.com',
    'I want to know more about your product',
    'I want to know more about your product',
    './test-data/Agile Software Development.pdf'
  );
  await contactUsPage.handleSubmitAndAcceptDialog();
  await contactUsPage.verifySuccessMessage();


})