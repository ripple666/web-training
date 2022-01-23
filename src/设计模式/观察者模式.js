/**
 * 定义：当对象间存在一对多关系时，则使用观察者模式（Observer Pattern）。
 * 比如，当一个对象被修改时，则会自动通知依赖它的对象。观察者模式属于行为型模式。
 */


// 1)构造函数实现
function Observer() {
    // 被观察的对象
    this.object = {

    }
}

// 订阅值
Observer.prototype.subscribe = function (name, value, target, fn) {
    const oldValue = this.object[name]? this.object[name].value : null
    //
    this.object[name] = {
        value,
        fn,
        target
    }
    // 
    this.broadcast(name, value, oldValue)
}

// 派发事件
Observer.prototype.dispatch = function (name, value) {
    //
    this.object[name] = {
        value,
        value
    }
    // 
    this.broadcast(name, value)
}

// 广播事件
Observer.prototype.broadcast = function (name, value, oldValue) {
    for (const key in this.object) {
        if (Object.hasOwnProperty.call(this.object, key)) {
            const element = this.object[key];
            if (element.target === name) { // 如果变化的值为订阅的值，则出发订阅回掉
                element.fn(name, value, oldValue)
            }
        }
    }
}

const observer = new Observer()
observer.subscribe('name', 'ripple')
observer.subscribe('sex', 'body', 'name', function (name, value, oldValue) {
    console.log('Observer:name change', name, value, oldValue)
})
observer.dispatch('name', 'hanbao')





// 2)Object.defineProperty实现
var targetObj = {
    name:'小李'
}

// 定义值改变时的处理函数（观察者）
function fn(oldVal, newVal) {
    console.info('object defineProperty' ,oldVal, newVal);
}

// 定义name属性及其set和get方法（name属性为被观察者）
Object.defineProperty(targetObj, 'name', {
    enumerable: true,
    configurable: true,
    get: function() {
        return name;
    },
    set: function(val) {
        console.log('name',val)
        //调用处理函数
        fn(name, val)
        name = val
    }
});
targetObj.name = '张三';

