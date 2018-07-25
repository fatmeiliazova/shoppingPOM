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
 
 
describe('Testing sign in operation with POM', function() {
    beforeAll(function() {
       browser.get(browser.params.url.baseurl);
        //You can start your case directly from sign-in url. In this case, you should make 'should click on Sign in and verify the page' step as comment
       // browser.get(browser.params.url.signin_url);
        
    });
     
    //If you are statrtting this case from signin_url, please comment this step
    it ('should click on Sign in and verify the page', function() {      
       home_page.signin.click()
       signin_page.navigationVerification();
       browser.sleep(3000)
    });

    it ('should send details for user sign in operation', function() {      
        signin_page.signInFunc()   
        browser.sleep(3000)
     });

     it('verify the user is signed in successfully',function(){
        myAccount_page.navigation();
        myAccount_page.regisSucc();
        browser.sleep(3000)
    }) 
});