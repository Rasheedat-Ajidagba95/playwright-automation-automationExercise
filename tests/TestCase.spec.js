import {expect, test} from '@playwright/test';
import {TestCasePage} from '../Pages/TestCasePage';
 
let TestCase

test('Test Cases test', async ({page})=>{
    TestCase  = new TestCasePage(page);

    await TestCase.gotoTestCasePage();
    await TestCase.verifyTestCasePage();

});

