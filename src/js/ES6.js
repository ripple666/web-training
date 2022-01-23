/**
 * # ES6新特性
 * - 箭头函数
 */


/**
 * # 箭头函数
 * - 箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this，arguments，super或new.target。
 * - 箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。
 * -由于 箭头函数没有自己的this指针，通过 call() 或 apply() 方法调用一个函数时，只能传递参数（不能绑定this---译者注），他们的第一个参数会被忽略。（这种现象对于bind方法同样成立---译者注）
 */
// 不绑定第一个参数
var adder = {
    base: 1,

    add: function (a) {
        var f = v => v + this.base;
        return f(a);
    },

    addThruCall: function (a) {
        var f = v => v + this.base;
        var b = {
            base: 2
        };

        return f.call(b, a);
    }
};

console.log(adder.add(1));         // 输出 2
console.log(adder.addThruCall(1)); // 仍然输出 2

// 不绑定arguments，
var arr = () => arguments[0];
arr(); // ReferenceError

function foo(n) {
  var f = () => arguments[0] + n; // 隐式绑定 foo 函数的 arguments 对象. arguments[0] 是 n,即传给foo函数的第一个参数
  return f();
}
foo(3,2);//6

// 不绑定this
var obj = {
  a: 10
};

Object.defineProperty(obj, "b", {
  get: () => {
    console.log(this.a, typeof this.a, this);
    return this.a+10;
   // 代表全局对象 'Window', 因此 'this.a' 返回 'undefined'
  }
});

obj.b; // undefined   "undefined"   Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}

