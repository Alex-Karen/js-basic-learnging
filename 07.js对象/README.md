# 2019-04-19

## 对象

对象创建方法

    对象的创建方法

        字面量 var obj = {}

        构造函数 function Person(){} new Persion

        系统自带   new Object();Array();Number();Boolean();Date();

        自定义

    Object.create(原型)方法

构造函数内部原理

    1.在函数体最前面隐式的加上this = {}

    2.执行 this.xxx = xxx;

    3.隐式的返回this

## 包装类
