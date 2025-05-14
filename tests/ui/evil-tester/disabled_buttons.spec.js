import { test, expect } from '@playwright/test';
test.describe('Testing disabled dynamic buttons', () => {
  test('TC1: Verify disabled button flow', async ({ page }) => {
    await page.goto("https://testpages.eviltester.com/styled/dynamic-buttons-disabled.html");

    // Start clicking buttons in order
    await page.locator("#button00").click();
    await expect(page.locator("#buttonmessage")).toHaveText("Click Buttons In Order");

    await page.locator("#button01").click();
    await page.locator("#button02").click();
    await page.locator("#button03").click();

    await expect(page.locator("#buttonmessage")).toHaveText("All Buttons Clicked");
  });
});