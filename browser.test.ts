import {test} from "@playwright/test";

test("test browser", async ({page}) => {
  // point this to wherever you want
  // await page.goto("https://demo.temma.app/club/");
  await page.goto("http://127.0.0.1:8000/club/");
  // await page.goto("https://temma.app/");
  // await page.goto("http://localhost:5500/foundation.html");

  // keep browser open
  await page.pause();
});
