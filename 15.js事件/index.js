var div = document.getElementsByTagName('div')[0];
div.addEventListener('click', function() {
    console.log('a')
}, false)

// var liCol = document.getElementsByTagName('li'),
//     len = liCol.length;
// for(var i = 0; i < len; i++) {
//     liCol[i].addEventListener('click', function() {
//         console.log(i)
//     })
// }
//封装兼容性的 addEvent(elem, type, handle);方法
function addEvent(elem, type, handle) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handle, false);
    } else if(elem.attachEvent){
        elem.attachEvent('on'+ type, function() {
            handle.call(elem);
        })
    } else {
        elem['on' + type] = handle;
    }
}
//封装阻止默认事件的函数
function cancelHandler(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

var event = event || window.event;
 