import { test, expect } from '@playwright/test';

test('openbrowser', async ({ page }) => {
await page.goto ("https://www.w3schools.com/");
await expect(page.getByText('Learn to Code')).toBeVisible();

//await page.screenshot({ path: 'screenshot.png', fullPage: true });
await page.screenshot({ path: 'screenshot/finalpage.png'})
//await page.screenshot({ path: '1.png')};
//   // Locate the "Google Search" button
//   const searchBtn = page.locator('input[value="Google Search"]');

//   // Check if it is visible on the page
//   await expect(searchBtn).toBeVisible();
});
