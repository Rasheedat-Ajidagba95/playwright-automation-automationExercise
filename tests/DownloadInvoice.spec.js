import  { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { DownloadInvoicePage } from '../Pages/DownloadInvoicePage';
import{PlaceOrderPage} from '../Pages/PlaceOrderPage';
import { SignUpPage } from '../Pages/SignUpPage';


let PlaceOrder;
let SignUp;
let DownloadInvoice;

test('Download Invoice', async ({ page }) => {

     DownloadInvoice = new DownloadInvoicePage(page);
     PlaceOrder = new PlaceOrderPage(page);
     SignUp = new SignUpPage(page);

    await PlaceOrder.gotoHomePage();
    await PlaceOrder.addProductToCart();
    await PlaceOrder.goToRegisterAndLoginPage();
    await SignUp.fillFirstSignUpForm(faker.person.fullName(), faker.internet.email());
    await SignUp.fillSecondSignUpForm();
    await SignUp.verifyAccountCreated();
    await PlaceOrder.clickOnContinueButton();
    await PlaceOrder.addProductToCart();
    await PlaceOrder.verifyAddressDetails();
    await PlaceOrder.addDetailsInTextArea();
    await PlaceOrder.clickOnPlaceOrderButton();
    await PlaceOrder.fillCardDetails();
    await PlaceOrder.clickOnPayButton();
    await PlaceOrder.verifyOrderConfirmationMessage();
    await DownloadInvoice.clickDownloadInvoiceButton();

});
    