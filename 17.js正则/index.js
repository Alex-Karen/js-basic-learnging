var reg = /abc/;
// var ret = new RegExp('abc','igm');
var str = 'abcd';

var str = /[\s\S]/; //一切字符  \d\D  \w\D

//检查字符串首位是否含有数字
// var ret = /^\d|\d$/g; //reg.test(str)

//反向引用
var str = 'aaaabbbb';
var reg = /(\w)\1\1\1/g;

// the-first-name -> theFirstName
var str = 'the-first-name';
var reg = /-(\w)/g;
var ret = str.replace(reg, function($, $1) {
    return $1.toUpperCase();
})

// 字符串去重

var str = 'aaaabbbbccc';
var reg = /(\w)\1*/g;
var ret = str.replace(reg, "$1")

var str = '10000000000';
var reg = /(?=(\B)(\d{3})+$)/g;
var ret = str.replace(reg, '.')