//选项卡
var btn = document.getElementsByTagName('button');
var div = document.getElementsByClassName('content');
for (var i = 0; i < btn.length; i++) {
    (function(i) {
        btn[i].onclick = function() {
            for (var j = 0; j < btn.length; j++) {
                btn[j].className = '';
                div[j].style.display = 'none';
            }
            this.className = 'active';
            div[i].style.display = 'block';
        }
    }(i))
}
//小方块运动
var div = document.createElement('div');
document.body.appendChild(div);
div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'red';
div.style.position = 'absolute';
div.style.left = "0";
div.style.top = "0";
// var speed = 1;
// var timer = setInterval(function() {
//     speed += speed / 20;
//     div.style.left = parseInt(div.style.left) + speed + 'px';
//     div.style.top = parseInt(div.style.top) + speed + 'px';
//     if (parseInt(div.style.top) > 500 && parseInt(div.style.left) > 500) {
//         clearInterval(timer);
//     }
// }, 1000);
document.onkeydown = function(e) {
    console.log(e)
    switch(e.which) {
        case 38:
            div.style.top = parseInt(div.style.top) - 10 + 'px';//上
            break;
        case 40:
            div.style.top = parseInt(div.style.top) + 10 + 'px';//下
            break;
        case 37:
            div.style.left = parseInt(div.style.left) - 10 + 'px';//左
            break;
        case 39:
            div.style.left = parseInt(div.style.left) + 10 + 'px';//右
            break;
    }
}
// var demo = document.querySelectorAll('.content')
var demo = document.querySelector('#demo');
//节点树
demo.parentNode;
demo.childNodes; //[text, comment, text, span, text, strong, text]
demo.firstChild;
demo.lastChild;
demo.nextSibling;
//元素节点树
demo.parentElement;
demo.children;
demo.firstElementChild;
demo.lastElementChild;
demo.nextElementSibling;
//节点属性 nodeName nodeType nodeValue attributes
demo.firstChild.nodeName;
demo.childNodes[1].nodeValue; //修改注释节点内容

//获取元素所有元素子节点 不用children
function retElementChild(node) {
    var temp = {
            length: 0,
            push: Array.prototype.push,
            splice: Array.prototype.splice
        },
        child = node.childNodes,
        len = child.length;
    for (var i = 0; i < len; i++) {
        if (child[i].nodeType == 1) {
            temp.push(child[i]);
        }
    }
    return temp;
}

// demo.attributes[0]//属性节点 id='demo'

document.body;
document.head;
document.documentElement;

function retParent(elem, n) {
    while (elem && n) {
        elem = elem.parentElement;
        n--;
    }
    return elem;
}

function retSibling(e, n) {
    while(e && n) {
        if (n > 0) {
            if (e.nextElementSibling) {
                e = e.nextElementSibling;
            } else {
                for (e = e.nextSibling; e && e.nodeType != 1; e = e.nextSibling);
            }
            n--;
        } else {
            e = e.previousElementSibling;
            n++;
        }
    }
    return e;
}

var str = demo.getAttribute('id');
demo.setAttribute('class', 'demo')

//改class
demo.className = 'demo1';