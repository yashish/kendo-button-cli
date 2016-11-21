import { KendoButtonCliPage } from './app.po';

describe('kendo-button-cli App', function() {
  let page: KendoButtonCliPage;

  beforeEach(() => {
    page = new KendoButtonCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
