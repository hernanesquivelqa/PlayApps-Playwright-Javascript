const { test, expect } = require("@playwright/test");

test.describe("Fetching Data", () => {
  test.skip("Should load and display all posts", async ({ page }) => {
    await page.goto("https://qaplayground.dev/apps/fetch/", { waitUntil: "commit" });

    await page.waitForResponse((resp) => resp.url().includes("/posts")); // Wait for JSON
    await page.waitForResponse("https://images.unsplash.com/**"); // Wait for image

    expect(await page.locator(".icard").count()).toBeGreaterThan(90);
  });
});