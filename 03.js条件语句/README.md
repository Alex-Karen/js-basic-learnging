# 2019-04-15

## 条件语句

    if (condition) {
        当条件为 true 时执行的代码
    } else {
        当条件不为 true 时执行的代码
    }

## 循环

    for (var i = 0; i < 10; i++) {
        console.log(i)
    }

    1.var i = 0;
    2.if(i < 10);
    3.i++;
    4.if(i < 10);
    5.i++;
    6....;

    while
    var i = 0;
    while (i < 10) {
        console.log(i)
        i++;
    }

    do...while
    var i = 0;
    do {
        console.log(i)
        i++;
    }while (i < 10)

    编程 - 找规律的过程

## 补充

    switch case

    break 终止循环

    continue 终止本次循环,进入下一次循环

## 初识引用值

    Array

    Objcet

## typeof

    typeof 返回数据类型   返回值string

    number string boolean undefined function object

    typeof null  --> object

## 类型转换

    显示类型转换

        var num = Number('abc')

        parseInt(num, radix) //变成整型  radix 基底(进制2-36)

        parseFloat(100.2)

        String(demo)

        Boolean(demo)

        demo.toString(radix) //undefined/null不能调用toString()

    隐式类型转换

        isNaN(demo)  -> Number(demo)

        ++/— Number(demo)    +/-(一元正负) String(demo)

        */% Number(demo)

        && || ! Boolean()

        < > >= <=

        ==  !=

    2 > 3 < 1 //true

    不发生类型转换

    === !==
