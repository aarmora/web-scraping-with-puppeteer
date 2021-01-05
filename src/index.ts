import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();

    await page.goto('https://javascriptwebscrapingguy.com/');

    await page.waitFor(1500);

    await page.click('.entry-title');

    const linkText = await page.$eval('#post-3449 .entry-content p:nth-of-type(1) > a:nth-of-type(1)', element => element.textContent);

    console.log('Link text', linkText);

    await page.waitFor(3500);

    await browser.close();

})();