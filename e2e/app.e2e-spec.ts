import { AAssignment61Page } from './app.po';

describe('a-assignment61 App', function() {
  let page: AAssignment61Page;

  beforeEach(() => {
    page = new AAssignment61Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
