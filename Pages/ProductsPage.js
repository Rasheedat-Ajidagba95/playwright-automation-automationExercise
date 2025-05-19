const { expect } = require('@playwright/test');
exports.ProductsPage = class ProductsPage{

   constructor(page) {
      this.page = page;
      this.productsPageButton = page.locator("a[href='/products']");
      this.productCards = page.locator('.features_items .product-image-wrapper');
      this.AllProductsTitle = page.locator('.features_items>h2');
      this.viewProductButton = page.locator('.nav-justified');
      this.ProductName = page.locator('.product-information>h2');
      this.ProductPrice = page.locator('.product-information>span>span');
      this.ProductCategory = page.locator('.product-information > p:nth-of-type(1)');
      this.womensCategory = page.locator("[href='\#Women'] .fa-plus");
      this.womensDressCategory = page.locator("div#Women  ul > li:nth-of-type(1) > a");
      this.womensDressCategoryTitle = page.locator(".text-center.title");
      this.mensCategory = page.locator("[href='\#Men'] .fa-plus");
      this.mensShirtCategory = page.locator("div#Men  ul > li:nth-of-type(1) > a");
      this.mensShirtCategoryTitle = page.locator(".text-center.title");
      this.nameField = page.locator("#name");
      this.emailField = page.locator("#email");
      this.reviewField = page.locator("#review");
      this.submitButton = page.locator("#button-review");
      this.successMessage = page.locator('#review-section div').nth(1);
      this.SearchField = page.locator('#search_product');
      this.SearchButton = page.locator('#submit_search');
      this.SearchProductText = page.locator('.features_items>h2');
      this.ProductList = page.locator('.features_items');
   }
   async goToHomePage() {
      await this.page.goto('https://automationexercise.com/');
    }
    async clickProductsPageButton() {
      await this.productsPageButton.click();
    }

    async verifyAllProductsPage(){
      // await this.page.waitForSelector('.features_items>h2');
      await expect(this.AllProductsTitle).toBeVisible();
   }

    async clickViewProductButton(productName) {
      const products = await this.productCards.all();
      for (const product of products) {
        const productText = await product.innerText();
        if (productText.includes(productName)) {
          await product.hover(); 
          const viewProductButton = await product.locator('.nav-justified');
          await viewProductButton.click();
          break;
        }
      }
    }
   async verifyProductName(){
      await expect(this.ProductName).toBeVisible();
   }
   async verifyProductPrice(){ 
      await expect(this.ProductPrice).toBeVisible();
   }
   async verifyProductCategory(){
      await expect(this.ProductCategory).toBeVisible();
   }
   async clickOnWomensCategory() {
        await this.womensCategory.click();
    }
    async clickOnWomensDressCategory() {
        await this.womensDressCategory.click();
    }
    async clickOnMensCategory() {
        await this.mensCategory.click();
    }
    async clickOnMensShirtCategory() {
        await this.mensShirtCategory.click();
    }
    async verifyWomensDressCategoryTitle() {
        await expect(this.womensDressCategoryTitle).toHaveText("Women - Dress Products")
    }
    async verifyMensShirtCategoryTitle() {
        await expect(this.mensShirtCategoryTitle).toHaveText("Men - Tshirts Products")
    }
    
    async fillReviewForm(name, email, review) {
        await this.nameField.fill(name);
        await this.emailField.fill(email);
        await this.reviewField.fill(review);
    }
    async submitReview() {
        await this.submitButton.click();
    }
    async verifySuccessMessage() {
        await this.page.waitForSelector('.alert-success');
        await expect(this.successMessage).toBeVisible();
        await expect(this.successMessage).toHaveText('Thank you for your review.');
    }

    async searchProduct(productName){
        await this.page.waitForSelector('#search_product');
        await this.SearchField.fill(productName);
        await this.SearchButton.click();
     }
     async verifySearchProductText(){
        await this.page.waitForSelector('.features_items>h2');
        await expect(this.SearchProductText).toBeVisible();
     }
     async verifyProductList(){
        await this.page.waitForSelector('.features_items');
        await expect(this.ProductList).toBeVisible();
     }
  
}
