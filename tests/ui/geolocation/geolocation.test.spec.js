import { test, expect } from "@playwright/test";
import { GeolocationPage } from "../../pages/geolocation/geolocationPage";
test.describe('Testing geolocation feature', () => {
    test('TC1: Verify geolocation displays Washington D.C.', async ({ page, context }) => {
        const geolocationPage = new GeolocationPage(page, context);
        await page.goto(geolocationPage.url);
        geolocationPage.setGeolocation();
        await geolocationPage.clickGetLocation()
        const currentLocation = await geolocationPage.locationInfo
        await expect(currentLocation).toContainText("Washington, United States", { timeout: 5000 });
    });
});