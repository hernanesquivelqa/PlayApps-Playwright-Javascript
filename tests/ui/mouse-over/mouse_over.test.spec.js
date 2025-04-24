import { test, expect } from "@playwright/test";

test.describe('Testing Feature Mouse-Over', () => {
  test.beforeEach('Setup Page', async ({ page }) => {
    await page.goto("https://qaplayground.dev/apps/mouse-hover/");
  });

  test('TC01: hover card', async ({ page }) => {
    await expect(page.locator(".poster-container >> img")).toBeVisible();
    await page.locator(".poster").hover();
    const expectedPrice = "$24.96";
    const currentPrice = page.locator(".current-price");
    await expect(currentPrice).toHaveText(expectedPrice);
  });
});