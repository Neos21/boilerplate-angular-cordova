# AngularCordova

Angular4 + Cordova (iOS) プロジェクトの雛形。

[English version here](./README.md).


## 使い方

### 開発サーバ

`npm start` で開発用の簡易サーバが起動する。`http://localhost:4200/` が開くのでライブリロードが可能になる。

### ビルド・iOS シミュレータの起動

`npm run emu` で Angular のビルド後、Cordova ビルドを行い iOS シミュレータを起動する。生成物は `www/` ディレクトリに格納される。`-prod` オプションを付けると本番用ビルドになる。

### ユニットテスト

`npm test` で [Karma](https://karma-runner.github.io) を使用したユニットテストが実行できる。

### E2E テスト

`npm run e2e` で [Protractor](http://www.protractortest.org/) を使用した E2E テストが実行できる。

### iOS シミュレータ上で E2E テストを行う

2つのターミナルを使用し、`npm run e2e-ios-appium` と `npm run e2e-ios-exec` を実行する。すると [Protractor](http://www.protractortest.org/) と [Appium](http://appium.io/) を併用して iOS シミュレータ上で E2E テストが実行できる。


## 本プロジェクトの作り方

```sh
# Angular-CLI で Angular プロジェクトの雛形を作る
$ ng new angular-cordova --skip-git --skip-commit --style scss --routing

# Cordova CLI で Cordova プロジェクトの雛形を作る
$ cordova new angular-cordova-boilerplate com.example.angular.cordova angular-cordova

# 両方の雛形のファイルをマージする...

# Cordova をローカルインストールしプラットフォームとプラグインを追加する
$ npm install --save cordova
$ npm run cordova platform add ios
$ npm run cordova plugin add cordova-plugin-console
$ npm run cordova plugin add cordova-plugin-statusbar

# Appium をインストールする
$ npm install --save-dev appium wd wd-bridge
```


## Author

[Neo](http://neo.s21.xrea.com/) ([@Neos21](https://twitter.com/Neos21))


## Links

- [Neo's World](http://neo.s21.xrea.com/)
- [Corredor](http://neos21.hatenablog.com/)
- [Murga](http://neos21.hatenablog.jp/)
- [El Mylar](http://neos21.hateblo.jp/)
- [Neo's GitHub Pages](https://neos21.github.io/)
- [GitHub - Neos21](https://github.com/Neos21/)
