browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false)

var home_page = require('./../pages/home_page.js');
var search_page = require('./../pages/signin_page.js');
var register_page = require('./../pages/register_page.js');
var signin_page = require('./../pages/signin_page.js');
var myAccount_page = require('./../pages/myAccount_page.js');

//Making aliases for parameters that are going to be used for user registration
  var ruser = browser.params.register_user
  var param = browser.params
 
 
describe('Testing product searching with POM', function() {
    beforeAll(function() {
        browser.get(browser.params.url.baseurl);
        //You can start your case directly from sign-in url. In this case, you should make 'should click on Sign in and verify the page' step as comment
       // browser.get(browser.params.url.signin_url);
        
    });
     
    //If you are statrtting this case from signin_url, please comment this step
    it ('should click on Sign in and verify the page', function() {      
       home_page.signin.click()
       signin_page.navigation();
       browser.sleep(3000)
    });

    it ('should send details for user registration', function() {      
        signin_page.registerFunc()   
        browser.sleep(3000)
     });
    
 

    it ('should register the user and verify', function() {
        register_page.enterPersonalDetails(ruser.firstName, ruser.lastName, ruser.password);
        browser.sleep(3000)
        register_page.enterAddressDetails(ruser.address_firstname, ruser.address_lastname, ruser.address1, ruser.address2, ruser.city, /*params.state_dropdown.b,*/
            ruser.postcode, /*params.country_dropdown.a, */ruser.additional, ruser.phone, ruser.alias_address);
        browser.sleep(3000)
        register_page.countryDropdown(param.country_dropdown.b)
        browser.sleep(3000)
        register_page.stateDropdown(param.state_dropdown.b)
        browser.sleep(3000)
        register_page.register()
        browser.sleep(3000)

    });

    it('verify the user is registered successfully',function(){
        myAccount_page.navigation();
        myAccount_page.regisSucc();
        browser.sleep(3000)
    })
});