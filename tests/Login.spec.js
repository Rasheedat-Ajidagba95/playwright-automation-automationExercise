import {test, expect} from '@playwright/test';
import {LoginPage} from '../Pages/LoginPage';

test.describe('Login Test Suite', () => {
    // test.beforeEach(async ({page}) => {
    //     await page.goto('https://www.automationexercise.com/');
    // });

   let Login

test('login test with valid credentials', async ({page})=>{
    Login = new LoginPage(page);

    await Login.gotoHomePage();
    await Login.clickOnLoginButton();
    await Login.fillLoginDetails('rashesster2@yopmail.com', 'more@4me');
    await Login.VerifyLoginSuccessMessage()

    
})
test('login test with invalid credentials', async ({page})=>{
    Login = new LoginPage(page);

    await Login.gotoHomePage();
    await Login.clickOnLoginButton();
    await Login.fillLoginDetails('invaliduser@example.com', 'more@4me');
    await page.waitForTimeout(2000);
    await Login.VerifyLoginErrorMessage() 

});

});