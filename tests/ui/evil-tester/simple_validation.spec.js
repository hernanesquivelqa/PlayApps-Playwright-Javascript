
import { ValidationPage } from '../../pages/evilt-tester/validationPage';
import { test, expect } from '@playwright/test';

test.describe('Testing simple validation', () => {

  test('TC1: Verify valid value', async ({ page }) => {
    const validationPage = new ValidationPage(page);
    await validationPage.goto();
    await validationPage.enterValue("ASDFas*");
    await validationPage.clickValidate();
    const message = await validationPage.getValidationMessage();
    expect(message).toBe("Valid Value");
  });

  test('TC2: Verify invalid value', async ({ page }) => {
    const validationPage = new ValidationPage(page);
    await validationPage.goto();
    await validationPage.enterValue("ASDFas*1234567890");
    await validationPage.clickValidate();
    const message = await validationPage.getValidationMessage();
    expect(message).toBe("Invalid Value");
  });

});