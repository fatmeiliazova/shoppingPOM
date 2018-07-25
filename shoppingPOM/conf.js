var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

  //Protractor runs on 4444 port
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //Appium runs on 4723
  //seleniumAddress: 'http://localhost:4723/wd/hub',
  specs: ['./specs/*.js'],
  /*suites: {
    basic: './tests/e2e/basic/*.js',
        
  
  },*/



  multiCapabilities: [{
    browserName: 'chrome'
  }],
  //{ browserName: 'firefox' }],
  framework: 'jasmine',
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,   // Use colors in the command line report.  
    defaultTimeoutInterval: 30000   // Default time to wait in ms before a test fails.
  },
  //Jasmine reporter configurations
  onPrepare: function() {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'reports/',
        screenshotsFolder: 'screenshots',
        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: true,
        showPassed: false,
        fixedScreenshotName: true,
        fileNamePrefix: 'POM',
        cleanDestination: true,
        fileName: 'Report',
        fileNameSeparator: '_',
        fileNameDateSuffix: true
      })
    );
 },
  /*
  //Here mobile web automation capabilities defined
        
  'appium-version': '1.8.0',
  'platformName': 'iOS',
  'platformVersion': '10.2',
  'deviceName': 'iPhone test',
  'newCommandTimeout':'120',
  'showXcodeLog':'True',
  'orientation': 'PORTRAIT',
  'udid': '490f2a6ea638ddeb02d6d6e5c2b292dc3d794b54',
  'updatedWDABundleId': 'io.gomedia.WebDriverAgentRunner',
  'bundleId': 'io.gomedia.WebDriverAgentRunner',
  'updatedWDABundleId':'io.appium.WebDriverAgentRunner',
  'automationName':'XCUITest',
  // ---Mobile web automation capabilities ended
  
  'chromeOptions': {
    // Get rid of --ignore-certificate yellow warning
    args: ['--no-sandbox', '--test-type=browser'],
    // Set download path and avoid prompting for download even though
    // this is already the default on Chrome but for completeness
    prefs: {
      'download': {
        'prompt_for_download': false,
        'default_directory': '/Users/amna/Desktop/downloads/',
      }
    }
  },
  
},
*/
  params: {
    url: {
      baseurl: 'http://automationpractice.com/',
      signinurl: 'http://automationpractice.com/index.php?controller=authentication&back=my-account'
    },
    product: {
      existingprod: 'dress',
      nonexistingprod: 'red dress'
    },
    dropdown: {
      price_asc: 'Price: Lowest first',
      price_desc: 'Price: Highest first',
      name_asc: 'Product Name: A to Z',
      name_desc: 'Product Name: Z to A',
      quantity: 'In stock',
      reference_asc: 'Reference: Lowest first',
      reference_desc: 'Reference: Highest first'

    },
    user: {
      email: 'fatme.iliazova@gomedia.io',
      password: 'SuperSecretPassword!',
    },
    register_user: {
      firstName: 'Fatme',
      lastName: 'Iliazova',
      email: 'fatme.iliazova@gomedia.io',
      password: 'SuperSecretPassword!',
      address_firstname: 'Fatme',
      address_lastname: 'Iliazova',
      address1: '203 Popes Lane',
      address2: '',
      city: 'London',
      
      postcode: '12345',

      additional: '',
      phone: '07878182497',
      alias_address: 'Alias Address'
    },
    state_dropdown: {
      a: '-',
      b: 'Alabama',
      c: 'Alaska',
      d: 'Arizona'
    },
    country_dropdown: {
      a: '-',
      b: 'United States'
    },
    size_dropdown: {
      s: 'S',
      m: 'M',
      l: 'L'
    }
  }
}



