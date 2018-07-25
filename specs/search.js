browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false)

var home_page = require('./../pages/home_page.js');
var search_page = require('./../pages/search_page.js');
 
describe('Testing product searching with POM', function() {
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
    

    it ('should sort the items', function() {
        search_page.sortProducts(browser.params.dropdown.price_asc)
        browser.sleep(3000)

    });
    
    
});