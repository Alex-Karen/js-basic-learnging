# 2019-04-26

## 数组的定义

    new Array(length/content)

    字面量

    var arr = [1, 2]

## 读和写

    arr[num] //不可以溢出读 结果undefined

    arr[num] = xxx;//可以溢出写

## 数组常用的方法

    改变原数组

        reverse 数组逆反 返回原数组

        sort 数组排序

        ```cmd
            //必须写俩参数，返回值位负数时前面的数放前面，返回值为正数时后面的数在前，0不动

            arr.sort(function(a, b) {
                return a - b; //升序  b - a //倒序
            })
        ```

        push 数组后面添加数据 返回数组长度

        pop 把数组最后一位剪切 返回最后一位值

        shift 把数组前一位剪切 返回第一位值

        unshift 数组前加数据 返回数组长度

        splice(从第几位开始, 截取多少长度, 在切口处添加新的数据) 返回被截图的数据 (-1倒数第一位)

    不改变原数组

    concat 连接两个数组

    join 数组按字符连接数据每一位,返回字符串 arr.join('1')

    split 与join可逆,按什么拆分成数组 arr.split('-')

    toString 数组输出字符串

    slice 从已有的数组中返回选定的元素 // arr.slice(从该位开始截取, [截取到该位,不写截取到最后])

## 类数组

    可以利用属性名模拟数组的特性

    可以动态的增长length属性

    如果强行让类数组调用push方法，则会根据length属性值的位置进行属性的扩充

## try catch

    try{}catch(e) {}finally{}

    Error.name的六种值对应的信息：

    1. EvalError：eval()的使用与定义不一致
    2. RangeError：数值越界
    3. ReferenceError：非法或不能识别的引用数值
    4. SyntaxError：发生语法解析错误
    5. TypeError：操作数类型错误
    6. URIError：URI处理函数使用不当

## es5严格模式

    “use strict”  不再兼容es3的一些不规则语法。使用全新的es5规范。

    两种用法：

        全局严格模式

        局部函数内严格模式（推荐） 

    就是一行字符串，不会对不兼容严格模式的浏览器产生影响。

    不支持with,arguments.callee,func.caller,变量赋值前必须声明,

    局部this必须被赋值(Person.call(null/undefined) 赋值什么就是什么),拒绝重复属性和参数

with 可以改变作用域链 es5严格模式不支持 影响性能