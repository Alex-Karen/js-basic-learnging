//阶乘 递归(找规律,找出口)
function factorial(n) {
    if ( n == 1 ) {
        return 1;
    }

    return n * factorial(n -1);
}
//圣杯模式
function inherit(Target, Origin) {
    function F(){};
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.constuctor = Target;
    Origin.prototype.uber = Origin.prototype;
}
var inherit = (function() {
    function F(){};
    return function inherit(Target, Origin) {
        F.prototype = Origin.prototype;
        Target.prototype = new F();
        Target.prototype.constuctor = Target;
        Origin.prototype.uber = Origin.prototype; 
    }
}());
// isNaN
function isNaN(num) {
    var ret = Number(num);
    return (ret += '') == 'NaN';
}
//浅克隆
function clone(origin, target) {
    var target = target || {}
    for (var prop in origin) {
        target[prop] = origin[prop ]
    }
    return target;
}
//深克隆
function deepClone(origin, target) {
    var target = target || {},
        toStr = Object.prototype.toString,
        arrStr = '[object Array]';
    for(var prop in origin) {
        if(origin.hasOwnProperty(prop)) {
            if(origin[prop] != 'null' && typeof(origin[prop]) == 'object') {
                target[prop] = toStr.call(origin[prop]) == arrStr ? [] : {};
                deepClone(origin[prop], target[prop]);
            } else {
                target[prop] = origin[prop];
            }
        }
    }
    return target;
}
//封装typeof方法
function type(target) {
    //1引用值、原始值2区分引用值
    var ret = typeof(target);
    var template = {
        '[object Array]': 'array',
        '[object Object]': 'object',
        '[object Number]': 'number - object',
        '[object Boolean]': 'boolean',
        '[object String]': 'string'
    }
    if (target == null) {
        return 'null';
    }
    if (ret == 'object') {
        var str = Object.prototype.toString.call(target);
        return template[str]
    } else {
        return ret;
    }
}
//自己模拟push方法
Array.prototype.push = function() {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this.length;
}
//数组去重
Array.prototype.unique = function() {
    var temp = {};
    var arr = [],
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (!temp[this[i]]) {
            temp[this[i]] = 'abc';
            arr.push(this[i]);
        }
    }
    return arr;
}