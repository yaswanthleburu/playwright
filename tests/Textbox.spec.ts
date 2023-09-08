import { test, expect,chromium } from '@playwright/test';

test('has title', async ({ page }) => { 
    await page.goto('https://demoqa.com/');
    // Expect a title "to contain" a substring. 
    await expect(page).toHaveTitle(/DEMOQA/); 
    await page.locator('//h5[contains(text(),"Elements")]').click(); 
    await page.locator('//span[contains(text(),"Text Box")]').click(); 
    // await page.locator('//input[@id="userName"]').clear(); 
    await page.getByPlaceholder('Full Name').fill('Peter'); 
    // await page.locator('//input[@id="userEmail"]').clear(); 
    await page.getByPlaceholder('name@example.com').fill('yaswanth@gmail.com'); 
    // await page.locator('//textarea[@id="currentAddress"]').clear(); 
    await page.getByPlaceholder('Current Address').fill('Hyderabad'); 
    // await page.locator('//textarea[@id="permanentAddress"]').clear(); 
    await page.locator('//textarea[@id="permanentAddress"]').fill('AP INDIA'); 
    await page.locator('//button[@id="submit"]').click(); 
    const dataOutput=await page.locator('//div[@class="border col-md-12 col-sm-12"]').textContent(); 
    console.log("data is "+ dataOutput); 
    await page.waitForTimeout(3000); 
    await page.waitForSelector('//span[contains(text(),"Text Box")]'); 
    await page.locator('//div[contains(text(),"Text Box")]').click();
});