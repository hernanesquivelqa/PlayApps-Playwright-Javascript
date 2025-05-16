import { test } from '@playwright/test';
import { existsSync } from 'fs'; // To check if the file exists
import { join } from 'path'; // To handle file paths

test.describe('Testing download files', () => {
  test('TC1: Verify download file flow', async ({ page }) => {
    // Navigate to the download page
    await page.goto('https://testpages.eviltester.com/styled/download/download.html');

    // Set up a download directory (optional, Playwright uses a temp directory by default)
    const downloadPath = join(process.cwd(), 'downloads');
    
    // Listen for the download event
    const [download] = await Promise.all([
      // Wait for the download event to fire
      page.waitForEvent('download'),
      // Trigger the download by clicking the button
      page.locator('#direct-download').click(),
    ]);

    // Get the suggested file name from the download
    const fileName = download.suggestedFilename();
    console.log(`Downloaded file: ${fileName}`);

    // Verify the file name is correct
    if (fileName !== 'textfile.txt') {
      throw new Error(`Expected file name to be textfile.txt, but got ${fileName}`);
    }

    // Save the file to the specified path (optional, if you need to inspect it later)
    const filePath = join(downloadPath, fileName);
    await download.saveAs(filePath);

    // Verify the file exists
    if (!existsSync(filePath)) {
      throw new Error(`File ${filePath} was not downloaded successfully`);
    }

    console.log(`File ${fileName} downloaded successfully to ${filePath}`);
  });
});