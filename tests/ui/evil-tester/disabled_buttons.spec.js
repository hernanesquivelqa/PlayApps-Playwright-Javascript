import { test, expect } from '@playwright/test';
import { DynamicButtonsPage } from '../../pages/evilt-tester/dynamicButtonsPage';

test.describe('Testing disabled dynamic buttons', () => {
  test('TC1: Verify disabled button flow', async ({ page }) => {
    const buttonsPage = new DynamicButtonsPage(page);

    await buttonsPage.navigate();
    await buttonsPage.button00.click();

    await expect(buttonsPage.message).toHaveText("Click Buttons In Order");

    await buttonsPage.clickButtonsInOrder();
    await expect(buttonsPage.message).toHaveText("All Buttons Clicked");
  });
});