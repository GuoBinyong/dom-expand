
/**
 * 首字母大写
 * @param str
 */
function firstCharToUpper(str: string) {
    return str.replace(/\b(\w)(\w*)/g, function($0, $1, $2) {
        return $1.toUpperCase() + $2.toLowerCase()
    })
}

/**
 * 获取样式的最终 Border 的 宽度
 * @param cssStyleDec
 * @param side
 */
function getBorderSideWidth(cssStyleDec: CSSStyleDeclaration, side: 'top' | 'left' | 'bottom' | 'right') {
    let upperSide = firstCharToUpper(side.toLowerCase())
    const borderWidthStr = cssStyleDec[`border${upperSide}Width` as 'borderWidth']
    return cssStyleDec[`border${upperSide}Style` as 'borderStyle'] === 'none' && cssStyleDec.borderImageSource === "none" ? 0 : parseFloat(borderWidthStr)
}

/**
 * 判断是否没有背景
 * @param cssStyleDec
 */
function noBackground(cssStyleDec: CSSStyleDeclaration) {
    const backgroundColorStr = cssStyleDec.backgroundColor
    return computedStyleColorIsTransparent(backgroundColorStr) && cssStyleDec.backgroundImage === 'none'
}

/**
 * 判断计算样式的产颜色是否是透明的
 * @param color
 */
function computedStyleColorIsTransparent(color: string) {
    let colorNumStr = color.replace(/^.*\((.+)\).*$/, '$1')
    return colorNumStr.split(',').every(numStr => {
        return parseFloat(numStr) === 0
    })
}



interface Element {
    /**
     * 获取元素可视内容的边界矩形，该矩形的范围是：当元素有边框 或 背景时，包含边框，否则，不包含边框 和 padding
     */
    getVisibleContentBoundingRect(): DOMRect;
}


/**
 * 获取元素可视内容的边界矩形，该矩形的范围是：当元素有边框 或 背景时，包含边框，否则，不包含边框 和 padding
 */
Element.prototype.getVisibleContentBoundingRect = function getVisibleContentBoundingRect(): DOMRect {
    const clientRect = this.getBoundingClientRect()
    const comStyle = getComputedStyle(this)

    if (!noBackground(comStyle)) {
        return clientRect
    }

    let { top, bottom, right, left } = clientRect

    let borderWidth_Top = getBorderSideWidth(comStyle, 'top')
    if (borderWidth_Top === 0) {
        top += parseFloat(comStyle.paddingTop)
    }

    let borderWidth_Bottom = getBorderSideWidth(comStyle, 'bottom')
    if (borderWidth_Bottom === 0) {
        bottom -= parseFloat(comStyle.paddingBottom)
    }

    let borderWidth_Left = getBorderSideWidth(comStyle, 'left')
    if (borderWidth_Left === 0) {
        left += parseFloat(comStyle.paddingLeft)
    }

    let borderWidth_Right = getBorderSideWidth(comStyle, 'right')
    if (borderWidth_Right === 0) {
        right -= parseFloat(comStyle.paddingRight)
    }

    return new DOMRect(left, top, right - left, bottom - top)
}
