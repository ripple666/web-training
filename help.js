// 一题
// 100、200、100、100、300

// 二题
// 1）A、B、window
// 2）window
// 3）A，A，B 

// 三题
// 1）b

const str = 'abc345efgabcab'
const reg = /[abc]+/ig
str.replace(reg,'')
// 2)
str.split('').map(v=>{
    if(/d/.test(v)){
        return v*2
    }
}).join('')

//四题
/**
 * es6新特心set方法
 * 一般是lodash
 * 遍历循环，将新值存放到新的数组中，每次都用newArray去判断是否存在该值
 * flat
 */

5// 计算机二进制长度有限制，位数不能存放大数，可以将大数分片计算。

//6 
// 解构： 缺点不能深度拷贝，只能拷贝第一层
// JSON.stringfy，缺点破坏原结构
// 递归的方式进行深度赋值：计算量比较大，不适合处理比较大的内容

// 

