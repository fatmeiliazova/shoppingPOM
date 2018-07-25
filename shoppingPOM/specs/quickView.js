
browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false);

var home_page = require('./../pages/home_page.js');
var search_page = require('./../pages/signin_page.js');
var register_page = require('./../pages/register_page.js');
var signin_page = require('./../pages/signin_page.js');

var quickView_popup = require('./../pages/quickView_popup.js');
 
describe('Testing quick view with POM', function() {
    beforeAll(function() {
        browser.get(browser.params.url.baseurl);
        
    });
     
    
    it ('should check if any product exist or not', function() {     
        home_page.checkContentExists()
        browser.sleep(3000)
      
    });
    it ('should hover first product and click on Quick View', function() {     
        home_page.clickViewOnFirstProduct()
        browser.sleep(3000)
      
    });
    it ('should switch to iFrame', function() {     
        home_page.switchToiFrame()
        browser.sleep(3000)
      
    });

    
    it ('should add the product to Chart', function() {     
        quickView_popup.addProduct()
        browser.sleep(3000)
      
    });

});