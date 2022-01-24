/**
 * # 精度丢失
 * JS的基础类型Number，遵循 IEEE 754 规范，采用双精度存储（double precision），双精度浮点数(double)是计算机使用的一种数据类型，使用 64 位（8字节） 来存储一个浮点数.
 * 1位用来表示符号位，11位用来表示指数，52位表示尾数。js能存储的最大整数是2**52
 * - 大数值BigNum
 * - 浮点数
 */

/**
 * ## 大数值处理
 * 将大数转化为数组，进行小数位相加减
 */
function addBigNum(num1, num2) {
  
    const arr = []
    const arr1 = num1.toString().split('').reverse().map(v=>(Number(v) || 0))
    const arr2 = num2.toString().split('').reverse().map(v=>(Number(v) || 0))
    const len = Math.max(arr1.length, arr2.length)

    console.log('arr1',arr1)
    /**
     * 算法
     * 1）分割为数组取反相加减
     * 2）遍历长数组
     * 3）和大于10 进1 
     * 3）遇到undefined 变为0
     */

    for (let index = 0; index < len; index++) {
        var total = (arr1[index]|| 0)  + (arr2[index]|| 0)  
        if (total < 10) {
            arr[index] = total + (arr[index] || 0)
        } else {
            arr[index] = parseInt(total / 10)
            arr[index + 1] = total % 10
        }
        console.log(arr1[index]  , arr2[index] , total,arr[index])
    }
    return arr.reverse().join('')
}

add(4503599627370490,4503599627370490)

/**
 * ## 浮点数处理
 * 规范：将浮点数以小数点分割，然后整数部分相加，小鼠部分相加。
 */

function addFloatNum(num1,num2){
  // 1）定义变量
  let total = 0

  let num1Int = 0
  let num2Int = 0

  let num1Float = 0
  let num2Float = 0

  /**
   * 算法
   * 1）整数部分相加
   * 2）小数部分相加
   * 3）小树部分长度超过原来的最大长度，则整数加1
   */

  // 定义输出
  return total
}
addFloatNum(0.132,0.123)