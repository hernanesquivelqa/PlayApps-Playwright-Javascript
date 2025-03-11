import { DynamicTestingPage } from './pages/dynamic-testing/dynamicTestingPage';
import { test, expect } from '@playwright/test';

test.describe("Dynamic Table", () => {
  let dynamicTestingPage; // Variable para almacenar la instancia

  test.beforeEach(async ({ page }) => {
    dynamicTestingPage = new DynamicTestingPage(page); // Se instancia antes de cada test
    await page.goto(dynamicTestingPage.url);
    await expect(dynamicTestingPage.getSuperHeroTextLocator()).toBeVisible();
  });

  test('TC1: Has title Test Dynamic Table', async ({ page }) => {
    await expect(page).toHaveTitle("Test Dynamic Table");
  });

  test("TC2: Should verify Spider-Man's real name", async ({ page }) => { 
    const realName = "Peter Parker";
    const realNameCell =  dynamicTestingPage.getSpiderManRealNameCell()
    await expect(realNameCell).toHaveText(realName);
  });
});