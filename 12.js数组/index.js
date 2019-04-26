var arr = [1, 2, 3, 5];
// arr.push(10); //返回数组长度
//自己模拟push方法
// Array.prototype.push = function() {
//     for (var i = 0; i < arguments.length; i++) {
//         this[this.length] = arguments[i];
//     }
//     return this.length;
// }
// arr.push(10, 1)

arr.splice(3, 0, 4)

var splice = function(pos) {
    pos += pos > 0 ? 0 : this.length;
    // pos >= 0 || pos < this.length
}

//随机打乱数组顺序 然后返回
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
arr1.sort(function(a, b) {
    return Math.random() - 0.5;
});

// arr.concat(arr1);

var newArr = arr.slice(1, 3) // arr.slice() 截取全部 arr.slice(1) 第一位到最后

var str = arr.join('-');

str.split('-');

//类数组
// var obj = {
//     "0": "a",
//     "1": "b",
//     "2": "c",
//     "length": 2,
//     "push": Array.prototype.push,
//     "splice": Array.prototype.splice
// }

var obj = {
    "2": "a",
    "3": "b",
    "length": 2,
    "push": Array.prototype.push,
    // "splice": Array.prototype.splice
}
obj.push('c')
obj.push('d')

//封装typeof方法
function type(target) {
    //1引用值、原始值2区分引用值
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
    if (typeof(target) == 'object') {
        var str = Object.prototype.toString.call(target);
        return template[str]
    } else {
        return typeof(target);
    }
}
//数组去重 在原型链上编程
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
var arr2 = [1, 1, 1, 1, 0, 0, 0, 2, 2];

//包装类
var num = 123;
num.abc = 'abc';
//new Number(num).abc = 'abc'; --> delete
console.log(num.abc); //undefined 重新new Number(num).abc

var num = 123; //delete 不能删除  经过var操作的属性, window,这种属性叫不可配置属性,不可删除

//with 可以改变作用域链
var name = 'a';
var obj = {
    name: 'b'
}
function test() {
    var name = 'c';
    with(obj) {
        console.log(name)
    }
}