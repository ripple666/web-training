/**
 * # 函数的 this 关键字
 * 与其他语言相比，函数的 this 关键字在 JavaScript 中的表现略有不同，此外，在严格模式和非严格模式之间也会有一些差别。
 * 
 * - 在绝大多数情况下，函数的调用方式决定了 this 的值（运行时绑定）,this 不能在执行期间被赋值。
 * - ES5 引入了 bind 方法来设置函数的 this 值，而不用考虑函数如何被调用的。
 * - 箭头函数不提供自身的 this 绑定（this 的值将保持为闭合词法上下文的值）， 被设置为他被创建时的环境
 * - 类中this 是一个常规对象。类中所有非静态的方法都会被添加到 this 的原型中
 * - 
 * 
 * bind函数
 * call函数
 * apply函数
 * 
 */


/**
 * 函数运行时的this指向调用他的对象
 */
var a1 = 1;
function fn1() {
    console.log(this.a1)
}
fn1() // 1 ,window.fn()

const test = {
    prop: 42,
    func: function () {
        return this.prop;
    },
};
console.log(test.func()); // 42 


/**
 * 如果该函数是一个构造函数，this指针指向它自己的实力
 */
function Fn2() {
    this.age = 0;
    setInterval(function growUp() {
        console.log(this);
        this.age++;
    }, 1000);
}

var fn2 = new Fn2();

console.log(Fn2.age) // undefined
console.log(fn2.age) // 0
console.log(age) // ReferenceError ，显示undefined,过至少1000毫秒之后是NAN

// 严格模式下的this，没有this
function f2() {
    "use strict"; // 这里是严格模式
    return this;
}
f2() === undefined; // true

/**
 * 类中this
 */
class Example {
    constructor() {
        const proto = Object.getPrototypeOf(this); // this是一个常规对象，获取this的__proto__
        console.log(Object.getOwnPropertyNames(proto)); // 获取__proto__中所有的属性名
    }
    first() { }
    second() { }
    static third() { }
}

new Example(); // ['constructor', 'first', 'second']

// 箭头函数中使用this， this被设置为他被创建时的环境
var globalObject = this;
var foo = () => this;
var obj = {foo: foo};
console.log(obj.foo() === globalObject); // true
console.log(foo.call(obj) === globalObject); // true
foo = foo.bind(obj);
console.log(foo() === globalObject); // true

var name = 'window'
var obj = {
    name:'object',
    fn: function(){
        var fn = ()=> console.log(this.name)  // var fn = ()=>{ console.log(this.name)} 两种写法一模一样
        return fn
    }
    
}
obj.fn().call() //object
obj.fn().call(this) //object，箭头函数第一个参数被忽略
obj.fn().call(undefined) //object

// 创建一个含有bar方法的obj对象，
// bar返回一个函数，
// 这个函数返回this，
// 这个返回的函数是以箭头函数创建的，
// 所以它的this被永久绑定到了它外层函数的this。
// bar的值可以在调用中设置，这反过来又设置了返回函数的值。
var obj = {
    bar: function() {
      var x = (() => this);
      return x;
    }
  };
  
  // 作为obj对象的一个方法来调用bar，把它的this绑定到obj。
  // 将返回的函数的引用赋值给fn。
  var fn = obj.bar();
  
  // 直接调用fn而不设置this，
  // 通常(即不使用箭头函数的情况)默认为全局对象
  // 若在严格模式则为undefined
  console.log(fn() === obj); // true
  
  // 但是注意，如果你只是引用obj的方法，
  // 而没有调用它
  var fn2 = obj.bar;
  // 那么调用箭头函数后，this指向window，因为它从 bar 继承了this。
  console.log(fn2()() == window); // true