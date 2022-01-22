const path = require('path')   // 相对路径变绝对路径
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development', // 模式 默认 production development
    entry:  {
        design: path.resolve(__dirname, './src/设计模式/index.ts'), // 设计模式
    },    // 入口
    output: {
        filename: '[name].[hash:8].js',   // hash: 8只显示8位
        path: path.resolve(__dirname, 'dist'),

        // publicPath: 'https://cdn.example.com/assets/[fullhash]/',  设置cdn

        publicPath: '/public/'  // // 给所有打包文件引入时加前缀，包括css，js，img，如果只想处理图片可以单独在url-loader配置中加publicPath
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }
        ],
    },
    plugins:[
        new CleanWebpackPlugin() // 清除上一次dist
    ]
}