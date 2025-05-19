import {expect , test} from '@playwright/test';
import {SignUpPage} from '../Pages/SignUpPage';

let SignUp

test('Signup test', async ({browser})=>{
   const context = await browser.newContext();
   const page =await context.newPage();
    
   SignUp = new SignUpPage(page);
   
    await SignUp.gotoHomePage();
    await SignUp.clickOnSignUpButton();
    await SignUp.fillFirstSignUpForm();
    await SignUp.fillSecondSignUpForm();
    await SignUp.verifyAccountCreated()

})