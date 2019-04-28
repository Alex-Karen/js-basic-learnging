# 2019-04-28

## DOM

    DOM — > Document Object Model

    DOM定义了表示和修改文档所需的对象、这些对象的行为和属性以及这些对象之间的关系。

    DOM对象即为宿主对象，由浏览器厂商定义，用来操作html和css功能的一类对象的集合。

    也有人称DOM是对HTML以及XML的标准编程接口。

### 对节点的增删改查

查看元素节点

    document代表整个文档

    document.getElementById() //元素id 在Ie8以下的浏览器，不区分id大小写，而且也返回匹配name属性的元素

    document.getElementsByTagName() // 标签名

    document.getElementByName(); //需注意，只有部分标签name可生效（表单，表单元素，img，iframe）

    document.getElementsByClassName() // 类名 -> ie8和ie8以下的ie版本中没有，可以多个class一起

    document.querySelector() // css选择器   在ie7和ie7以下的版本中没有 不是实时的

    document.querySelectorAll() // css选择器 在ie7和ie7以下的版本中没有 不是实时的

节点的类型

    元素节点   —— 1

    属性节点   —— 2

    文本节点   —— 3

    注释节点   —— 8

    document  —— 9

    DocumentFragment  ——  11

获取节点类型   nodeType

遍历节点树:

    parentNode -> 父节点  (最顶端的parentNode为#document);

    childNodes -> 子节点们

    firstChild -> 第一个子节点

    lastChild -> 最后一个子节点

    nextSibling->后一个兄弟元素 previousSibling->前一个兄弟元素

基于元素节点树的遍历

    parentElement -> 返回当前元素的父元素节点 (IE不兼容)

    children -> 只返回当前元素的元素子节点

    node.childElementCount  === node.children.length当前元素节点的子元素节点个数(IE不兼容)

    firstElementChild -> 返回的是第一个元素节点(IE不兼容)

    lastElementChild -> 返回的是最后一个元素节点(IE不兼容)

    nextElementSibling / previousElementSibling ->返回后一个/前一个兄弟元素节点（IE不兼容)

节点的四个属性

    nodeName    元素的标签名，以大写形式表示,只读

    nodeValue   Text文本节点或Comment注释节点的文本内容,可读写

    nodeType    该节点的类型，只读

    attributes  Element节点的属性集合

节点的一个方法  Node.hasChildNodes();

DOM基本操作

    1.getElementById方法定义在Document.prototype上，即Element节点上不能使用。

    2.getElementsByName方法定义在HTMLDocument.prototype上，

        即非html中的document以外不能使用(xml document,Element)

    3.getElementsByTagName方法定义在Document.prototype 和 Element.prototype上

    4.HTMLDocument.prototype定义了一些常用的属性，body,head,分别指代HTML文档中的<body><head>标签

        document.documentElement --> html。

    5.Document.prototype上定义了documentElement属性，指代文档的根元素，在HTML文档中，他总是指代<html>元素

    6.getElementsByClassName、querySelectorAll、querySelector在Document,Element类中均有定义

    增

        document.createElement()

        document.createTextNode()

        document.createComment()

        document.createDocumentFragment()

    插

        parentNode.appendChild()

        parentNode.insertBefore(a, b)

    删

        parent.removeChild()

    替换

        parent.replaceChild(new, origin);

    Element节点的一些属性

        innerHTML

        innerText(火狐不兼容) / textContent(老版本IE不好使)

        Element节点的一些方法

        ele.setAttribute()

        ele.getAttribute()