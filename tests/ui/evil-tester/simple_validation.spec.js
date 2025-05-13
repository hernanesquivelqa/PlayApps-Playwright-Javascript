
import { test, expect } from "@playwright/test";
test.describe('Testing simple validation', () => {
    
    test('TC1: Verify valid value', async ({ page }) => {
        await page.goto("https://testpages.eviltester.com/styled/apps/7charval/simple7charvalidation.html");
        await page.locator("input[name='characters']").fill("ASDFas*");
        await page.locator("input[name='validate']").click();
        await expect(page.locator("input[name='validation_message']")).toHaveValue("Valid Value");
    });
    test('TC2: Verify invalid value', async ({ page }) => {
        await page.goto("https://testpages.eviltester.com/styled/apps/7charval/simple7charvalidation.html");
        await page.locator("input[name='characters']").fill("ASDFas*1234567890");
        await page.locator("input[name='validate']").click();
        await expect(page.locator("input[name='validation_message']")).toHaveValue("Invalid Value");
    });
});
