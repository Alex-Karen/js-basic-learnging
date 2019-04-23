function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
function Student(name, age, sex, tel, grade) {
    Person.call(this, name, age, sex);
    this.tel = tel;
    this.grade = grade;
}
var student = new Student('x', 18, 'male', 129, 2019);
// Person.prototype = {
//     name: 'Tom'
// }
// var person = new Person();
// Objcet.prototype
