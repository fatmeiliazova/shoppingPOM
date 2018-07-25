
browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false)

var  productComparison_page = function () {
    //navigation pane
    this.navigationPane = element(by.css('.navigation_page')); 
    //Product price
    this.price = element(by.className('prices-container'))


    this.navigationVerification = function () {
        this.navigationPane.isDisplayed()
        expect(this.navigationPane.getText()).toBe('Product Comparison')
    };

    this.highPricedProduct = function (item) {
        for(var i = 0; i < this.price.count()-1; i++)
        this.price.getText().then((money) => {
            console.log(item + '. price is ' + money)

            Math.max(item);
        
            if ( ){
                console.log('click on it')
                this.compareButton.click()
                browser.sleep(3000)

            }
        })


    }
}
module.exports = new productComparison_page();