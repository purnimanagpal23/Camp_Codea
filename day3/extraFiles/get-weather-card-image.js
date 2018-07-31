const puppeteer = require('puppeteer');

async function gimmeTheWeather(){
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.waitFor('input.gsfi');
    await page.type('input.gsfi','weather');
    await page.keyboard.press('Enter');
    await page.waitFor('#wob_tm');
    const temp = await page.$('#wob_tm');
    const value = await page.evaluate(temp => temp.innerText, temp);
    
    console.log('The temperature is: ' + value);
    
    await page.screenshot({path: 'full-page.png'});
    const weatherCard = await page.$('#wob_wc');
    weatherCard.screenshot({path: 'weather-card.png'});
    // await browser.close();
}

gimmeTheWeather();
console.log('The end?');
