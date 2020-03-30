declare global {

    interface EventTarget {

        /**
   * 兼容方法：为事件添加事件处理器
   * @param event : string 必需。描述事件名称的字符串。注意： 不要使用 "on" 前缀。例如，使用 "click" 来取代 "onclick"。
   * @param handler : function  必需。描述了事件触发后执行的函数。
   * @param useCapture : boolean 可选。布尔值，指定事件是否 在捕获或冒泡阶段执行。
   */
  byAddEventListener(event: string, handler: EventListener, useCapture?: boolean ): void;


  /**
   * 兼容方法：移除事件处理器
   * @param event : string 必须。要移除的事件名称。注意： 不要使用 "on" 前缀。例如，使用 "click" 来取代 "onclick"。
   * @param handler : function  必须。指定要移除的函数。
   * @param useCapture : boolean 可选。布尔值，指定移除事件句柄的阶段。
   */
  byRemoveEventListener(event: string, handler: EventListener , useCapture?:boolean): void;





  /**
   * 兼容方法：为多个事件添加事件处理器
   * @param eventList : Array<string> 必需。事件名称数组。注意： 不要使用 "on" 前缀。例如，使用 "click" 来取代 "onclick"。
   * @param handler : function  必需。描述了事件触发后执行的函数。
   * @param useCapture : boolean 可选。布尔值，指定事件是否 在捕获或冒泡阶段执行。
   */
  byAddListenerForMultipleEvent(eventList: string[], handler: EventListener, useCapture?: boolean ): void;





  /**
   * 兼容方法：移除事件处理器
   * @param eventList : Array<string> 必需。需要移除的事件名称数组。注意： 不要使用 "on" 前缀。例如，使用 "click" 来取代 "onclick"。
   * @param handler : function  必须。指定要移除的函数。
   * @param useCapture : boolean 可选。布尔值，指定移除事件句柄的阶段。
   */
  byRemoveListenerForMultipleEvent(eventList: string[], handler: EventListener, useCapture?: boolean ): void;







  /**
   * 兼容方法：为单个事件添加多个事件处理器
   * @param event : string 必需。描述事件名称的字符串。注意： 不要使用 "on" 前缀。例如，使用 "click" 来取代 "onclick"。
   * @param handlerList : Array<function>  必需。需要添加的事件处理器数组。
   * @param useCapture : boolean 可选。布尔值，指定事件是否 在捕获或冒泡阶段执行。
   */
  byAddMultipleListenerForEvent(event: string, handlerList: EventListener[], useCapture?: boolean ): void;





  /**
   * 兼容方法：移除事件处理器
   * @param event : string 必须。要移除的事件名称。注意： 不要使用 "on" 前缀。例如，使用 "click" 来取代 "onclick"。
   * @param handlerList : Array<function>  必需。需要移除的事件处理器数组。
   * @param useCapture : boolean 可选。布尔值，指定移除事件句柄的阶段。
   */
  byRemoveMultipleListenerForEvent(event: string, handlerList: EventListener[], useCapture?: boolean ): void;



    }

}


export {}