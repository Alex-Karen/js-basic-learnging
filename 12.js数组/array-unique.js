//方法一
var arr = [1,23,1,1,1,3,23,5,6,7,9,9,8,5];
function removeDuplicatedItem(arr) {
   for(var i = 0; i < arr.length-1; i++){
       for(var j = i+1; j < arr.length; j++){
           if(arr[i]==arr[j]){
                arr.splice(j,1);//console.log(arr[j]);
                j--;
           }
       }
   }
   return arr;
}

arr2 = removeDuplicatedItem(arr);
console.log(arr);
console.log(arr2);

//方法二
//借助indexOf()方法判断此元素在该数组中首次出现的位置下标与循环的下标是否相等
var ar = [1,23,1,1,1,3,23,5,6,7,9,9,8,5];
function rep2(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) != i) {
            arr.splice(i,1);//删除数组元素后数组长度减1后面的元素前移
            i--;//数组下标回退
        }
    }
    return arr;
}
var a1 = rep2(ar);
console.log(ar);
console.log(a1);

//方法三  利用数组中的filter方法
var arr = ['apple','strawberry','banana','pear','apple','orange','orange','strawberry'];
var r = arr.filter(function(element,index,self){
   return self.indexOf(element) === index;
});
console.log(r);

//方法四  借助新数组 通过indexOf方判断当前元素在数组中的索引如果与循环的下标相等则添加到新数组中
var arr = [1,23,1,1,1,3,23,5,6,7,9,9,8,5];
function rep(arr) {
    var ret = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) == i) {
            ret.push(arr[i]);
        }
    }
    return ret;
}
arr2 = rep(arr);
console.log(arr);
console.log(arr2);

//方法五 利用空对象来记录新数组中已经存储过的元素
var arr = [1,23,1,1,1,3,23,5,6,7,9,9,8,5];
var o={};
var new_arr=[];
for(var i=0;i<arr.length;i++){
    var k=arr[i];
    if(!o[k]){
        o[k]=true;
        new_arr.push(k);
    }
}
console.log(new_arr);

//方法六 借助新数组  判断新数组中是否存在该元素如果不存在则将此元素添加到新数组中
var arr = [1,23,1,1,1,3,23,5,6,7,9,9,8,5];
Array.prototype.reArr = function(){
    var newArr = [];
    for(var i = 0; i < this.length; i++){
        if(newArr.indexOf(this[i])== -1){
            newArr.push(this[i]);
        }
    }
    return newArr;
}
var arr2 = arr.reArr();
console.log(arr); //[ 1, 23, 1, 1, 1, 3, 23, 5, 6, 7, 9, 9, 8, 5 ]
console.log(arr2);//[ 1, 23, 3, 5, 6, 7, 9, 8 ]

//方法七(原数组长度不变但被按字符串顺序排序) 借助新数组  判断新数组中是否存在该元素如果不存在则将此元素添加到新数组中
var arr = [1,23,1,1,1,3,23,5,6,7,9,9,8,5];
function removeRepEle(ar) {
    var ret = [],
        end;//临时变量用于对比重复元素
    ar.sort();//将数重新组排序
    end = ar[0];
    ret.push(ar[0]);
    for (var i = 1; i < ar.length; i++) {
        if (ar[i] != end) {//当前元素如果和临时元素不等则将此元素添加到新数组中
            ret.push(ar[i]);
            end = ar[i];
        }
    }
    return ret;
}

arr2 = removeRepEle(arr);
console.log(arr);//[ 1, 1, 1, 1, 23, 23, 3, 5, 5, 6, 7, 8, 9, 9 ]
console.log(arr2);//[ 1, 23, 3, 5, 6, 7, 8, 9 ]

//方法八(此方法没有借助新数组直接改变原数组,并且去重后的数组被排序)
var arr = [1,23,1,1,1,3,23,5,6,7,9,9,8,5];
function removeRepEle(ar) {
    var  end;//临时变量用于对比重复元素
    ar.sort();//将数重新组排序
    end = ar[0];
    for (var i = 1; i < ar.length; i++) {
        if (ar[i] == end) {//当前元素如果和临时元素相等则将此元素从数组中删除
            ar.splice(i,1);
            i--;
        }else{
            end = ar[i];
        }
    }
    return ar;
}
arr2 = removeRepEle(arr);
console.log(arr); //[ 1, 23, 3, 5, 6, 7, 8, 9 ]
console.log(arr2);//[ 1, 23, 3, 5, 6, 7, 8, 9 ]

//方法九(双层循环改变原数组)
var arr = [1, 1, 1, 3, 4, 4, 4, 5, 5, 5, 5, 4, 6];
function removeArrayRepElement(arr){
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j] && i != j) {//将后面重复的数删掉
                arr.splice(j, 1);
            }
        }
    }
    return arr;
}
var arr2  = removeArrayRepElement(arr);
console.log(arr); //[ 1, 3, 4, 5, 6 ]
console.log(arr2);//[ 1, 3, 4, 5, 6 ]

//方法十(借助新数组)
var arr = [12, 2, 44, 3, 2, 32, 33, -2, 45, 33, 32, 3, 12];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    var repArr = [];//接收重复数据后面的下标
    //内层循环找出有重复数据的下标
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            repArr.push(j);//找出后面重复数据的下标
        }
    }
    //console.log(repArr);
    if (repArr.length == 0) {//若重复数组没有值说明其不是重复数据
        newArr.push(arr[i]);
    }
}
console.log(newArr);//[ 44, 2, -2, 45, 33, 32, 3, 12 ]