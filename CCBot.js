const {Builder, By, Key, until, Actions} = require('selenium-webdriver');

async function bot() {
    let driver = await new Builder().
        forBrowser('chrome').
        build();

    try{
        await driver.get('https://orteil.dashnet.org/cookieclicker/');
        
        let bigCookie = driver.findElement(By.id("bigCookie"));
        let total = driver.findElement(By.id("cookies"));
        
        var i;
        var upgradeList = [];

        
        for (i=0; i<100; i++) {
            (await bigCookie).click();
        }

           

        
    }
    finally {
        await driver.quit();
    }
    

    

}

bot();