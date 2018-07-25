
browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false);

var home_page = require('./../pages/home_page.js');
var signin_page = require('./../pages/signin_page.js');
var register_page = require('./../pages/register_page.js');
var product_page = require('./../pages/product_page.js');
var product_page = require('./../pages/product_page.js');
var myAccount_page = require('./../pages/myAccount_page.js');

//var signIn = require('./../specs/signIn.js');
 
describe('Testing quick view with POM', function() {
    beforeAll(function() {
        browser.get(browser.params.url.baseurl);
        
    });
     
    
    it ('should check if any product exist or not', function() {     
        home_page.checkContentExists()
        browser.sleep(3000)
      
    });
    it ('should click on first product and product details page should be opened', function() {     
        home_page.clickOnFirstProductMoreButton()
        browser.sleep(3000)
      
    });
    
    it ('should view thumbnails', function() {     
        product_page.viewThumbnails()
        browser.sleep(3000)
      
    });
    
    it ('should change Quantity, size,color and add to Chart', function() { 
        product_page.quantityText.clear();    
        product_page.quantityText.sendKeys(2);
        browser.sleep(3000)
        product_page.minusButton.click()
        browser.sleep(3000)
        product_page.sizeDropdown(browser.params.size_dropdown.m)
        browser.sleep(3000)
        product_page.blueColor.click();
        browser.sleep(3000)
        product_page.addButton.click()
        browser.sleep(3000)
        product_page.checkoutButton.click()
        browser.sleep(5000)
        product_page.proceedCheckoutButton.click()
        browser.sleep(5000)
       
      
    });  

    it ('should sign In operation', function() {     
        signin_page.signInFunc()   
        browser.sleep(3000)
       
      
    });
    it ('should proceed ', function() {     
        product_page.signInproceedCheckoutButton.click()
        browser.sleep(3000)
        product_page.tcCheckbox.click()
        browser.sleep(3000)
        product_page.signInproceedCheckoutButton.click()
        browser.sleep(3000)
        product_page.bankWireButton.click()
        browser.sleep(3000)
        product_page.confirmOrderButton.click()
        browser.sleep(3000)
        
       
      
    });
});