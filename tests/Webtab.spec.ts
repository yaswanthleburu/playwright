import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://demoqa.com/');  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/DEMOQA/);
    //span[text()="Angular"]
    await page.click('//h5[contains(text(),"Elements")]');
    await page.click('//span[text()="Web Tables"]');
    await page.click('#addNewRecordButton');
    await page.fill('input#firstName','yas');
    await page.fill('input#lastName','le');
    await page.fill('input#userEmail','yas@gmail.com');
    await page.fill('input#age','27');
    await page.fill('input#salary','10000000');
    await page.fill('input#department','QA');
    await page.click('button#submit');
    await page.click('span[id="edit-record-4"]');
    await page.fill('input#searchBox',('yas'));
    await page.fill('input#firstName',('yaswanth'));
    await page.waitForTimeout(3000);
    await page.click('button#submit');
    await page.waitForTimeout(3000);
    await page.click('span[id="delete-record-4"]');
    await page.locator('input#searchBox').clear();
    await page.waitForTimeout(3000);
});