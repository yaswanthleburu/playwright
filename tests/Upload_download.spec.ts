import { test, expect, defineConfig } from '@playwright/test';


test('has title', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/DEMOQA/);
    //span[text()="Angular"]
    await page.click('//h5[contains(text(),"Elements")]');
    await page.click('//span[text()="Upload and Download"]');
    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click('a#downloadButton')
    ])
    //const path = await download[0].path()
    //console.log(path)
    const fileName = download[0].suggestedFilename()
    await download[0].saveAs(fileName);

    //await page.setInputFiles("input[type='file']",["sampleFile.jpeg"]);
    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])
    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);
    uploadFiles.setFiles(["sampleFile.jpeg"
    ])
    await page.waitForTimeout(3000);

})  