# @youngjuning/build-dom-tree

```ts
const puppeteer = require('puppeteer');
const fs = require('fs');

async function main() {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto("https://www.example.com", {
    waitUntil: 'networkidle2'
  });
  // 读取 npm 包文件内容
  const buildDomTreePath = path.resolve(require.resolve('@youngjuning/build-dom-tree'));
  const buildDomTreeScript = fs.readFileSync(buildDomTreePath, 'utf8');
  // 注入脚本
  await page.evaluateOnNewDocument(buildDomTreeScript);
  await page.evaluate(() => {
    // Access buildDomTree from the window context of the target page
    return window.buildDomTree({
      doHighlightElements: true,
      focusHighlightIndex: -1,
      viewportExpansion: 0,
    });
  });
  await page.screenshot({ path: 'example.png' });
  await page.close();
  await browser.close();
}

main();
```
