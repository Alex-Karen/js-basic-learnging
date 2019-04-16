# 2019-04-16

## 函数

高内聚,低耦合

函数、变量命名是小驼峰格式

### 函数声明

```javascript
function theFirstName() {
    console.log('test');
}

var test = function() {

}
```

### 实参形参

```javascript
//a b c 形参 1 2 3 实参
function test(a, b ,c) {
    arguments[0] = 2;
    console.log(a) //2
    console.log(arguments)
}
test(1, 2, 3);

function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
sum(1,2,3)

function myNumber(target) {
    return +target;
}
//字符串反转并数据大写形式 123->叁贰壹
function reverse(num) {
    var str = '';
    for (var i = num.length - 1; i >= 0; i--) {
        str += transfer(num[i]);
    }
    return str;
}
function transfer(target) {
    switch (target) {
        case "1":
            return '壹';
        case "2" :
            return '贰';
        case "3":
            return '叁';
    }
}
console.log(reverse('321'));
//阶乘
function jc(num) {
    if (num == 1) {
        return 1;
    }

    return num * jc(num-1);
}
```