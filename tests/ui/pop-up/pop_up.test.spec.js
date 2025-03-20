import { expect, test } from '@playwright/test';

test.describe('Test Pop Up', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://qaplayground.dev/apps/popup/#');
  });

  test('TC1: Verify pop up open correctly', async ({ page }) => {
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('#login').click(),
    ]);

    await expect(popup).toHaveURL('https://qaplayground.dev/apps/popup/popup');
    await expect(popup.getByRole('button')).toBeInViewport();
    await popup.locator('button').click();

    await expect(page).toHaveURL('https://qaplayground.dev/apps/popup/#');
    await expect(page.locator('#info')).toHaveText('Button Clicked');
  });
});
