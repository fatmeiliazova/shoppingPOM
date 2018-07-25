
browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false)

var myAccount_page = function () {
    //Navigation element
    this.navigationPane = element(by.css('.navigation_page')); 
    //Page heading
    this.heading = element(by.css('.page-heading'))
    //Verification is successfull
    this.info = element(by.css('.info-account'))
    //Personal information management links
    this.orderHistory = element(by.css('a[href*="controller=history"]'))
    this.creditSlips = element(by.css('a[href*="controller=order-slip"]'))
    this.address = element(by.css('a[href*="controller=addresses"]'))
    this.personalInfo = element(by.css('a[href*="controller=identity"]'))
    this.wishList = element(by.css('a[href*="controller=mywishlist"]'))
    


    //Verify navigation Pane 
    this.navigation = function () {
        this.navigationPane.isDisplayed()
        expect(this.navigationPane.getText()).toBe('My account')
    };
    
    //Verify Registration is successfull
    this.regisSucc = function(){
        this.heading.isDisplayed()
        expect(this.heading.getText()).toBe('My account'.toUpperCase())
        this.info.isDisplayed()
        expect(this.info.getText()).toBe('Welcome to your account. Here you can manage all of your personal information and orders.')
    }

};
module.exports = new myAccount_page();