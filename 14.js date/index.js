//  封装insertAfter
Element.prototype.insertAfter = function (targetNode, afterNode) {
    var beforeNode = afterNode.nextElementSibling;
    if (beforeNode == null) {
        this.appendChild(targetNode);
    } else {
        this.insertBefore(targetNode, beforeNode);
    }
}
var div = document.getElementsByTagName('div')[0];
var span = document.getElementsByTagName('span')[0];
var p = document.createElement('p');
var strong = document.getElementsByTagName('strong')[0];

//date
var date = new Date();
date.getDate();
date.getMonth();
date.getFullYear();
date.getTime();

// var firstTime = new Date().getTime();
// for(var i = 0; i < 1000000; i++ ) {

// }
// var lastTime = new Date().getTime();
// console.log(lastTime - firstTime)

// var i = 0;
// setInterval(function() {
//     console.log(i)
//     i++;
// }, 1000)

window.pageXOffset; // x滚动条
window.pageYOffset; // y滚动条
//滚动条轮滚动距离
function getScrollOffset() {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}
//返回浏览器视口尺寸
console.log(document.compatMode) //BackCompat(混杂模式) CSS1Compat(标准模式)
function getViewportOffset() {
    if(window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        if (document.compatMode == 'BackCompat') {
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        } else {
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
}
//封装兼容性方法getStyle
function getStyle(elem, prop) {
    if(window.getComputedStyle) {
        return window.getComputedStyle(elem, null)[prop];
    } else {
        return  elem.currentStyle[prop];
    }
}
