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

## LICENSE

This repo's code is modified based on
https://github.com/nanobrowser/nanobrowser/blob/master/chrome-extension/public/buildDomTree.js
https://github.com/browser-use/browser-use/blob/main/browser_use/dom/buildDomTree.js
https://github.com/bytedance/UI-TARS-desktop/blob/main/packages/agent-infra/browser-use/assets/buildDomTree.js

Apache-2.0 License
Copyright (c) 2024 alexchenzl
https://github.com/nanobrowser/nanobrowser/blob/master/LICENSE

MIT License
Copyright (c) 2024 Gregor Zunic
https://github.com/browser-use/browser-use/blob/main/LICENSE

Apache License
Version 2.0, January 2004
https://github.com/bytedance/UI-TARS-desktop/blob/main/LICENSE
