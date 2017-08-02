import { AngularCordovaPage } from './app.po';

describe('angular-cordova App', () => {
  let page: AngularCordovaPage;

  beforeEach(() => {
    page = new AngularCordovaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
