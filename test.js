import { remote } from 'webdriverio';

(async () => {
	const browser = await remote({
		capabilities:{
			browserName: 'chrome'
		}
	});
	await browser.url('https://webdriver.io');
	const title = await browser.getTitle();
	console.log('Title was: '+ title);

	await browser.deleteSession();
})().catch((e) => console.error(e));