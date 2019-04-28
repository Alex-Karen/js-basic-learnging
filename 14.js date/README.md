# 2019-04-28

## date

```javascript
Date()        //返回当日的日期和时间。
getDate()    //从 Date 对象返回一个月中的某一天 (1 ~ 31)。
getDay()    //从 Date 对象返回一周中的某一天 (0 ~ 6)。
getMonth()  //从 Date 对象返回月份 (0 ~ 11)。
getFullYear()   //从 Date 对象以四位数字返回年份。
getYear()   //请使用 getFullYear() 方法代替。
getHours()  //返回 Date 对象的小时 (0 ~ 23)。
getMinutes()    //返回 Date 对象的分钟 (0 ~ 59)。
getSeconds()    //返回 Date 对象的秒数 (0 ~ 59)。
getMilliseconds()   //返回 Date 对象的毫秒(0 ~ 999)。
getTime()   //返回 1970 年 1 月 1 日至今的毫秒数。
setDate()   //设置 Date 对象中月的某一天 (1 ~ 31)。
setMonth()  //设置 Date 对象中月份 (0 ~ 11)。
setFullYear()   //设置 Date 对象中的年份（四位数字）。
setYear()   //请使用 setFullYear() 方法代替。
setHours()  //设置 Date 对象中的小时 (0 ~ 23)。
setMinutes()    //设置 Date 对象中的分钟 (0 ~ 59)。
setSeconds()    //设置 Date 对象中的秒钟 (0 ~ 59)。
setTime()   //以毫秒设置 Date 对象。
toString()  //把 Date 对象转换为字符串。
```

## 定时

setInterval()  很不准

setTimeout()

clearInterval()

clearTimeout()

全局对象window上的方法，内部函数this指向window

注意 ：setInterval('func()',1000)

## 获取窗口属性

查看滚动条的滚动距离

    window.pageXOffset/pageYOffset  IE8及IE8以下不兼容

    document.body/documentElement.scrollLeft/scrollTop

        兼容性比较混乱，用时取两个值相加，因为不可能存在两个同时有值

    document.body.scrollLeft + document.documentElement.scrollLeft

    封装兼容性方法，求滚动轮滚动距离getScrollOffset()

查看视口的尺寸

    window.innerWidth/innerHeight   IE8及IE8以下不兼容

    document.documentElement.clientWidth/clientHeight   标准模式下，任意浏览器都兼容

    document.body.clientWidth/clientHeight  适用于怪异模式下的浏览器

    封装兼容性方法，返回浏览器视口尺寸getViewportOffset()

查看元素的几何尺寸

    domEle.getBoundingClientRect()  兼容性很好

        该方法返回一个对象，对象里面有left,top,right,bottom等属性。

        left和top代表该元素左上角的X和Y坐标，right和bottom代表元素右下角的X和Y坐标

        height和width属性老版本IE并未实现

        返回的结果并不是“实时的”

让滚动条滚动

    window上有三个方法  scroll(),scrollTo(),scrollBy()

    三个方法功能类似，用法都是将x,y坐标传入。即实现让滚动轮滚动到当前位置。

    区别：scrollBy()会在之前的数据基础之上做累加。

    eg：利用scrollBy() 快速阅读的功能

## 获取DOM尺寸

查看元素的尺寸

    dom.offsetWidth，dom.offsetHeight

查看元素的位置

    dom.offsetLeft, dom.offsetTop

    对于无定位父级的元素，返回相对文档的坐标。对于有定位父级的元素，返回相对于最近的有定位的父级的坐标。

    dom.offsetParent

    返回最近的有定位的父级，如无，返回body, body.offsetParent 返回null

    eg：求元素相对于文档的坐标

## 脚本化css

读写元素css属性

    dom.style.prop  可读写行间样式，没有兼容性问题，碰到float这样的关键字属性，前面应加css

    eg:float — > cssFloat

    符合属性必须拆解，组合单词变成小驼峰式写法  写入的值必须是字符串格式

查询计算样式

    window.getComputedStyle(ele,null);  计算样式只读

    第二个参数,获取伪元素

    返回的计算样式的值都是绝对值，没有相对单位

    IE8 及 IE8以下不兼容

查询样式

    ele.currentStyle    计算样式只读

    返回的计算样式的值不是经过转换的绝对值

    IE独有的属性

    封装兼容性方法getStyle(obj,prop);

查找,操作样式表

    document.styleSheets

    该属性存储了一个html文档里面的所有css样式表的集合
