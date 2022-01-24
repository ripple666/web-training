/**
 * #原型
 * JavaScript 常被描述为一种基于原型的语言 (prototype-based language)——每个对象拥有一个原型对象prototype，
 * 
 * ## 原型链
 * 对象以其原型为模板、从中原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，
 * 它解释了为何一个对象会拥有定义在其他对象中的属性和方法。
 * 
 */

/**
 * 原型
 */
function A(){
    this.A = 'a'
}
A.prototype.A = 'a'
var a = new A()
console.log(A.prototype) // {A: 'a', constructor: ƒA}