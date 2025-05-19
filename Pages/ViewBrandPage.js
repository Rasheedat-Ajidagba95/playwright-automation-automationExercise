const { expect } = require('@playwright/test');
exports.ViewBrandPage = class ViewBrandPage {

   constructor(page){
        this.page = page;
        this.productsPageButton = page.locator("a[href='/products']");
        this.brandNameList = page.locator(".brands-name");
      //   this.brandName = page.locator("a[href='/brand_products/Babyhug']");
        this.brandProducts = page.locator(".features_items");

   }
   async goToHomePage() {
      await this.page.goto('https://automationexercise.com/');
    }
    async clickProductsPageButton() {
      await this.productsPageButton.click();
    }
    async viewBrand(brandName) {
      const brands = await this.brandNameList.all();
      for (const brand of brands) {
        const brandText = await brand.innerText();
        if (brandText.includes(brandName)) {
          await brand.click(); 
          break;
        }
      }
    }
    async verifyBrand() {
      await expect(this.brandProducts).toBeVisible();
      // await expect(this.brandProducts).toHaveText('Babyhug');
    }
     
    // async viewBrandProduct(brandName) {
    //   const brands = await this.brandNameList.all();
    //   for (const brand of brands) {
    //     const brandText = await brand.innerText();
    //     if (brandText.includes(brandName)) {
    //       await brand.click(); 
    //       break;
    //     }
    //   }
    // }

}