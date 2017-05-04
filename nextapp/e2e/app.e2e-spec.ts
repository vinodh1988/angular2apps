import { NextappPage } from './app.po';

describe('nextapp App', () => {
  let page: NextappPage;

  beforeEach(() => {
    page = new NextappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
