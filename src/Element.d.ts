
declare global {

    interface Point {
        x:number;
        y:number;
    }

    interface ComPoint {
        x:number;
        y:number;
        left:number;
        top:number;
    }


    interface Element {

        /**
 * 计算元素相对指定的祖先节点 parentNode 的偏移量
 * @param parentNode : Element  祖先节点
 * @return {x:number,y:number,left:number,top:number}   x、leftL: 水平方向的偏移量；y、top : 垂直方向的偏移量；
 */
scrollDistanceFromParent(parentNode:Element):ComPoint;




/**
 * 计算元素相对文档的偏移量
 * @return {x:number,y:number,left:number,top:number}   x、leftL: 水平方向的偏移量；y、top : 垂直方向的偏移量；
 */
offsetFromDocument():ComPoint;








/**
 * 计算指定元素相对于当前元素之间的可视的距离坐标
 * @param toDom : Element  指定元素
 * @return {x:number,y:number,left:number,top:number}  x、left: 水平方向的的距离；y、top : 垂直方向的距离；
 */
distanceToDom(toDom:Element):ComPoint;


//元素位置距离：结束



//元素行字数：开始

  /**
   * isVertical : boolean  表示元素的内容是否是垂直方向排列
   */
readonly isVertical:boolean;


  /**
   * computedLineHeight : number  返回元素的计算后的行高
   */
readonly computedLineHeight:number;




  /**
   * contentHeight : number   元素内容区域的高度
   */
  readonly contentHeight:number;




  /**
   * contentWidth : number   元素内容区域的宽度
   */
  readonly contentWidth:number;





  /**
   * scrollContentHeight : number   元素的滑动内容区域的高度
   */
  readonly scrollContentHeight:number;






  /**
   * scrollContentWidth : number   元素的滑动内容区域的宽度
   */
  readonly scrollContentWidth:number;






  /**
   * numberOfLinesOnClient : number  返回能在元素的 client 中能显示文字的最大行数
   */
  readonly numberOfLinesOnClient:number;





  /**
   * numberOfCharsPerLineOnClient : number  返回能在元素的 client 中每行能显示文字的最大字数
   */
  readonly numberOfCharsPerLineOnClient:number;





  /**
   * numberOfCharsOnClient : number  返回能在元素的 client 中能显示文字的最大字数
   * 注意：
   * 该值是 对 numberOfLinesOnClient 和 numberOfCharsPerLineOnClient 四舍五入后的乘积
   */
  readonly numberOfCharsOnClient:number;






  /**
   * numberOfLinesOnScroll : number  返回能在元素的 滑动区域 中能显示文字的最大行数
   */
  readonly numberOfLinesOnScroll:number;




  /**
   * numberOfCharsPerLineOnScroll : number  返回能在元素的  滑动区域 中每行能显示文字的最大字数
   */
  readonly numberOfCharsPerLineOnScroll:number;





  /**
   * numberOfCharsOnClient : number  返回能在元素的 滑动区域 中能显示文字的最大字数
   * 注意：
   * 该值是 对 numberOfLinesOnScroll 和 numberOfCharsPerLineOnScroll 四舍五入后的乘积
   */
  readonly numberOfCharsOnScroll:number;




/**
 * calcClientLengthOfLines(lineNumber)
 * 计算刚好容纳指定的 行数 时 元素的尺寸
 * @param lineNumber : number  行数
 */
calcClientLengthOfLines(lineNumber?:number):{length:number, visible:boolean};








/**
 * setNumberOfLines(lineNumber)
 * 给元素设置相应的尺寸以使能刚好容纳指定的 行数
 * @param lineNumber : number | undefined | null    行数 ; 当值为 undefined | null 时，清除之前关于行数的设置
 */
setNumberOfLines(lineNumber?:number):void;







/**
 * setNumberOfChars(charNumber)
 * 给元素设置相应的尺寸以使每行能刚好容纳指定的 字数
 * @param charNumber : number | undefined | null    字数 ; 当值为 undefined | null 时，清除之前关于字数的设置
 */
setNumberOfChars(charNumber?:number):void;







/**
 * setNumberOfLinesAndChars(lineNumber,charNumber)
 * @param lineNumber : number | undefined | null    行数 ; 当值为 undefined | null 时，清除之前关于行数的设置
 * @param charNumber : number | undefined | null    字数 ; 当值为 undefined | null 时，清除之前关于字数的设置
 */
setNumberOfLinesAndChars(lineNumber?:number,charNumber?:number):void;



//元素行字数：结束







    }


}


export {}