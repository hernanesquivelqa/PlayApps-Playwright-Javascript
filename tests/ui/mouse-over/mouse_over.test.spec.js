import { test, expect } from "@playwright/test";
import { MousePage } from "../../pages/mouse/mousePage";

test.describe('Testing Feature Mouse-Over', () => {
  let mousePage;

  test.beforeEach('Setup Page', async ({ page }) => {
    mousePage = new MousePage(page);
    await mousePage.visitUrl();
  });

  test('TC01: hover card', async () => {
    await expect(mousePage.poster()).toBeVisible();  
    await mousePage.poster().hover();
    
    const expectedPrice = "$24.96";
    const currentPrice = mousePage.currentPrice(); 
    await expect(currentPrice).toHaveText(expectedPrice);
  });
});