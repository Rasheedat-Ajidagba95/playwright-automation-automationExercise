import {expect, test} from '@playwright/test';
import {LogoutPage} from '../Pages/LogoutPage';
 
let Logout
test('logout test', async ({page})=>{
    Logout = new LogoutPage(page);
    
    await Logout.gotoLoginPage();
    await Logout.login('rashesster2@yopmail.com', 'more@4me');
    await Logout.VerifyLoginSuccessMessage()
    await Logout.LogoutButton.click();

})