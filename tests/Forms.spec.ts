import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://demoqa.com/');  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/DEMOQA/);
    await page.click('//h5[text()="Forms"]');
    await page.click('//span[text()="Practice Form"]');
    await page.waitForTimeout(3000);
});