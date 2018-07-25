//require('./../pages/search_page.js');
browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false)

var register_page = function () {
    //Personal Information input boxes
    this.firstName = element(by.id('customer_firstname'));
    this.lastName = element(by.id('customer_lastname'));
    this.password = element(by.id('passwd'))

    //Address Information input boxes
    this.address_firstname = element(by.id('firstname'))
    this.address_lastname = element(by.id('lastname'))
    this.address = element(by.id('address1'))
    this.address2 = element(by.id('address2'))
    this.city = element(by.id('city'))
    this.state = element(by.id('id_state'))
    this.postcode = element(by.id('postcode'))
    this.country = element(by.id('id_country'))
    this.additional = element(by.id('other'))
    this.phone = element(by.id('phone_mobile'))
    this.alias_address = element(by.id('alias'))

    //Register Button
    this.registerButton = element(by.id('submitAccount'))

    
    //Enter Personal Details
    this.enterPersonalDetails = function (name, surname, passwrd) {
        this.firstName.sendKeys(name);
        this.lastName.sendKeys(surname);
        this.password.sendKeys(passwrd);
    };
    //Enter Address Information
    this.enterAddressDetails = function (nam, surnam, adrss1, addrss2, cty, /*stat, */pcode, /*country,*/ addit, phon, aliaddrss) {

        this.address_firstname.clear()
        this.address_firstname.sendKeys(nam);
        this.address_lastname.clear()
        this.address_lastname.sendKeys(surnam);

        this.address.sendKeys(adrss1);
        this.address2.sendKeys(addrss2);
        this.city.sendKeys(cty);
        /*
        // State selection
        this.stateDropdown = function (stat) {
            this.dropdown.element(By.cssContainingText('option', stat)).click();
        };
        */
        this.postcode.sendKeys(pcode);
        // Country selection
        /*
        this.countryDropdown = function (country) {
            this.dropdown.element(By.cssContainingText('option', country)).click();
        };
        */
        this.additional.sendKeys(addit);
        this.phone.sendKeys(phon);
        this.alias_address.clear()
        this.alias_address.sendKeys(aliaddrss);
    };

    this.stateDropdown = function(stat){
        this.state.click()
        this.state.element(By.cssContainingText('option', stat)).click();
    };

    this.countryDropdown = function(couty){    
        this.country.click()
        this.country.element(By.cssContainingText('option', couty)).click();
    };
  
    this.register = function () {
        this.registerButton.isDisplayed()
        this.registerButton.click()
    };

    

};
module.exports = new register_page();