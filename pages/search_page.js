
browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false)

var search_page = function () {
    //compare button element
    this.compare = element(by.css('compare-form'))
    //heading elements in order to verify searched product
    this.heading = element(by.id('center_column'))
    this.item = element(by.model('page-heading.product-listing'))
    //dropdown elements
    this.dropdown = element(by.id('selectProductSort'))
    this.dropdown_options = element(by.tagName('option'));
   //Product elements
   this.product = element.all(by.className('product-container')) 

    //Compare button
    this.addCompareButton = element(by.className('add_to_compare'))



    this.verifySearch = function () {
        this.heading.isDisplayed();
        expect(this.heading.getText()).toContain('SEARCH  "' + browser.params.product.existingprod.toUpperCase())
    }
    
    this.sortProducts = function (typeName) {
        this.dropdown.element(By.cssContainingText('option', typeName)).click();
    };

    this.addtoCompare = function () {
        browser.actions().mouseMove(this.product.get(1)).perform();
        this.addCompareButton.click()
        
    }

};
module.exports = new search_page();