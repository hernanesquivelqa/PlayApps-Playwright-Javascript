const {test, expect} = require("@playwright/test");

test.describe('Test IFrame',()=>{

test('Click on the button that is two level deep IFrame',async({page})=>{
await page.goto("https://qaplayground.dev/apps/iframe/");

    const button = page.frameLocator("#frame1").frameLocator("#frame2").locator("text=Click Me");
    const info = page.frameLocator("#frame1").frameLocator("#frame2").locator("#msg");
    await button.click();
    await expect(info).toBeVisible(); 

})

})