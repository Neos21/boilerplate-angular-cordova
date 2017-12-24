# AngularCordova

Angular4 + Cordova (iOS) Boilerplate Project.

[Japanese version here](./README.ja.md).


## How to Use

### Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build and Run on iOS Simulator

Run `npm run emu` to build the project and run on iOS Simulator. The build artifacts will be stored in the `www/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). Before running the tests make sure you are serving the app via `npm start`.

### Running end-to-end tests on iOS Simulator

Run `npm run e2e-ios-appium`. and `npm run e2e-ios-exec` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/) and [Appium](http://appium.io/).


## How It's Made

```sh
# Create Angular Boilerplate
$ ng new angular-cordova --skip-git --skip-commit --style scss --routing

# Create Cordova Boilerplate
$ cordova new angular-cordova-boilerplate com.example.angular.cordova angular-cordova

# Merge files...

# Install Cordova
$ npm install --save cordova
$ npm run cordova platform add ios
$ npm run cordova plugin add cordova-plugin-console
$ npm run cordova plugin add cordova-plugin-statusbar

# Install Appium
$ npm install --save-dev appium wd wd-bridge 
```


## Author

[Neo](http://neo.s21.xrea.com/) ([@Neos21](https://twitter.com/neos21))


## Links

- [Neo's World](http://neo.s21.xrea.com/)
- [Corredor](http://neos21.hatenablog.com/)
- [Murga](http://neos21.hatenablog.jp/)
- [El Mylar](http://neos21.hateblo.jp/)
- [Bit-Archer](http://bit-archer.hatenablog.com/)
- [GitHub - Neos21GitHub](https://github.com/Neos21GitHub/)
