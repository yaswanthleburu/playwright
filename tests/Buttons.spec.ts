import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://demoqa.com/'); 
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/DEMOQA/);
    //span[text()="Angular"]
    await page.click('//h5[contains(text(),"Elements")]');
    await page.click('//span[text()="Buttons"]');
    await page.locator('button#doubleClickBtn').dblclick();
    const Doubleclcik=await page.locator('p#doubleClickMessage').textContent();
    console.log("result is ", Doubleclcik);
    await page.locator('button#rightClickBtn').click({ button: 'right' });
    const rightclick=await page.locator('p#rightClickMessage').textContent();
    console.log("result is ", rightclick);
    await page.locator('//button[text()="Click Me"]').click();
    const clickmsg=await page.locator('p#dynamicClickMessage').textContent();
    console.log("result is ", clickmsg);
    await page.waitForTimeout(3000);
});