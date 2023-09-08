import { test, expect } from '@playwright/test';
test('has title', async ({ page }) => {
    await page.goto('https://demoqa.com/');  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/DEMOQA/);
    //span[text()="Angular"]
    await page.click('//h5[contains(text(),"Elements")]');
    await page.click('//span[text()="Radio Button"]');
    await page.click('label[for="yesRadio"]');
    const yes=await page.locator('span.text-success').textContent();
    console.log("data is "+ yes);
    await page.click('label[for="impressiveRadio"]');
    const impressiveRadio=await page.locator('span.text-success').textContent();
    console.log("data is ", impressiveRadio);
    await page.isDisabled('label.custom-control-label.disabled');
    const no=await page.locator('span.text-success').textContent();
    console.log("data is ", no);
    await page.waitForTimeout(3000);
});