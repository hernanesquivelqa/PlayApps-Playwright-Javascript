import { VerifyAccountPage } from './pages/verifyAccountPage';
import { test, expect } from 'playwright/test';

test.describe('Verify Account test', () => {
  let verifyAccountPage;

  test.beforeEach(async ({ page }) => {
    verifyAccountPage = new VerifyAccountPage(page);
    await page.goto(verifyAccountPage.url);
    expect(page.url()).toContain('verify-account');
  });

  test('TC1: fill inputs and verify success', async ({ page }) => {
    await verifyAccountPage.fillInputs();
    expect(await verifyAccountPage.getSuccessText()).toEqual('Success');
  });
});
