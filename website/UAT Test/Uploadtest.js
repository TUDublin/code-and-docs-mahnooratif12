const puppeteer = require('puppeteer');

(async () => {
    // Launch a new browser instance
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Open the UAT webpage
    await page.goto('http://localhost:3000/');

    // Log in to the UAT environment
    await page.type('#email', 'm.atif@gmail.com');
    await page.type('#password', 'Abc@12345');
    await page.click('#loginButton');

    // Wait for navigation after login
    await page.waitForNavigation();

    // Navigate to the document upload section
    await page.goto('http://localhost:3000//upload');

    // Locate the file input field and upload button
    const fileInputSelector = '#fileInput';
    const uploadButtonSelector = '#uploadButton';

    // Specify the path to the document you want to upload
    const filePath = 'C:\FinalProject\code-and-docs-mahnooratif12\doc\sample-data';

    // Upload the file
    const inputUploadHandle = await page.$(fileInputSelector);
    await inputUploadHandle.uploadFile(filePath);

    // Click the upload button to submit the upload
    await page.click(uploadButtonSelector);

    // Optional: Verify the upload was successful
    await page.waitForSelector('#successMessage', { visible: true });
    const successMessage = await page.$eval('#successMessage', el => el.textContent);
    if (successMessage.includes('Upload successful')) {
        console.log('Upload was successful!');
    } else {
        console.log('Upload failed.');
    }

    // Close the browser
    await browser.close();
})();
