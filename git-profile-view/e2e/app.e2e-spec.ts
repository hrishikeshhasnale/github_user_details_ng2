import { GitProfileViewPage } from './app.po';

describe('git-profile-view App', function() {
  let page: GitProfileViewPage;

  beforeEach(() => {
    page = new GitProfileViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
