//require('./../pages/search_page.js');
browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false)

var signin_page = function () {

    this.navigationPane = element(by.css('.navigation_page')); 
    //Account Create elemnts
    this.createTextbox = element(by.id('email_create'))
    this.createButton = element(by.id('SubmitCreate'))
    //Sign In elements
    this.email = element(by.id('email'))
    this.password = element(by.id('passwd'))
    this.forgotPasswordLink = element(by.css('a[href*="controller=password"]'))
    this.signInButton = element(by.id('SubmitLogin'))


    this.navigationVerification = function () {
        this.navigationPane.isDisplayed()
        expect(this.navigationPane.getText()).toBe('Authentication')
    };



    this.registerFunc = function () {
        this.createTextbox.isDisplayed();
        this.createTextbox.sendKeys(browser.params.register_user.email)

        this.createButton.isDisplayed();
        this.createButton.click()
        return require('./../pages/register_page.js');
    };

    this.signInFunc = function(){
        this.email.isDisplayed();
        this.email.sendKeys(browser.params.user.email);

        this.password.isDisplayed();
        this.password.sendKeys(browser.params.user.password);

        this.signInButton.isDisplayed();
        this.signInButton.click()
    }




};
module.exports = new signin_page();