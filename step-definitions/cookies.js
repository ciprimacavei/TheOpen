const { client} = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');
const cookies = require('../helpers/locators/cookiesPage');
const header = require('../helpers/locators/header');

Given(/^The user opens the website$/, async () => {
    await client.init();
    console.log('The website page has been opened');
});

When(/^The Accept Cookies button is displayed$/, async () => {
    await client.waitForElementVisible(cookies.cookieWindow(), 1000);
    console.log('The cookie page has been displayed');
});

When(/^The user presses the button$/, async () => {
    await client.click(cookies.acceptCookies());
    console.log('The user has pressed the Accept Cookies button');
});

Then(/^Website Logo is accessable$/, async () => {
    await client.assert.not.elementPresent(cookies.noCookieWindow());
    console.log('The Cookie window has closed');
});


Given(/^The user will access the website$/, async () =>{
    await client.init();
    console.log('The website page has been opened');
});

When(/^The user clicks on cookies settings button$/, async () => {
    await client.click(cookies.cookieSettings())
});
When(/^Scrolls down the menu$/, async () => {
    await client.moveTo(cookies.categorizedCookiesOff(2))
});
When(/^Presses the toggle button$/, async () => {
    let cookieJson = client.getCookies();
    console.log(cookieJson);
    await client.click(cookie.categorizedCookiesOff(2));
    let newCookieJson = client.getCookies();
    console.log(newCookieJson);
});
When(/^Accepts all cookies$/, async () => {
    await client.moveTo(cookies.acceptAllCookies())
    client.click(cookies.acceptAllCookies());
});
Then(/^The new cookies are saved$/, async () => {
    let savedCookies = client.getCookies();
    console.log(savedCookies);
})