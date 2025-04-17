const fs = require('fs');
const path = require('path');

/**
 * 在新文档加载前注入 npm 脚本
 */
export const executeBuildDomTreeScript = async (page) => {
  if (!page) {
    throw new Error('Puppeteer 页面未连接');
  }
  // 读取 npm 包文件内容
  const buildDomTreePath = path.resolve(require.resolve('@youngjuning/build-dom-tree'));
  const buildDomTreeScript = fs.readFileSync(buildDomTreePath, 'utf8');
  await page.evaluateOnNewDocument(buildDomTreeScript);
};
