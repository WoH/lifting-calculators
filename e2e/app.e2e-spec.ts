import { OneRmCalcPage } from './app.po';

describe('one-rm-calc App', () => {
  let page: OneRmCalcPage;

  beforeEach(() => {
    page = new OneRmCalcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
