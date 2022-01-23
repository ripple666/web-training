function Observer() {
    console.log('this')
    // 被观察的对象
    this.object = {

    }
}

// 订阅函数，支持绑定被观察对象中的某个值
Observer.prototype.bind = function (name, fn, value, target) {
    //
    this.object[name] = {
        value,
        fn,
        target
    }
    // 
    this.broadcast(name, value)
}

// 广播事件
Observer.prototype.broadcast = function (name, value) {
    for (const key in this.object) {
        if (Object.hasOwnProperty.call(this.object, key)) {
            const element = this.object[key];
            if (element.target === name) { // 如果变化的值为订阅的值，则出发订阅回掉
                element.fn(name,value)
            }
        }
    }
}


export default {
    ObserverFunction: new Observer()
}