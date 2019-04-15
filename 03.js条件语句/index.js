if (0 && true) {
    console.log('true');
} else {
    console.log('false');
}

var sore = parseInt(window.prompt('input'));
if (sore > 100 || sore < 0) {
    console.log('超出分数范围');
} else if (sore <= 100 && sore >= 90) {
    console.log('优秀');
} else {
    console.log('pass');
}

// 等同于 
// 1 > 2 && document.write('a') 
// if (1 > 2) {
//    document.write('a') 
// }

for (var i = 0; i < 10; i++) {
    console.log(i)
}

var i = 0;
while (i < 100) {
    if (i % 7 == 0 || i % 10 == 7) {
        console.log(i)
    }
    i++;
}

//计算2的n次幂，n可输入，n为自然数
    var n = parseInt(window.prompt('input'));
    var sum = 1;
    for (var i = 0; i < n; i++) {
        sum *= 2;
    }
    console.log(sum)

//计算n的阶乘，n可输入 4! = 4 * 3 * 2 * 1
    var n = parseInt(window.prompt('input'));
    var sum = 1;
    for (var i = 1; i <= n; i++) {
        sum *= i;
    }
    console.log(sum);

//著名的斐波那契额数列  1 1 2 3 5 8 输出第n项
    var n = parseInt(window.prompt('input'));
    var first = 1,
        second = 1,
        third;
    for (var i = 0; i < n-2; i++) {
        third = first + second;
        first = second;
        second = third;
    }
    console.log(third)

//编写一程序，输入一个三位数的正整数，输出时反向输出。如：输入456,输出654
    // var n = parseInt(window.prompt('input'));

//输入a,b,c三个数字，打印出最大的
    var a = parseInt(window.prompt('input'));
    var b = parseInt(window.prompt('input'));
    var c = parseInt(window.prompt('input'));

    if (a > b) {
        if (a > c) {
            console.log(a)
        } else {
            console.log(c)
        }
    } else {
        if (b > c) {
            console.log(b)
        } else {
            console.log(c)
        }
    }
//打印出100以内的质数   只能被1和自身整除
    var count = 0;
    for (var i = 2; i < 100; i++) {
        for (var j = 0; j <= Math.sqrt(i); j++) {
            if ( i % j == 0) {
                count++;
            }
        }
        if (count == 1) {
            console.log(i);
        }
        count = 0;
    }
// swithc case
var num = 1;
switch(num) {
    case 0:
        console.log(0);
    case 1: 
        console.log(1);
    case 2:
        console.log(2);
    default: 
        console.log('aaa')
}

//Array
var arr = [1, 2, 3, 4, 5];
arr[0] = 3;
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//Object
var obj = {
    name: 'Lily',
    age: 18,
    eat(){
        console.log('eat')
    }
}
obj.eat();

//typeof

console.log(typeof 123)

// undefined/string 不能Number()转换 -> NaN
// 2进制转16进制
var num = 10000;
var test = parseInt(num, 2).toString(16);
console.log(test)

console.log(isNaN('abc'))
console.log(isNaN(null)) //false
console.log(isNaN(undefined))//true
var demo = 'abc'
console.log(demo++); //NaN

console.log(typeof(typeof(a)));