export class ValidationPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = 'https://testpages.eviltester.com/styled/apps/7charval/simple7charvalidation.html';
    this.inputField = page.locator("input[name='characters']");
    this.validateButton = page.locator("input[name='validate']");
    this.messageField = page.locator("input[name='validation_message']");
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async enterValue(value) {
    await this.inputField.fill(value);
  }

  async clickValidate() {
    await this.validateButton.click();
  }

  async getValidationMessage() {
    return this.messageField.inputValue();
  }
}