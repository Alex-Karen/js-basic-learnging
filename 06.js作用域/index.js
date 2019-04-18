function a() {
    function b() {
        var b = 234;
    }
    var a = 123;
    b();
    console.log(a)
}
var glob = 100;
// a();
/*
    a defined a.[[scope]] --> 0:GO {}
    a doing   a.[[scope]] --> 0:AO {}   1:GO {}
*/
function a() {
    var num = 100;
    function b() {
        num++;
        console.log(num);
    }
    var aaa = 234;
    return b;
}
var glob = 100;
var demo = a();
// demo();//101
// demo();//102

function test() {
    var num = 100;
    function a() {
        num--;
        console.log(num)
    }
    function b() {
        num++;
        console.log(num)
    }
    return [a, b];
}
var testArr = test();
// testArr[0]();
// testArr[1]();

//立即执行函数
(function run() {
    var abc = 1;
    console.log(abc);
}());//建议用这种方式
// (function run() {
//     console.log('hello world');
// }())
// + function run() {
//     console.log('run')
// }()
// - function run() {
//     console.log('run')
// }()
// ! function run() {
//     console.log('run')
// }()
// var test = function(n) {
//     console.log(n);
//     return n; 
// }(1);
//不报错 拆分换行(1, 2, 3, 4);
// function hello( a, b, c, d ) {
//     console.log( a + b + c + d );
// }( 1, 2, 3, 4 );