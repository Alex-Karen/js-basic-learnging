# 2019-04-29

## 如何绑定事件

    ele.onxxx = function (event) {} 兼容性很好，但是一个元素只能绑定一个处理程序，基本等同于写在HTML行间上

    程序this指向是dom元素本身

    obj.addEventListener(type, fn, false);  IE9以下不兼容，可以为一个事件绑定多个处理程序

    程序this指向是dom元素本身

    obj.attachEvent(‘on’ + type, fn); IE独有，一个事件同样可以绑定多个处理程序

    程序this指向window

## 解除绑定事件

    ele.onclick = false/''/null;

    ele.removeEventListener(type, fn, false);

    ele.detachEvent(‘on’ + type, fn);

    注:若绑定匿名函数，则无法解除

## 事件冒泡

    结构上（非视觉上）嵌套关系的元素，会存在事件冒泡的功能，即同一事件，自子元素冒泡向父元素。（自底向上）

    先捕获，后冒泡

## 事件捕获

    结构上（非视觉上）嵌套关系的元素，会存在事件捕获的功能，

    即同一事件，自父元素捕获至子元素（事件源元素）。（自底向上）

    IE没有捕获事件  触发顺序，先捕获，后冒泡

    focus，blur，change，submit，reset，select 等事件不冒泡

## 取消冒泡

    W3C标准 event.stopPropagation();但不支持ie9以下版本

    IE独有 event.cancelBubble = true;

    封装取消冒泡的函数 stopBubble(event)

## 阻止默认事件

    默认事件 — 表单提交，a标签跳转，右键菜单等

    1.return false;  以对象属性的方式注册的事件才生效

    2.event.preventDefault(); W3C标注，IE9以下不兼容

    3.event.returnValue = false; 兼容IE

    封装阻止默认事件的函数 cancelHandler(event);

## 事件对象

    event || window.event 用于IE

    事件源对象:

    event.target   火狐独有的

    event.srcElement  Ie独有的

    这俩chrome都有，兼容性写法

## 事件委托

    利用事件冒泡，和事件源对象进行处理

    优点

    性能 不需要循环所有的元素一个个绑定事件

    灵活 当有新的子元素时不需要重新绑定事件

## 事件分类

    鼠标事件

    click、mousedown、mousemove、mouseup、contextmenu、mouseover、mouseout

    用button来区分鼠标的按键，0/1/2

    DOM3标准规定:click事件只能监听左键,只能通过mousedown 和 mouseup来判断鼠标键

    如何解决mousedown和click的冲突

    键盘事件

    keydown keyup keypress

    keydown > keypress > keyup

    keydown和keypress的区别

    keydown 可以响应任意键盘按键，keypress只可以相应字符类键盘按键

    keypress返回ASCII码，可以转换成相应字符

## 文本操作事件

    input,focus,blur,change

## 窗体操作类(window上的事件)

    window.onscroll window.onload

element setCaputre() //不通用 IE

在处理一个 mousedown 事件过程中调用这个方法来把全部的鼠标事件重新定向到这个元素，直到鼠标按钮被释放或者 document.releaseCapture()被调用。

    onabort     图像加载被中断
    onblur      元素失去焦点
    onfocus     元素获得焦点
    onchange    用户改变域的内容
    onclick     鼠标点击某个对象
    ondblclick  鼠标双击某个
    onerror     当加载文档或图像时发生某个错误
    onkeydown   某个键盘的键被按下
    onkeypress  某个键盘的键被按下或按住
    onkeyup     某个键盘的键被松开
    onload      某个页面或图像被完成加载
    onmousedown 某个鼠标按键被按下
    onmousemove 鼠标被移动
    onmouseout  鼠标从某元素移开
    onmouseover 鼠标被移到某元素之上
    onmouseup   某个鼠标按键被松开
    onreset     重置按钮被点击
    onresize    窗口或框架被调整尺寸
    onselect    文本被选定
    onsubmit    提交按钮被点击
    onunload    用户退出页面

## 移动端事件

    touchstart  触摸开始
    touchmove   拖动
    touchend    触摸结束
    touchenter  移动的手指进入一个dom元素
    touchleave  移动的手指离开一个dom元素
    touchcancel 是在拖动中断时候触发
