/**
 * # 异步
 * - setTimeout/setInterval
 * - 
 * - Promise
 * - generator
 * - async/await
 */

/**
 * # Promise
 * Promise本身是一个对象，像promise这样的异步操作被放入事件队列中，事件队列在主线程完成处理后运行，这样它们就不会阻止后续JavaScript代码的运行。
 * 
 * ## 静态方法
 * - Promise.all(iterable) 该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。
 * - Promise.race(iterable) 当iterable参数里的任意一个子promise被成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。
 * - Promise.reject(reason) 返回一个状态为失败的Promise对象，并将给定的失败信息传递给对应的处理方法
 * - Promise.resolve(value) 返回一个状态由给定value决定的Promise对象。如果该值是一个Promise对象，则直接返回该对象；如果该值是thenable(即，带有then方法的对象)，返回的Promise对象的最终状态由then方法执行决定；否则的话(该value为空，基本类型或者不带then方法的对象),返回的Promise对象状态为fulfilled，并且将该value传递给对应的then方法。通常而言，如果你不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,这样就能将该value以Promise对象形式使用。
 * 
 * 
 * ## 实例方法
 * - Promise.prototype.then(onFulfilled, onRejected) 添加肯定和否定回调到当前 promise, 返回一个新的 promise, 将以回调的返回值 来resolve.
 * - Promise.prototype.catch(onRejected) 添加一个否定(rejection) 回调到当前 promise, 返回一个新的promise。如果这个回调被调用，新 promise 将以它的返回值来resolve，否则如果当前promise 进入fulfilled状态，则以当前promise的肯定结果作为新promise的肯定结果.
 * - Promise.prototype.finally
 * 
 * 
 * ## Promise/A+ 规范
 * - 一个promise的当前状态只能是pending、fulfilled和rejected三种之一。
 * - 状态改变只能是pending到fulfilled或者pending到rejected。状态改变不可逆。
 * - promise的then方法接收两个可选参数，表示该promise状态改变时的回调(promise.then(onFulfilled, onRejected))。
 * - then方法返回一个promise，then 方法可以被同一个 promise 调用多次。
 * 。。。
 * 
 * - 实现
 * 
 */
//

// 实现
// 用法
// const p = new Promise((resolve,reject)=>{
//     resolve()
//     reject()
// }).then((value)=>{},(reson)=>{})

function Promise(fn) {
    /**
     * 1)根据用法，梳理规范，
     * 2）定义输入输出
     * 3）编写算法
     */
    fn(resolve, reject)
}
Promise.race = function () { }
Promise.reject = function () { }
Promise.resolve = function () { }
Promise.prototype.then = function (onFulfilled, onRejected) {
    return this
}
Promise.prototype.catch = function (reson) {

}
Promise.prototype.finally = function (onRejected) {

}


/**
 * generator
 * 
 * 
 */