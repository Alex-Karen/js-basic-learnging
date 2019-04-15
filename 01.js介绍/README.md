# 2019-04-14

浏览器组成

    shell部分

    内核部分(渲染引擎、js引擎、其他模块)

逼格

    解释性语言
        编译 c c++
            优点：快
            不足：移植性不好
        解释 js php python
            优点：跨平台
            不足：稍微慢
    单线程 同步异步 link异步加载css 同一时间只能做一件事
    ECMA标注
        为了取得技术优势，微软推出了JScript，CEnvi推出ScriptEase，
        与JavaScript同样可在浏览器上运行。为了统一规格JavaScript兼容于ECMA标准，因此也称为ECMAScript。

js执行队列

    轮转时间片

js三大部分

    ECMAScript DOM BOM

主流浏览器及其内核

    firefox     gecko
    chrome      webkit/blink
    ie          trident
    opera       presto  
    safari      webkit

js引入

    页面内嵌`<script></script>`标签

    外部引入`<script src=“location”></script>`若同时引入外部文件标签内部含有js代码,内部代码不生效

    为符合web标准（w3c标准中的一项）结构、样式、行为相分离，通常会采用外部引入

js基础语法

    变量(variable)

    变量名必须以英文字母、_、$ 开头，变量名可以包括英文字母、_、$、数字，不可以用系统的关键字、保留字作为变量名

    数据类型

        原始值 Number String Boolean Undefined Null

            stack(栈) first in last off

        引用值 Array Function Object

            heap(堆)

        js语法错误会引发后续代码终止，但不会影响其它js代码块
