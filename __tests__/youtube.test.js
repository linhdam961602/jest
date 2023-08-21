import { render, screen } from "@testing-library/react";

let puppeteer = require("puppeteer");
let browser = null;
let page = null;

describe("facebook", () => {
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
    await page.goto("https://www.youtube.com/");
  });

  it('should be titled "YouTube"', async () => {
    await expect(page.title()).resolves.toMatch("YouTube");
  });

  test("Test search Keyboard", async () => {
    const xpSearchBox =
      "/html/body/ytd-app/div[1]/div/ytd-masthead/div[4]/div[2]/ytd-searchbox/form/div[1]/div[1]/input";
    const searchBox = await page.$x(xpSearchBox);
    await searchBox[0].type("daisy 40%");
    await page.keyboard.press("Enter");
    const videoTitleSel = "div.ytd-video-renderer";

    await Promise.all([
      page.waitForNavigation(),
      page.waitForSelector(videoTitleSel),
    ]);

    const listVideo = await page.$$(videoTitleSel);
    console.log("listVideo", listVideo.length);

    await listVideo[0].click();
  }, 60000);
});
