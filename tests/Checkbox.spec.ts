import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://demoqa.com/');  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/DEMOQA/);
    //span[text()="Angular"]
    await page.click('//h5[contains(text(),"Elements")]');
    await page.click('//span[text()="Check Box"]');
    await page.click('button[aria-label="Toggle"]');
    await page.click('button[aria-label="Expand all"]');
    await page.click('//span[text()="Home"]');
    await page.click('//span[text()="Commands"]');
    await page.click('//span[text()="Private"]');
    await page.click('//span[text()="Angular"]');
    const dataOutput=await page.locator('#result').textContent();
    console.log("data is "+ dataOutput);
    await page.waitForTimeout(3000);
});