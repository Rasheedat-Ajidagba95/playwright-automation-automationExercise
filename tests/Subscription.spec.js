import {test, expect} from '@playwright/test';
import {SubscriptionPage} from '../Pages/SubscriptionPage';


test.describe( 'Subscription Test Suite', () => {
    
    let Subscription;
    
    test('Subscription test in Home Page', async ({page}) => {
        Subscription = new SubscriptionPage(page);

        await Subscription.goToSubscriptionInHomePage();
        await Subscription.submitSubscriptionEmail('rash@yopmail.com');
        await Subscription.verifySubscriptionSuccessMessage();

    })
    test('Subscription test in Cart Page', async ({page}) => {
        Subscription = new SubscriptionPage(page);

        await Subscription.goToSubscriptionInCartPage();
        await Subscription.submitSubscriptionEmail('rash@yopmail.com');
        await Subscription.verifySubscriptionSuccessMessage();
    })
})
