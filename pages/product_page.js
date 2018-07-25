
browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false)

require('./../pages/search_page.js');
require('./../pages/quickView_popup.js');
 
var product_page = function() {
   
    //Item info
    this.itemName = element(by.css('h1'))
    this.model = element(by.id('product_reference'))
    this.condition = element(by.id('product_condition'))
    this.description = element(by.id('short_description_block'))
    //Thumb image list
    //this.thumbsImageList = element.all(by.id('thumbs_list_frame'))
    this.thumb1 = element(by.id('thumb_1'))
    this.thumb2 = element(by.id('thumb_2'))
    this.thumb3 = element(by.id('thumb_3'))
    this.thumb4 = element(by.id('thumb_4'))

    //Product box info
    this.price = element(by.id('our_price_display'))
    this.quantityText = element(by.id('quantity_wanted'))
    this.minusButton = element(by.className('icon-minus'))
    this.plusButton = element(by.className('icon-plus'))
    //this.sizeDropdown = element(by.className('attribute_list'))
    //this.colorList = element(by.className('attribute_list'))
    this.addButton = element(by.id('add_to_cart'))
    this.whishListButton = element(by.id('wishlist_button'))
    this.orangeColor = element(by.id('color_13'))
    this.blueColor = element(by.id('color_14'))

    //Social media links
    this.twitter = element(by.cssContainingText('.icon-twitter'))//element(by.className('icon-twitter'))
    this.facebook = element(by.className('icon-facebook'))
    this.gplus = element(by.className('icon-google-plus'))
    this.pinterest = element(by.className('icon-pinterest'))
    //Popup items
    this.checkoutButton = element(by.linkText('Proceed to checkout'))
    this.proceedCheckoutButton = element(by.linkText('Proceed to checkout'))
    this.signInproceedCheckoutButton = element(by.buttonText('Proceed to checkout'))
    this.tcCheckbox = element(by.id('uniform-cgv'))
    this.bankWireButton = element(by.className('bankwire'))
    this.confirmOrderButton = element(by.buttonText('I confirm my order'))

    this.viewThumbnails = function() {
        browser.actions().mouseMove(this.thumb1).perform();
        browser.sleep(2000)
        browser.actions().mouseMove(this.thumb2).perform();
        browser.sleep(2000)
        browser.actions().mouseMove(this.thumb3).perform();
        browser.sleep(2000)
        browser.actions().mouseMove(this.thumb4).perform();
        browser.sleep(2000)
    };

    
    this.sizeDropdown = function(size){    
        element(By.cssContainingText('option', size)).click();
    };
       
};
module.exports = new product_page();