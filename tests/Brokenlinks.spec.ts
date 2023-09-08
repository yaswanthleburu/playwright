import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    // Expect a title "to contain" a substring.    
    await expect(page).toHaveTitle(/DEMOQA/);
    //span[text()="Angular"]    
    await page.click('//h5[contains(text(),"Elements")]');
    await page.click('//span[text()="Broken Links - Images"]'); 
    await page.isVisible('//p[text()="Valid image"]/following-sibling::img');
    await page.click('//a[contains(text(),"Click Here for Valid Link")]');
    await page.waitForTimeout(3000);
});