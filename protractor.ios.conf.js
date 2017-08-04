// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  // Appium Server URL
  seleniumAddress: 'http://127.0.0.1:4723/wd/hub',

  // Base URL
  baseUrl: '',

  // Capabilities
  capabilities: {
    // Browser Name : Must be empty
    browserName: '',
    // Auto WebView : For Hybrid App
    autoWebview: true,

    // App
    app: './platforms/ios/build/emulator/angular-cordova.app',
    // Bundle ID
    bundleId: 'com.example.angular.cordova',

    // Device Name : For iOS Sim
    deviceName: 'iPhone 7',
    // UDID : For iOS Device
    // udid: '',
    // Platform Name
    platformName: 'iOS',
    // Platform Version
    platformVersion: '10.3',

    // Full Reset : For iOS Sim
    fullReset: false,
    // Auto WebView Timeout
    autoWebviewTimeout: 20000,
    // Auto Accept Alerts
    autoAcceptAlerts: true
  },

  onPrepare: () => {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });

    // Jasmine Reporter
    const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true,
        displayPending: false
      },
      summary: {
        displayPending: false
      }
    }));

    // Implicitly Wait
    browser.manage().timeouts().implicitlyWait(20000);

    // Wait For Click
    browser.ignoreSynchronization = true;

    // Wd (Web Driver) Wd Bridge
    const wd = require('wd');
    const protractor = require('protractor');
    const wdBridge = require('wd-bridge')(protractor, wd);
    wdBridge.initFromProtractor(exports.config);

    // To Navigate Using file:// Rather Than http://
    const defer = protractor.promise.defer();
    browser.executeScript('return window.location;')
      .then((location) => {
        browser.resetUrl = 'file://'
        browser.baseUrl = location.origin + location.pathname;
        defer.fulfill();
      });
    return defer.promise;
  },

  //  Specs
  specs: ['./e2e/**/*.e2e-spec.ts'],

  // For Jasmine Node
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 500000,
    includeStackTrace: true,
    isVerbose: true,
    print: () => { }
  }
};
