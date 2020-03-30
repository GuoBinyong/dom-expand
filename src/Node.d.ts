declare global {
    interface Node {
        /**
 * isChildNodeOf(node)
 * 判断 当前节点 是否是 其它节点node 的 子节点 或 后代节点
 * @param node : Node    被检测的节点
 * @returns boolean
 */
isChildNodeOf(node:Node):boolean;





/**
 * isChildElementOf(element)
 * 判断 当前元素 是否是 其它元素element 的 子元素 或 后代元素
 * @param element : Node    被检测的元素
 * @returns boolean
 */
isChildElementOf(element:Node):boolean;


    }


}


export {}