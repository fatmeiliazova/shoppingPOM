browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false)

var home_page = require('./../pages/home_page.js');
var search_page = require('./../pages/search_page.js');
var productComparison_page = require('./../pages/productComparison_page.js');
 
fdescribe('Testing product searching with POM', function() {
    beforeAll(function() {
        browser.get(browser.params.url.baseurl);
        
    });
     
    
    it ('should be able enter a product and click on search button', function() {
        
        home_page.enterProduct(browser.params.product.existingprod)
        browser.sleep(3000)
        home_page.search();
       browser.sleep(3000)
    });

    it ('should verify the existing searched item', function() {
        search_page.verifySearch()
        browser.sleep(3000)

    });
    

    it ('should select 2 product to compare', function() {
       search_page.addtoCompare(0);
       browser.sleep(3000)
       search_page.addtoCompare(1);
       browser.sleep(3000)
    });
    it ('should compare selected products', function() {
        search_page.compareFunc()
        browser.sleep(3000)
        require('./../pages/productComparison_page.js');
        productComparison_page.navigationVerification()

    });
    it ('delete high priced product', function() {
        search_page.compareFunc()
        browser.sleep(3000)
        require('./../pages/productComparison_page.js');
        productComparison_page.navigationVerification()

    });

    
});