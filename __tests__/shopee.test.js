let puppeteer = require("puppeteer");
let browser = null;
let page = null;

describe("Shopee", () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    await page.goto("https://shopee.com");
  });

  it('should be titled "Shopee Việt Nam"', async () => {
    await expect(page.title()).resolves.toMatch(
      "Shopee Việt Nam | Mua và Bán Trên Ứng Dụng Di Động Hoặc Website"
    );
  });
});
