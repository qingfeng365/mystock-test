import { MystockTestPage } from './app.po';

describe('mystock-test App', () => {
  let page: MystockTestPage;

  beforeEach(() => {
    page = new MystockTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
