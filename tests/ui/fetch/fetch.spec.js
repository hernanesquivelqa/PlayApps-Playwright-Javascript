const { test, expect } = require("@playwright/test");
const { FetchPage } = require("../../pages/fetch/fetchPage");

test.describe("Fetching Data", () => {
  test("Should load and display all posts", async ({ page }) => {
    const fetchPage = new FetchPage(page);
    await page.goto(fetchPage.url, { waitUntil: "commit" });

    await page.waitForResponse((resp) => resp.url().includes("/posts")); // Wait for JSON
    //await page.waitForResponse((resp) => resp.url().startsWith("https://images.unsplash.com/")); // Wait for image

    await page.waitForSelector(".icard");
    expect(await page.locator(".icard").count()).toBeGreaterThan(90);
  });
});