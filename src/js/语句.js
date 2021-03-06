
//for...in；for...in语句以任意顺序遍历一个对象的除Symbol以外的可枚举属性，包括继承的可枚举属性。

var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (var prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}
// Output:
// "obj.color = red"