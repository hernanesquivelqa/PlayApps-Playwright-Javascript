
import { test, expect } from '@playwright/test';
test.describe("Dynamic Table", () => {
  test('TC1:Has title Test Dynamic Table', async ({ page }) => {
    await page.goto('https://qaplayground.dev/apps/dynamic-table/');
    await expect(page.locator("text=SUPERHERO")).toBeVisible();
    await expect(page).toHaveTitle("Test Dynamic Table");
  });
  
  test("TC2: Should verify Spider-Man's real name", async ({ page }) => {

    await page.goto("https://qaplayground.dev/apps/dynamic-table/");
    console.log("Page loaded");
    const superheroLocator = page.locator("text=SUPERHERO");
    await expect(superheroLocator).toBeVisible();
    const realName = "Peter Parker";
    const row = page.locator('text="Spider-Man" >> xpath=../../../..');
    //console.log("Row for Spider-Man found:", await row.evaluate(el => el.innerHTML));
    const realNameCell = row.locator("td").nth(2);
    //console.log("real name :", await realNameCell.evaluate(el => el.innerHTML));
    await expect(realNameCell).toHaveText(realName);
    
});
});



