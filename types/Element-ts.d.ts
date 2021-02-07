/**
 * 首字母大写
 * @param str
 */
declare function firstCharToUpper(str: string): string;
/**
 * 获取样式的最终 Border 的 宽度
 * @param cssStyleDec
 * @param side
 */
declare function getBorderSideWidth(cssStyleDec: CSSStyleDeclaration, side: 'top' | 'left' | 'bottom' | 'right'): number;
/**
 * 判断是否没有背景
 * @param cssStyleDec
 */
declare function noBackground(cssStyleDec: CSSStyleDeclaration): boolean;
/**
 * 判断计算样式的产颜色是否是透明的
 * @param color
 */
declare function computedStyleColorIsTransparent(color: string): boolean;
interface Element {
    /**
     * 获取元素可视内容的边界矩形，该矩形的范围是：当元素有边框 或 背景时，包含边框，否则，不包含边框 和 padding
     */
    getVisibleContentBoundingRect(): DOMRect;
}
