Father.prototype.lastNane = 'deng';
function Father() {

}
function Son() {

}
Son.prototype = Father.prototype;//共享原型

function inherit(Target, Origin) {
    Target.prototype = Origin.prototype;
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
//命名空间 对象
var org = {
    part1: {

    },
    part2: {

    }
}
//闭包 避免全局变量污染
var init = (function () {
    var name = 'abc';
    function callName() {
        console.log(name);
    }
    return function() {
        callName();
    }
}());
//链式操作
var obj = {
    smoke: function() {
        console.log('a')
        return this
    },
    drink: function() {
        console.log('b')
        return this
    },
    perm: function() {
        console.log('c')
        return this
    }
}
obj.smoke().drink().perm();

//属性查看 隐式转换bj.name --> obj['name]
var obj1 = {
    name: 'abc'
}
console.log(obj1['name']);
var xu = {
    wife1: {name: 'a'},
    wife2: {name: 'b'},
    wife3: {name: 'c'},
    wife4: {name: 'd'},
    sayWife: function(num) {
        return this['wife' + num]
    }
}
//枚举 遍历
var obj2 = {
    name: 'a',
    age: 18,
    sex: 'male',
    //prop: 123
    __proto__: {
        lastName: 'deng'
    }
}
for(var prop in obj2) {
    if (obj2.hasOwnProperty(prop)) {
        console.log(obj2[prop])//prop当成属性, 隐式obj2.prop--> obj2['prop']
    }
}
obj2.hasOwnProperty(prop);

Object.prototype.toString.call([]);

//区别数组对象方法
//1constructor
// [].constructor {}.constructor
//2instanceof
//[] instanceof Array  {} instanceof Object
//3toString.call([])
// Object.prototype.toString = function () {
    //识别this 返回相应结果
// }