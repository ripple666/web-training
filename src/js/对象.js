/**
 * # 对象
 * - Object 是 JavaScript 的一种 数据类型 。它用于存储各种键值集合和更复杂的实体。
 * - Objects 可以通过 Object() 构造函数或者使用 对象字面量 的方式创建
 * - 在JavaScript中，几乎所有的对象都是Object类型的实例，它们都会从Object.prototype继承属性和方法，虽然大部分属性都会被覆盖（shadowed）或者说被重写了（overridden）。
 * 
 * ## 静态方法：
 * - Object.assign()；通过复制一个或多个对象来创建一个新的对象。
 * - Object.create(proto，[propertiesObject])；使用指定的原型对象和属性创建一个新对象。
 * - Object.defineProperties()；给对象添加多个属性并分别指定它们的配置。
 * - Object.keys()；返回一个数组，包含所有给定对象自身可枚举属性名称的。
 * - Object.getOwnPropertyNames()；返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名。
 * - Object.getOwnPropertyDescriptor()：返回对象指定的属性配置。
 * - Object.freeze()：冻结对象：其他代码不能删除或更改任何属性。
 * - Object.seal()；防止其他代码删除对象的属性。
 * - Object.entries()；返回给定对象自身可枚举属性的 [key, value] 数组。
 * - Object.getPrototypeOf()：返回指定对象的原型对象，即对象的__proto__。
 * - Object.setPrototypeOf()；设置对象的原型（即内部 [[Prototype]] 属性）。
 * 
 * ## 实例方法：
 * Object.prototype.hasOwnProperty()；返回一个布尔值，用于表示一个对象自身是否包含指定的属性，该方法并不会查找原型链上继承来的属性。
 * Object.prototype.toString()；返回一个代表该对象的字符串。
 * Object.prototype.isPrototypeOf()：返回一个布尔值，用于表示该方法所调用的对象是否在指定对象的原型链中。
 */

/**
 *  Object.create(proto，[propertiesObject])
 *  proto：新创建对象的原型对象。
 *  propertiesObject：Object.defineProperties
 */
// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();

// 用 Object.create实现类式继承
// Shape - 父类(superclass)
function Shape() {
    this.x = 0;
    this.y = 0;
}

// 父类的方法
Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
};

// Rectangle - 子类(subclass)
function Rectangle() {
    Shape.call(this); // call super constructor.
}

// 子类续承父类
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log(rect instanceof Rectangle); // true
console.log(rect instanceof Shape); // true

// Object.assign()
var a = {
    a: {
        b: 1
    }
}
var b = {
    a: {
        b: 2
    }
}
var c = Object.assign(a, b)
console.log(c === a) // true
console.log(a)
// {
//     a: {
//         b: 2
//     }
// }

// Object.create


// Object.defineProperty
const object1 = {};
Object.defineProperty(
    object1,
    'property1',
    { // 描述符，如果一个描述符同时拥有 value 或 writable 和 get 或 set 键，则会产生一个异常。
        // value: 42,
        // writable: true,
        enumerable: false, // 当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。
        // configurable: true, // 当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。
        get: function () {  // 当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的this并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。
            console.log(this) // object1
            this.x = 1 // 会传入this对象
            return property1
        },
        set: function (value) {
            // 中间可以实施其他操作
            property1 = value;
        }
    });

object1.property1 = 77;
for (const key in object1) {
    console.log(key);
    if (Object.hasOwnProperty.call(object1, key)) {
        const element = object1[key];

    }
}
