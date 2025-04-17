import fs from "fs-extra";
import path from "path";
import * as puppeteer from "puppeteer-core";

/**
 * 在新文档加载前注入 npm 脚本
 */
export const executeBuildDomTreeScript = async (page: puppeteer.Page) => {
  if (!page) {
    throw new Error('Puppeteer 页面未连接');
  }
  // 读取 npm 包文件内容
  const buildDomTreeScript = fs.readFileSync(
    path.join(__dirname, '../assets/buildDomTree.js'),
    'utf8',
  );
  await page.evaluateOnNewDocument(buildDomTreeScript);
};
