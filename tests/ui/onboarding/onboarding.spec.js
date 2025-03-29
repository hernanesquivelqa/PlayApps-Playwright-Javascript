const { test, expect } = require("@playwright/test");
const { OnboardingPage } = require("../../pages/onboarding/onboardingPage");
test.describe("Onboarding", () => {
  let onboardingPage;
  test.beforeEach('Setup Page',async ({page})=>{
  onboardingPage = new OnboardingPage(page);
  await page.goto(onboardingPage.url);
  })

  test("TC1: Should close onboarding modal if it exists", async ({ page }) => {
  
    await expect(onboardingPage.title).toBeVisible();
    const title = onboardingPage.title
    const modal = await onboardingPage.modal.isChecked();
    const closeButton = onboardingPage.closeButton;

    // Check if modal is displayed
    if (modal) {
      await closeButton.click();
      await expect(title).toHaveText("Welcome Peter Parker! 🕷🎉");
      await expect(onboardingPage.welcomeBoard).toHaveText("Welcome on board!")
    } else {
      await expect(title).toHaveText("Application successfully launched! 🚀");
    }
    
  });
});