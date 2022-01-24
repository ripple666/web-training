/**
 * # Array
 * JavaScript的 Array 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。
 * 使用非整数并通过 方括号 或 点号 来访问或设置数组元素时，所操作的并不是数组列表中的元素，而是数组对象的 属性集合 上的变量。
 * 
 * ## 静态方法：
 * Array.from()；从类数组对象或者可迭代对象中创建一个新的数组实例
 * Array.isArray()；用来判断某个变量是否是一个数组对象
 * Array.of()；根据一组参数来创建新的数组实例，支持任意的参数数量和类型
 * 
 * ## 实例属性：
 * Array.prototype.length
 * 
 * ## 实例方法
 * - Array.prototype.reduce()；对数组中的每个元素执行一个由您提供的reducer函数（升序执行）
 * - Array.prototype.slice()；通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容
 * - Array.prototype.includes(valueToFind[, fromIndex])；判断一个数组是否包含一个指定的值，如果包含则返回 true，否则返回 false
 * - Array.prototype.find(callback[, thisArg])；返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
 * - Array.prototype.findIndex(callback[, thisArg])；返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1
 * - Array.prototype.concat(value1[, value2[, ...[, valueN]]])；数组和/或值，将被合并到一个新的数组中
 * - Array.prototype.flat([depth])；按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
 * - Array.prototype.sort()；对数组元素进行原地排序并返回此数组
 * - Array.prototype.unshift()；将一个或多个元素添加到数组的头部，并返回该数组的新长度
 * - Array.prototype.every()；测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值
 * - Array.prototype.reverse()；将数组中元素的位置颠倒，并返回该数组。该方法会改变原数组
 * - Array.prototype.splice()；通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容
 * - Array.prototype.shift()；从数组中删除第一个元素，并返回该元素的值
 * - Array.prototype.some()；测试数组中是不是至少有一个元素通过了被提供的函数测试
 * - Array.prototype.at(index)；返回给定索引处的数组项。接受从最后一项开始倒数的负整数。
 * - Array.prototype.copyWithin(target[, start[, end]])；浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度
 * - Array.prototype.entries()；返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对
 * - Array.prototype.values()；返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值
 * - Array.prototype.fill()；用一个固定值填充一个数组中从起始索引到终止索引内的全部元素
 * - Array.prototype.filter()；创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
 * - Array.prototype.flatMap(callback(currentValue[, index[, array]])[, thisArg]), 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。
 * - Array.prototype.indexOf(searchElement[, fromIndex])；返回在数组中可以找到一个给定元素的第一个索引
 * - 
 */

/**
 * Array.prototype.reduce()
 */
[1, 2, 3, 4].reduce((previousValue, currentValue) => {
    console.log(previousValue, currentValue);
    return previousValue + '' + currentValue // 将结果参与下一个元素的计算
})

/**
 * Array.prototype.concat()
 */
var alpha = ['a', 'b', 'c'];
var numeric = [1, 2, 3];
alpha.concat(1) // ['a', 'b', 'c', 1];
alpha.concat(numeric);// ['a', 'b', 'c', 1, 2, 3]
alpha.concat([[1]]);// ['a', 'b', 'c', [1]] ,嵌套数组保留引用


/**
 * Array.prototype.flat([depth])
 */
var arr1 = [1, 2, [3, 4]];// [1, 2, 3, 4],
[1, 2, [3, 4, [5, 6]]].flat(); // [1, 2, 3, 4, [5, 6]], 结构深度 depth 值为1

// 替代方案：reduce、concat
var arr = [1, 2, [3, 4]];
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4]
[].concat(...arr)

// 深度拍平， 使用 reduce、concat 和递归展开无限多层嵌套的数组
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];
function flatDeep(arr, d = 1) {
    return d > 0 ?
        arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
        : arr.slice();
};
flatDeep(arr1, Infinity);
// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]


/**
 * Array.from
 */
// 从 String 生成数组
Array.from('foo'); // [ "f", "o", "o" ]

// 从 Set 生成数组
const set = new Set(['foo', 'bar', 'baz', 'foo']); // new Set(['foo', 'bar', 'baz', 'foo'])
Array.from(set); // [ "foo", "bar", "baz" ]

// 从 Map 生成数组
const map = new Map([[1, 2], [2, 4], [4, 8]]); // Map(3) {1 => 2, 2 => 4, 4 => 8}
Array.from(map); // [[1, 2], [2, 4], [4, 8]]

// 从类数组对象（arguments）生成数组
function f() {
    return Array.from(arguments); // Arguments(3) [123, 12312, 123, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}
f(1, 2, 3); // [ 1, 2, 3 ]


/**
 * Array.of
 */
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]


/**
 * Array.prototype.copyWithin(target[, start[, end]])
 */
[1, 2, 3, 4, 5].copyWithin(1, 2)
[1, 2, 3, 4, 5].copyWithin(1, 2, 4)


/**
 * Array.prototype.entries()；
 */
const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();
console.log(iterator1.next().value);
// expected output: Array [0, "a"]
console.log(iterator1.next().value);
// expected output: Array [1, "b"]


/**
* Array.prototype.flatMap(callback(currentValue[, index[, array]])[, thisArg])
*/
[1, 2, 3, 4].flatMap(x => [x * 2]);// [2, 4, 6, 8]
[1, 2, 3, 4].flatMap(x => [[x * 2]]); // [[2], [4], [6], [8]], 结构深度 depth 值为1