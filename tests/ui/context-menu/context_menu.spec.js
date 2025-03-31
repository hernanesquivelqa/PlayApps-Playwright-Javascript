const { test, expect } = require("@playwright/test");
import { ContextMenuPage } from "../../pages/context-menu/contextMenuPage";
test.describe("Context Menu", () => {
  let contextMenuPage;

  test.beforeEach(async({page})=>{
    contextMenuPage = new ContextMenuPage(page);
    await page.goto(contextMenuPage.url);
  })
  test("Should click on each menu and sub-menu item", async ({ page }) => {
    await expect(contextMenuPage.rightClickLocator).toBeVisible();

    const menuItems = contextMenuPage.menuItems;
    const subMenuItems = contextMenuPage.subMenuItems;
    const message = contextMenuPage.message; // html paragraph

    // Validate menu items
    for (let index = 0; index < menuItems.length; index++) {
      await page.click("body", { button: "right", delay: 300 }); // right click on the page
      await page.locator("text=" + menuItems[index]).click();
      await expect(message).toContainText(menuItems[index]);
    }

    // Validate sub-menu items
    for (let index = 0; index < subMenuItems.length; index++) {
      await page.click("body", { button: "right", delay: 300 }); // right click on the page
      await page.locator('text="Share"').hover(); // Opens Share sub-menu
      await page.locator(".share >> text=" + subMenuItems[index]).click();
      await expect(message).toContainText(subMenuItems[index]);
    }
  });
});