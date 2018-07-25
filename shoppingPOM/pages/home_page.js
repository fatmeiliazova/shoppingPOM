
browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false)

require('./../pages/search_page.js');
require('./../pages/quickView_popup.js');
require('./../pages/product_page.js');
 
var home_page = function() {
    //Search elements
    this.searchBox = element(by.id('search_query_top'));
    this.searchButton = element(by.css('#searchbox > button'));
    //Sign In link
    this.signin = element(by.css('a[href*="controller=my-account"]'))
    //Product images (for hovering)
    this.product_list = element.all(by.className('replace-2x img-responsive'))
    this.quickView = element(by.className('quick-view'))
    this.moreButton = element(by.linkText('More'));
    
    //Product elements
    this.product = element(by.css('.product-image-container'))


 
     //Enter product in search box
    this.enterProduct = function(name) {
        this.searchBox.isDisplayed()
        this.searchBox.sendKeys(name);
    };
    
     //Click on search
    this.search = function() {
       this.searchButton.isDisplayed()
        this.searchButton.click();
        return require('./../pages/search_page.js');  
    };
    //Check content exists
    this.checkContentExists = function(){
       if(this.product_list.count()>0){
        this.product_list.count().then(function(c) {
            console.log(c);
            console.log('check count')
            
          });
        }   
    }
     this.clickViewOnFirstProduct = function() {
        browser.actions().mouseMove(this.product_list.get(0)).perform();
        browser.sleep(3000)
        this.quickView.isDisplayed();
        browser.sleep(3000)
        browser.actions().mouseMove(this.quickView).click().perform();
        browser.sleep(5000)
        return require('./../pages/quickView_popup.js'); 
        /*
        var driver = browser.driver;
    var loc = by.tagName('iframe');
    var el = driver.findElement(loc);
    browser.switchTo().frame(el);
    */
   
     };

     this.switchToiFrame = function(){
       // var driver = ptor.driver;
   //debugger
//ptor.switchTo().frame(driver.findElement(protractor.By.tagName('iframe')));

var driver = browser.driver;
var loc = by.tagName('iframe');
var el = driver.findElement(loc);
debugger
browser.switchTo().frame(el);

console.log('in iFrame')

     }

     this.clickOnFirstProductMoreButton = function(){
        browser.actions().mouseMove(this.product_list.get(0)).perform();
        browser.sleep(3000)
        this.moreButton.click();
        return require('./../pages/product_page.js'); 

     }
};
module.exports = new home_page();