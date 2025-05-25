exports.TagsInputBoxPage = class TagsInputBoxPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.title = page.locator('text="Tags"');
    this.tags = page.locator('.content >> li');
    this.input = page.locator('input[type="text"]');
  }

  async goto() {
    await this.page.goto('https://qaplayground.dev/apps/tags-input-box/');
  }

  async tagExists(tagName) {
    await this.page.locator(`text=${tagName}`)
  }

  async addTag(tagName) {
    await this.input.fill(tagName);
    await this.input.press('Enter');
  }

  async deleteTagByIndex(index) {
    await this.tags.nth(index).locator('i').click();
  }

  async deleteLastTag() {
    await this.tags.last().locator('i').click();
  }

  async deleteFirstTag() {
    await this.tags.first().locator('i').click();
  }

  async tagCount() {
    return await this.tags.count();
  }
};