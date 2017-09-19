import { ChitChatPage } from './app.po';

describe('chit-chat App', () => {
  let page: ChitChatPage;

  beforeEach(() => {
    page = new ChitChatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
