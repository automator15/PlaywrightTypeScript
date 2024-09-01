import {chromium, test} from '@playwright/test';

test("Login", async()=>{
    const browser = await chromium.launch();
    const newContext = await browser.newContext();
    const page = await newContext.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']");
    await page.click("//span[normalize-space()='Login']");

    await page.fill("//input[@id='input-email']", "kplaywright@gmail.com");
    await page.fill("//input[@id='input-password']", "Pass@123!");
    await page.click("//input[@value='Login']");

})