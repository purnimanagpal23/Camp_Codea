const puppeteer = require('puppeteer');

async function gimmeTheWeather(){
    const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.waitFor('input.gsfi');
    await page.type('input.gsfi','weather');
    await page.keyboard.press('Enter');
    await page.waitFor('#wob_tm');
    await page.evaluate(()=>{
        const weatherCard = window.wob_wc;
        weatherCard.remove();
        document.body.innerHTML = weatherCard.outerHTML;
    });
    await page.addStyleTag({content:'body { padding: 30px; }'});
    await page.pdf({path:'weather-report.pdf'});
    await browser.close();
}

gimmeTheWeather();
console.log('The end?');
