import style from '../component/Profiles/Profiles.module.css';

const puppeteer = require('puppeteer');

test('User should login, goto profile page, click on first profile edit button, change user name with random numbers', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 60,
        args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/login');
    await page.click('input#email');
    await page.type('input#email', 'rafogo5@yandex.ua');
    await page.click('input#password');
    await page.type('input#password', '132680101');
    await page.click('button#submitBtn');
    await page.goto('http://localhost:3000/profile');
    await page.waitForSelector('.profile');
    const finalProfile = await page.$eval('.profile', el => el.childNodes[0].textContent);
    const allProfiles = await page.$$eval('.profile', el => {return el.map(element => element.childNodes[0].textContent)});
    console.log(finalProfile);
    console.log(allProfiles);
    let number = Math.floor(Math.random() * 1000);
    let name = finalProfile + number;
    console.log(name);
    // const finalProfile = await page.$eval('#editBtn', el => el);
    await page.click('#editBtn');
    await page.click('#edtFullname');
    await page.type('#edtFullname', `${number}`);
    await page.click('#edtSbmBtn');
    const allResultProfiles = await page.$$eval('.profile', el => {return el.map(element => element.childNodes[0].textContent)});
    // await page.click('#edtDltBtn');
    // await browser.close();
    // need to add editing to be e2e test
    // expect(finalProfile).toBe('Gleb');
    expect(allResultProfiles.includes(name)).toBeTruthy();
}, 20000)