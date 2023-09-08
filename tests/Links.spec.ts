import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://demoqa.com/');  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/DEMOQA/);
    //span[text()="Angular"]
    await page.click('//h5[contains(text(),"Elements")]');
    await page.click('//span[text()="Links"]');
    await page.click('a[id="simpleLink"]');
    await page.isVisible('DEMOQA');
    await page.click('a#dynamicLink');
    await page.isVisible('DEMOQA');
});