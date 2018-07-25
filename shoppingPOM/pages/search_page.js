
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

    //Compare button of product
    this.addCompareButton = element(by.linkText('Add to Compare'))
    //Compare button that compares 2 or more objects
    this.compareButton = element(by.className('compare-form'));
    //Total value of products that are going to be compared
    this.compareValues = element(by.className('total-compare-val'))





    this.verifySearch = function () {
        this.heading.isDisplayed();
        expect(this.heading.getText()).toContain('SEARCH  "' + browser.params.product.existingprod.toUpperCase())
    }

    this.sortProducts = function (typeName) {
        this.dropdown.element(By.cssContainingText('option', typeName)).click();
    };

    this.addtoCompare = function (item) {
        browser.actions().mouseMove(this.product.get(item)).perform();
        browser.sleep(5000)
        browser.actions().mouseMove(this.addCompareButton).click().perform();
        browser.sleep(5000)

    }

    this.compareFunc = function () {
        this.compareValues.getText().then((txt) => {
            console.log(txt)
            if (txt >1 && txt < 4){
                console.log('click on it')
                this.compareButton.click()
                browser.sleep(3000)

            }
        })
        
    }

};
module.exports = new search_page();