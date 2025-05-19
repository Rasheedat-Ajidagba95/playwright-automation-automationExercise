const { expect } = require('@playwright/test');

exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.productsPageButton = page.locator("a[href='/products']");
    this.productCards = page.locator('.features_items .product-image-wrapper');

    this.viewProductButton = page.locator('.features_items .product-image-wrapper .choose a').first();

    // this.viewProductButton = page.locator (".nav-justified");
    this.productDetails = page.locator('.product-details');
    this.AddToCartButton = page.locator(".productinfo>.btn");
    this.productQuantity = page.locator('#quantity');
    this.cartProductQuantity = page.locator('.disabled');
    this.addProductButton = page.locator("button[type='button']")
    this.continueShoppingButton = page.locator(".btn.btn-success.close-modal.btn-block");
    this.viewCartLink = page.locator(".text-center>a>u");
    this.ProductListInCart = page.locator("#cart_info");
    this.deleteItem = page.locator(".cart_quantity_delete>i");
    this.cartEmptyMessage = page.locator("#empty_cart");
    }

    async goToHomePage() {
      await this.page.goto('https://automationexercise.com/');
    }
    async clickProductsPageButton() {
      await this.productsPageButton.click();
    }

    async goTOProductDetailsPage() {
        await this.viewProductButton.click();
    }
  
    async verifyProductDetails() {
        await expect(this.productDetails).toBeVisible();
    }

    async addProductToCart(productName) {
      const products = await this.productCards.all();
      for (const product of products) {
        const productText = await product.innerText();
        if (productText.includes(productName)) {
          await product.hover(); 
          const addToCartButton = await product.locator('.overlay-content .btn.add-to-cart');
          await addToCartButton.click();
          break;
        }
      }
    }
    async continueShopping() {
      await this.continueShoppingButton.click();
    }
    
    async viewCart() {
      await this.viewCartLink.click();
    }

    async verifyProductInfoInCart(productName, productPrice) {
        const cartProducts = await this.ProductListInCart.all();
        for (const product of cartProducts) {
          const productText = await product.innerText();
          if (productText.includes(productName) && productText.includes(productPrice)) {
            await expect(product).toBeVisible();
            break;
          }
        }
    }
     
    async deleteProductInCart() {
        await this.deleteItem.click();
    }
    async verifyCartEmptyMessage() {
        await expect(this.cartEmptyMessage).toBeVisible();
    }

    
    async addProductQtyToCart() {
        await this.productQuantity.fill('2');
        await this.addProductButton.click();
        await this.viewCartLink.click();
    }

    async verifyProductQuantityInCart() {
        const quantity = await this.cartProductQuantity.innerText();
        expect(quantity).toBe('2');
    }  
  }

     
