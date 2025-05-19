import { test, expect } from '@playwright/test';
import { CartPage } from '../Pages/CartPage';


test.describe('Cart Page Tests', () => {


    let cartPage;

    
   
test('Add Products to Cart', async ({ page }) => {
    cartPage = new CartPage(page);
    
    await cartPage.goToHomePage();
    await cartPage.clickProductsPageButton();
    await cartPage.addProductToCart('Blue Top');
    await cartPage.continueShopping();
    await cartPage.addProductToCart('Men Tshirt')
    await cartPage.viewCart();
    await cartPage.verifyProductInfoInCart('Blue Top','Rs. 500' );
    await cartPage.verifyProductInfoInCart('Men Tshirt','Rs. 400' )
});

test('Remove Product in Cart', async ({ page }) => {
    cartPage = new CartPage(page);
    
    await cartPage.goToHomePage();
    await cartPage.clickProductsPageButton();
    await cartPage.addProductToCart('Blue Top');
    await cartPage.viewCart();
    await cartPage.deleteProductInCart();
    await cartPage.verifyCartEmptyMessage();
});

test('Verify Product Quantity In Cart', async ({ page }) => {
    cartPage = new CartPage(page);

    await cartPage.goToHomePage();
    await cartPage.clickProductsPageButton();
    await cartPage.goTOProductDetailsPage();
    await cartPage.verifyProductDetails();
    await cartPage.addProductQtyToCart();
    await cartPage.verifyProductQuantityInCart();
    
});

})

