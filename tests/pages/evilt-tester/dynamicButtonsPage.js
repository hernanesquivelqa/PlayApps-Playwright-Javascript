export class DynamicButtonsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.button00 = page.locator("#button00");
    this.button01 = page.locator("#button01");
    this.button02 = page.locator("#button02");
    this.button03 = page.locator("#button03");
    this.message = page.locator("#buttonmessage");
  }

  async navigate() {
    await this.page.goto("https://testpages.eviltester.com/styled/dynamic-buttons-disabled.html");
  }

  async clickButtonsInOrder() {
    await this.button00.click();
    await this.button01.click();
    await this.button02.click();
    await this.button03.click();
  }

  async getMessageText() {
    return await this.message.textContent();
  }
}