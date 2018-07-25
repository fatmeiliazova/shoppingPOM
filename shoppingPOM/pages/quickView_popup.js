
browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false)



 
var quickView_popup = function() {
    this.popup = element(by.className('primary_block row'))
    //Item info
    this.itemName = element(by.css('.pb-center-column > h1:nth-child(1)'))
    this.model = element(by.id('product_reference'))
    this.condition = element(by.id('product_condition'))
    this.description = element(by.id('short_description_block'))
    //Thumb image list
    //this.thumbsImageList = element.all(by.id('thumbs_list_frame'))
    this.thumb1 = element(by.id('thumbnail_1'))
    this.thumb2 = element(by.id('thumbnail_2'))
    this.thumb3 = element(by.id('thumbnail_3'))
    this.thumb4 = element(by.id('thumbnail_4'))

    //Product box info
    this.price = element(by.id('our_price_display'))
    this.quantityText = element(by.id('quantity_wanted'))
    this.minusButton = element(by.className('icon-minus'))
    this.plusButton = element(by.className('icon-plus'))
    this.sizeDropdown = element(by.id('uniform-group_1'))
    this.colorList = element(by.className('attribute_list'))
    this.addButton = element(by.linkText('Add to cart'))
    this.whishListButton = element(by.id('wishlist_button'))
    this.closeButton = element(by.className('fancybox-item fancybox-close'))

    //Social media links
    this.twitter = element(by.cssContainingText('.icon-twitter'))//element(by.className('icon-twitter'))
    this.facebook = element(by.className('icon-facebook'))
    this.gplus = element(by.className('icon-google-plus'))
    this.pinterest = element(by.className('icon-pinterest'))
    //Switch to iframe
    

    this.addProduct = function() {
        console.log('Yap')
        //debugger
        //this.quantityText.sendKeys(3);
        this.addButton.click()

    };
       
};
module.exports = new quickView_popup();