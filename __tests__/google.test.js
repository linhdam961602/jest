import { render, screen } from "@testing-library/react";

let puppeteer = require("puppeteer");
let browser = null;
let page = null;

describe("google", () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      args: ["--start-fullscreen"],
    });
    page = await browser.newPage();
    await page.setViewport({ width: 0, height: 0 });

    jest.setTimeout(60000);
  });

  // afterAll(async () => {
  //   await browser.close();
  // });

  beforeEach(async () => {
    await page.goto("https://google.vn/");
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch("Google");
  });

  test("Test search Keyboard", async () => {
    const xpSearchBox =
      "/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/textarea";
    const searchBox = await page.$x(xpSearchBox);

    await searchBox[0].type("Keyboard");
    await page.keyboard.press("Enter");
  }, 60000);
});
