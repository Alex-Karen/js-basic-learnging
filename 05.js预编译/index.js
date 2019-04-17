//阶乘 递归(找规律,找出口)
function factorial(n) {
    if ( n == 1 ) {
        return 1;
    }

    return n * factorial(n -1);
}
factorial(5);
//写一个函数，实现斐波那契数列
function fn(n) {
    if ( n == 1 || n == 2 ) {
        return 1;
    }
    return fn(n-1) + fn(n-2);
}

function AO(a) {
    console.log(a)
    var a  = 123;
    console.log(a)
    function a() {}
    console.log(a)
    var b = function(){}
    console.log(b)
}
// AO(1)

function test(a, b) {
    console.log(a);
    c = 0;
    var c;
    a = 3;
    b = 2;
    console.log(b);
    function b() {}
    function d() {}
    console.log(b);
}
// test(1);

var str = false + 1;
var demo = false == 1;
if (typeof(a) && -true + (+undefined) + "") {
    console.log('基础扎实');
}
if (11 + "11" * 2 == 33) {
    console.log('基础扎实');
}
!!" " + !!"" - !!false || console.log('能打印么');