parseInt(3, 8);
parseInt(3, 2);
parseInt(3, 0);

function isNaN(num) {
    var ret = Number(num);
    ret += '';
    if (ret == 'NaN') {
        return true;
    } else {
        return false;
    }
}

// {} == {}  //false  引用值比对 地址

function test() {
    console.log(this)
}
// test();
// 全局this -> window
// console.log(this);

//谁调用function this指向谁
var obj = {
    a: 123,
    say: function() {
        console.log(this.a)
    }
}
obj.say();
//this测试题
var name = '222';
var a = {
    name: '111',
    say: function() {
        console.info(this.name)
    }
}
var fun = a.say;
fun();
a.say();
var b = {
    name: '333',
    say: function(fun) {
        fun();//没人调用
    }
}
b.say(a.say);
b.say = a.say;
b.say();