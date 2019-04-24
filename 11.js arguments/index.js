//立即执行函数 10的阶乘
var num = (function(n) {
    if (n == 1) {
        return 1;
    }
    return n * arguments.callee(n-1);
}(10))

function test() {
    console.log(arguments.callee)
    function demo() {
        console.log(arguments.callee)
    }
    demo();
}
// test();
// this 
var foo = '123';
function print() {
    this.foo = '234';
    console.log(foo);
}
// print(); 234
// new print(); 123

//运行test() new test() 结果分别是什么
var a = 5;
function demo1() {
    a = 0;
    console.log(a);
    console.log(this.a);
    var a;
    console.log(a);
    // console.log(this)
}
// demo1();
// new demo1(); //0 undefined 0

function hello() {
    var marty = {
        name: 'marty',
        printName: function() {
            console.log(this.name);
        }
    }
    var test1 = {name: 'test1'};
    var test2 = {name: 'test2'};
    var test3 = {name: 'test3'}
    test3.printName = marty.printName;
    var printName2 = marty.printName.bind({name: 123});
    marty.printName.call(test1);
    marty.printName.apply(test2);
    marty.printName();
    printName2();
    test3.printName();
}
// hello();

var bar = {a: '003'}
function Bar() {
    bar.a = 'a';
    Object.prototype.b = 'b';
    return function inner() {
        console.log(bar.a);
        console.log(bar.b);
    }
}
// Bar()();

//浅克隆
var obj = {
    name: 'aaa ',
    age: 18,
    card: ['visa', 'unionpay'],
    wift: {
        name: 'abc',
        son: {
            name: 'bbb'
        }
    }
}
var obj1 = {

}
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
deepClone(obj, obj1)

//三目运算
var num = 1 > 0 ? ('10' > '9' ? 1 : 0) : 2;