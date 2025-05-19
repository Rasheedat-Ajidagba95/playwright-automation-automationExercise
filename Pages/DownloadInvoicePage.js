const { expect } = require('@playwright/test');
exports.DownloadInvoicePage =  class DownloadInvoicePage{

    constructor(page) {
        this.page = page;
        this.downloadInvoiceButton = page.locator('.btn.btn-default.check_out');
        this.invoiceDownloadLink = page.locator('a[href*="download_invoice"]');
    }
    async clickDownloadInvoiceButton() {
        await this.downloadInvoiceButton.click();
    }

}
