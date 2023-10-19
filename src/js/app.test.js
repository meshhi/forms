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
      await page.goto("http://localhost:8080/");
    });

    it('should be titled "Document"', async () => {
      await expect(page.title()).resolves.toMatch("Document");
    });
  });
});
