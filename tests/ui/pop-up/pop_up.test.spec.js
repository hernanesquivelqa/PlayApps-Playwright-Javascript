import { expect, test } from '@playwright/test';
import { PopUpPage } from '../../pages/popUpPage/popUpPage';
test.describe('Test Pop Up', () => {
  let popUpPage;

  test.beforeEach(async ({ page }) => {
    popUpPage = new PopUpPage(page);
    await page.goto(popUpPage.url);
  });

  test('TC1: Verify pop up open correctly', async ({ page }) => {
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      popUpPage.clickLoginInput(),
    ]);

    await expect(popup).toHaveURL(popUpPage.urlPopUp);
    await expect(popup.getByRole(popUpPage.roleButton)).toBeInViewport();
    await popup.locator(popUpPage.roleButton).click();
    await expect(page).toHaveURL(popUpPage.url);
    await expect(popUpPage.info).toHaveText(popUpPage.infoButtonClicked);
  });
});
