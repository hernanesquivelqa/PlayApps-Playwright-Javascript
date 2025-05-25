import { test, expect } from '@playwright/test';
import { TagsInputBoxPage } from '../../pages/tags-input-box/tagsInputBoxPage.js';

test.describe('Test tags-inputs-box', () => {
  /** @type {TagsInputBoxPage} */
  let tagsPage;

  test.beforeEach(async ({ page }) => {
    tagsPage = new TagsInputBoxPage(page);
    await tagsPage.goto();
  });

  test('TC1: Verify the existence of the tag called node and javascript.', async () => {
    await expect(tagsPage.title).toBeVisible();
    await tagsPage.tagExists('node');
    await tagsPage.tagExists('javascript');
  });

  test('TC2: Remove the tags called node and javascript.', async () => {
    await tagsPage.deleteLastTag();
    await tagsPage.deleteFirstTag();
    await expect(tagsPage.tags).toHaveCount(0);
  });

  test('TC3: Add a new tag and delete it afterward', async () => {
    await tagsPage.addTag('new tag');
    await tagsPage.tagExists('new tag');
    await tagsPage.deleteLastTag();
    await expect(tagsPage.page.locator('text=new tag')).not.toBeVisible();
  });

  test('TC4: Adds maximum tags (10) with node and javascript pre-existing', async () => {
    const extraTags = ['playwright', 'cypress', 'python', 'selenium', 'git', 'sql', 'postman', 'java'];
    for (const tag of extraTags) {
      await tagsPage.addTag(tag);
    }
    await tagsPage.tagExists('java');
    expect(await tagsPage.tagCount()).toBe(10);
  });
});
