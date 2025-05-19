import { test, expect } from '@playwright/test';
import { ViewBrandPage } from '../Pages/ViewBrandPage';

let viewBrandPage;
test('View Brand', async ({ page }) => {

    viewBrandPage = new ViewBrandPage(page);
    
    await viewBrandPage.goToHomePage();
    await viewBrandPage.clickProductsPageButton();
    await viewBrandPage.viewBrand('Babyhug');
    await viewBrandPage.verifyBrand();
    await viewBrandPage.viewBrand('Biba');
    await viewBrandPage.verifyBrand();
    
    });