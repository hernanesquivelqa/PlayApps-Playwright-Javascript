import { test, expect } from '@playwright/test';

test.describe('Test tags-inputs-box', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://qaplayground.dev/apps/tags-input-box/');
  });

  test('TC1: Verify the existence of the tag called node and javascript.', async ({
    page,
  }) => {
    await expect(page.locator('text="Tags"')).toBeVisible();
    await expect(page.locator('text=node')).toBeVisible();
    await expect(page.locator('text=javascript')).toBeVisible();
  });

  test('TC2: Remove the tags called node and javascript.', async ({
    page,
  }) => {
    const tags = page.locator('.content >> li');
    // let countTags = await tags.count();
    await tags.last().locator('i').click();
    await tags.first().locator('i').click();
    await expect(tags).toHaveCount(0);
  });

  test('TC3: Add a new tag and delete it afterward', async ({ page }) => {
    const input = page.locator('input[type="text"]');
    await input.fill('new tag');
    await input.press('Enter');
    await expect(page.locator('text=new tag')).toBeVisible();
    const lastTag = page.locator('.content >> li').last();
    await lastTag.locator('i').click();
    await expect(page.locator('text=new tag')).not.toBeVisible();
  });
  test('TC4: Adds maximum tags (10) with node and javascript pre-existing', async ({
    page,
  }) => {
    const input = page.locator('input[type="text"]');
    let newTags = [
      'playwright',
      'cypress',
      'python',
      'selenium',
      'git',
      'sql',
      'postman',
      'java',
    ];
    for (let i = 0; i <= newTags.length - 1; i++) {
      await input.fill(newTags[i]);
      await input.press('Enter');
    }
    const tags = page.locator('.content >> li');
    expect(page.locator('text="java"')).toBeVisible();
    expect(await tags.count()).toBe(10);
  });
  test.skip('TC5: Adds maximum tags (10) with node and javascript, then deletes all.', async ({
    page,
  }) => {
    let newTags = [
      'playwright',
      'cypress',
      'python',
      'selenium',
      'git',
      'sql',
      'postman',
      'java',
    ];
    for (let i = 0; i <= newTags.length - 1; i++) {
      await input.fill(newTags[i]);
      await input.press('Enter');
    }
    expect(await tags.count()).toBe(10);
  });
});
