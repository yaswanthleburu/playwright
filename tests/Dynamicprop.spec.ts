import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://demoqa.com/');  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/DEMOQA/);
    await page.click('//h5[contains(text(),"Elements")]');
    await page.click('//span[text()="Dynamic Properties"]');
    await page.isEnabled('button#enableAfter');
    await page.click('button#enableAfter');
    await page.isEnabled('button#colorChange');
    await page.waitForTimeout(3000);
});