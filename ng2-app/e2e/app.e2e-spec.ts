import { Ng2AppPage } from './app.po';

describe('ng2-app App', function() {
  let page: Ng2AppPage;

  beforeEach(() => {
    page = new Ng2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
