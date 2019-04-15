var _a = 10;
_a += 10 + 1; // a = a + 10 + 1; 21
//x = 123, y = 321, 请交换x y的值
var x = 123,
    y = 321,
    z;
// z = y;
// y = x;
// x = z;
x = x + y;
y = x - y;
x = x - y;

var a = "a" > "b"; //ASCII

var b = Infinity == Infinity;//true

var c = NaN == NaN;//false

var d = 1 && 2 + 2; //d = 4 , 0 && 2 + 2 => 0

2 > 1 && document.write('我很帅');

var div = document.getElementsByTagName('div');

div.onclick = function(e) {
    var event = e || window.event;
}