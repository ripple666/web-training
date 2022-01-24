/**
 * # 继承
 * - 原型式的继承
 * - class继承
 */

/**
 * ## 原型式继承
 * - call方法继承父类构造器中属性
 * - Children.prototype = Object.create(Parent.prototype) 继承父类prototype中的方法
 * - Children.defineProperty(Child.prototype,constructor ,{value:Children,enumerable: false,writable:true}) 更新子类中constructor为Child，并配置描述为不可枚举
 */

//定义Person()构造器
function Person(first, last, age, gender, interests) {
    // 所有属性都定义在构造器中
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
};
//所有的方法都定义在构造器的原型
Person.prototype.greeting = function () {
    alert('Hi! I\'m ' + this.name.first + '.');
};

// 定义一个Teacher类
function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests); // 1）当Teacher运行时会，会将Person构造器中所有属性绑定到this上
    this.subject = subject;
}
// 2）继承父类prototype方法
Teacher.prototype = Object.create(Person.prototype);

// 3.0）更新子类prototype的 constructor指向。
Teacher.prototype.constructor = Teacher;  // 此种写法赋予的constructor还能更改，建议使用Object.definePropert

// 3.1）更新子类prototype的 constructor指向。
Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
});

/**
 * 类语法继承
 */
class Person {
    constructor(age) {
        this.age = age;
    }
}
class Teacher extends Person {
    constructor(age,grade) {
        super(age);// super()操作符实际上是父类构造函数
        this.grade = grade;
    }
}
