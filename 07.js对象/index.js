var obj = {
    name: 'shuaige',
    age: 18,
    health: 100,
    smoke: function() {
        console.log('I am smoking');
        this.health--;
    },
    drink: function() {
        console.log('I am drinking');
        this.health++;
    }
}
// delete obj.age; //删除属性

function Student(name, age, sex) {
    //var this = {};
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.grade = 2019;
    // return this;
    // return {} 生效, 返回原始值 则不生效
}
var student = new Student('lisi', 18, 'male');

var num = new Number(123);

var str = new String('abc');

var bool = new Boolean('true');

// var num = 4;
// num.len = 3;
// // new Number(4).len = 3; --> delete
// console.log(num.len);

var str = 'abc';
str += 1;//abc1
var test = typeof(str);//string
if (test.length == 6) {
    test.sign = 'typeof返回结果可能是String';
}
console.log(test.sign);

function Person(name, age, sex) {
    var a = 0;
    this.name = name;
    this.age = age;
    this.sex = sex;
    function hello() {
        a++;
        console.log(a);
    }
    this.say = hello;
}
var person = new Person();
person.say();
person.say();
var person1 = new Person();
person1.say();

//x y z 各是多少 1 4 4
var x = 1, y = z = 0;
function add(n) {
    return n = n + 1;
}

y = add(x);

function add(n) {
    return n = n + 3;
}
z = add(x);

function test1(x, y, a) {
    // arguments[2] = 10;
    // console.log(a);
    a = 10;
    console.log(arguments[2])
}
test1(1, 2, 3);
//返回字符串字节长度
var str1 = 'abc ABC 你好';
function returnBytesLength(str) {
    var count,
        len;
        count = len = str.length;
    for (var i = 0; i < len; i++) {
        if (str.charCodeAt([i]) > 255) {
            count++;
        }
    }
    return count;
}
console.log(returnBytesLength(str1))