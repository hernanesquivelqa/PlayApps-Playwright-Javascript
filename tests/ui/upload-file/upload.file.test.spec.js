import { test, expect } from '@playwright/test';
import {UploadFilePage} from '../../pages/upload-file/uploadFilePage'
test.describe("Upload", () => {
  let uploadFilePage;

  test.beforeEach('Setup Page', async({ page })=>{
   uploadFilePage = new UploadFilePage(page)
   await page.goto(uploadFilePage.url)
  })
  test("Should upload a text file", async ({ page }) => {
    // Verify the initial state
    await expect(uploadFilePage.uploadInput).toBeVisible();
    const filePath = uploadFilePage.getFilePath();
    // Select the file to upload
    await uploadFilePage.fileInput.setInputFiles(filePath);
    // Verify the upload by checking the caption
    const firstImageCaption = uploadFilePage.firstImage
    await expect(firstImageCaption).toContainText("thunder.png");
  });

});