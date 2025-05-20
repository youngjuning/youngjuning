import fs from 'fs-extra';
import path from 'path';
import * as puppeteer from 'puppeteer-core';

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
    'utf8'
  );
  await page.evaluateOnNewDocument(buildDomTreeScript);
};

export interface Coordinates {
  x: number;
  y: number;
}

export interface CoordinateSet {
  topLeft: Coordinates;
  topRight: Coordinates;
  bottomLeft: Coordinates;
  bottomRight: Coordinates;
  center: Coordinates;
  width: number;
  height: number;
}

export interface ViewportInfo {
  scrollX: number;
  scrollY: number;
  width: number;
  height: number;
}

export type RawDomTextNode = {
  type: string;
  text: string;
  isVisible: boolean;
};

export type RawDomElementNode = {
  // Element node doesn't have a type field
  tagName: string | null;
  xpath: string | null;
  cssSelector: string | null;
  attributes: Record<string, string>;
  children: (RawDomTreeNode | null)[];
  isVisible?: boolean;
  isInteractive?: boolean;
  isTopElement?: boolean;
  highlightIndex?: number;
  viewportCoordinates?: CoordinateSet;
  pageCoordinates?: CoordinateSet;
  viewportInfo?: ViewportInfo;
  shadowRoot?: boolean;
};

export type RawDomTreeNode = RawDomTextNode | RawDomElementNode;

export interface BuildDomTreeArgs {
  doHighlightElements: boolean;
  focusHighlightIndex: number;
  viewportExpansion: number;
}
