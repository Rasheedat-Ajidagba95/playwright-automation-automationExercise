import {expect, test} from '@playwright/test';
import {ProductsPage} from '../Pages/ProductsPage';


let Products;

test.describe('Products test', () => {

    test.beforeEach(async ({ page }) => {
        Products = new ProductsPage(page);
        await Products.goToHomePage();
        await Products.clickProductsPageButton();
    });

    test('View Products test', async () => {
        
    await Products.verifyAllProductsPage();
    await Products.clickViewProductButton('Blue Top');
    await Products.verifyProductName('Blue Top');
    await Products.verifyProductPrice('Rs. 500');
    await Products.verifyProductCategory('Category: Women > Tops');
    });
   
    test('View Product Category test', async () => {

        await Products.clickOnWomensCategory();
        await Products.clickOnWomensDressCategory();
        await Products.verifyWomensDressCategoryTitle();
        await Products.clickOnMensCategory();
        await Products.clickOnMensShirtCategory();
        await Products.verifyMensShirtCategoryTitle();
    });

    test ('Search Product test', async () => {

        await Products.searchProduct('Top');
        await Products.verifySearchProductText();
        await Products.verifyProductList();
    });

    test ('Add Review Product test', async () => {

        await Products.clickViewProductButton('Blue Top');
        await Products.fillReviewForm('John Doe', 'rash@yopail.com', 'This is a test review.');
        await Products.submitReview();
        await Products.verifySuccessMessage();
    });
})
