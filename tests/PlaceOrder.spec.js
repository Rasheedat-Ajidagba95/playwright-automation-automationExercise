import { expect, test } from '@playwright/test';
import { PlaceOrderPage } from '../Pages/PlaceOrderPage';
import {SignUpPage} from '../Pages/SignUpPage';
import { LoginPage } from '../Pages/LoginPage';
import { faker } from '@faker-js/faker';


test.describe('Place Order Test Suite', () => {

let PlaceOrder;
let SignUp;
let Login;

test('Register While checking out', async ({ page }) => {
        PlaceOrder = new PlaceOrderPage(page);
        SignUp = new SignUpPage(page);
        Login = new LoginPage(page);

        await PlaceOrder.gotoHomePage();
        await PlaceOrder.addProductToCart();
        await PlaceOrder.goToRegisterAndLoginPage();
        await SignUp.fillFirstSignUpForm(faker.person.fullName(), faker.internet.email());
        await SignUp.fillSecondSignUpForm();
        await SignUp.verifyAccountCreated();
        await PlaceOrder.clickOnContinueButton();

});


test('Register Before checking out', async ({ page }) => {
    PlaceOrder = new PlaceOrderPage(page);
    SignUp = new SignUpPage(page);

    await SignUp.gotoHomePage();
    await SignUp.clickOnSignUpButton();
    await SignUp.fillFirstSignUpForm(faker.person.fullName(), faker.internet.email());
    await SignUp.fillSecondSignUpForm();
    await SignUp.verifyAccountCreated();
    await SignUp.clickOnSignUpButton();
    await PlaceOrder.addProductToCart();
    await PlaceOrder.verifyAddressDetails();
    await PlaceOrder.addDetailsInTextArea();
    await PlaceOrder.clickOnPlaceOrderButton();
    await PlaceOrder.fillCardDetails();
    await PlaceOrder.clickOnPayButton();
    await PlaceOrder.verifyOrderConfirmationMessage();
}
);
test('Login Before checking out', async ({ page }) => {
    PlaceOrder = new PlaceOrderPage(page);
    Login = new LoginPage(page);

    await Login.gotoHomePage();
    await Login.clickOnLoginButton();
    await Login.fillLoginDetails('rashesster2@yopmail.com', 'more@4me');
    await Login.VerifyLoginSuccessMessage();
    await PlaceOrder.addProductToCart();
    await PlaceOrder.verifyAddressDetails();
    await PlaceOrder.addDetailsInTextArea();
    await PlaceOrder.clickOnPlaceOrderButton();
    await PlaceOrder.fillCardDetails();
    await PlaceOrder.clickOnPayButton();
    await PlaceOrder.verifyOrderConfirmationMessage();
});
});