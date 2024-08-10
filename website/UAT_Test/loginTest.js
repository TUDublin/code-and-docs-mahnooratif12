const puppeteer = require('puppeteer');

(async () => {
    // Launch a new browser instance
    const browser = await puppeteer.launch({ headless: false }); // Set headless: true for no UI
    const page = await browser.newPage();

    // Open the login page
    await page.goto('http://localhost:3000/');

    // Enter the login credentials
    await page.type('#email', 'm.atif@gmail.com');
    await page.type('#password', 'Abc@12345');

    // Click the login button
    await page.click('#loginButton');

    // Wait for navigation after login
    await page.waitForNavigation();

    // Verify successful login by checking the presence of a specific element or URL
    const loggedInSelector = '#welcomeMessage'; // Change to an element that appears only after successful login
    const isLoggedIn = await page.waitForSelector(loggedInSelector, { visible: true });

    if (isLoggedIn) {
        console.log('Login test passed: User successfully logged in.');
    } else {
        console.log('Login test failed: Login was not successful.');
    }

    // Close the browser
    await browser.close();
})();
