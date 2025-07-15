import {test, expect} from '@playwright/test'

test('google' , async ({ page }) => {
    await page.goto("https://jmeter.apache.org/")
    //await expect(page).toHaveTitle('Google')

});