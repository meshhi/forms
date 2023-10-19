import puppeteer from "puppeteer";

describe("Test popover", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
  });

  afterEach(async () => {
    await page.close();
  });

  afterAll(async () => {
    await browser.close();
  });

  describe("add task to the list", () => {
    beforeEach(async () => {
      page = await browser.newPage();
      await page.goto(URL, {waitUntil: 'domcontentloaded'});
    });

    it('should be titled "Document"', async () => {
      await expect(page.title()).resolves.toMatch("Document");
    });

    it('popover should be visible by clicking widget', async () => {
      await page.locator('.widget').click();
      const popover = await page.$('.popover')
      const className = await (await popover.getProperty('className')).jsonValue()
      expect(className).toBe('popover show')
    });
  });
});
