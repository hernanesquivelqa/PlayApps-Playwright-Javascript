const { test, expect } = require("@playwright/test");
import { NavigationMenuPage } from "../../pages/navigation-menu/navigationMenuPage";

test.describe("Setup Page", () => {
  let navigationWebPage;

  test.beforeEach(async ({ page }) => {
    navigationWebPage = new NavigationMenuPage(page); 
    await page.goto(navigationWebPage.url);
    await expect(navigationWebPage.navigation).toBeVisible();
  });

  test("TC1: Should open each menu link in the new tab", async ({ page, context }) => {
    const links = navigationWebPage.navigationLinks;
    await expect(links).toHaveCount(5);

    // Create a new tab page
    const newPage = await context.newPage();

    for (let index = 1; index < (await links.count()); index++) {
      const menuItemText = await links.nth(index).textContent();
      const menuItemLink = await links.nth(index).getAttribute("href");

      await newPage.goto(navigationWebPage.urlLinks + menuItemLink); // Open a link
      await expect(newPage.locator("#title")).toContainText(menuItemText);
    }

    newPage.close();
  });

  test("TC2: Should open each menu link by clicking on it", async ({ page }) => {
    const links = navigationWebPage.navigationLinks;
    await expect(links).toHaveCount(5);

    for (let index = 1; index < (await links.count()); index++) {
      const menuItemText = await links.nth(index).textContent();

      await links.nth(index).click({ delay: 300 });

      await expect(page.locator("#title")).toContainText(menuItemText);

      await page.goBack();
    }
  });
});
