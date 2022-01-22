const path = require('path')   // 相对路径变绝对路径
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const WebpackBar = require('webpackbar')

const publicPath = './'

module.exports = {
    mode: 'development', // 模式 默认 production development
    entry: {// 入口
        // app: [
        //     "babel-polyfill",
        //     "./src/index.js",
        //     "./src/pages/home/index.jsx",
        //     "./src/pages/home/categorys/index.jsx"
        //   ],
        //   vendor: ["react", "better-scroll", "react-redux", "react-lazyload"]
        design: path.resolve(__dirname, '../src/设计模式/index.js'), // 设计模式
    },
    output: {
        filename: '[name]/index.[hash:8].js',   // hash: 8只显示8位
        path: path.resolve(__dirname, '../dist'),

        // publicPath: 'https://cdn.example.com/assets/[fullhash]/',  设置cdn

        publicPath  // 给所有打包文件引入时加前缀，包括css，js，img，如果只想处理图片可以单独在url-loader配置中加publicPath
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                // use: ['happypack/loader?id=babel'], // 可以将这个过程分配给子进程去做
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(), // 清除上一次dist
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html', // 打包后生成文件
            chunks: ['design'], // 将指定的js文件加入到index.html中
            hash: true, // 添加hash值解决缓存问题
            minify: { // 对打包的html模板进行压缩
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: false, // 删除空白符与换行符
                minifyCSS: true, // 压缩内联css
            },

            title: 'this is webpack title',
            inject: true // script 标签的位置
        }),// html模板
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({  // 全局变量
            DESCRIPTION: 'This Is The Test Text.',
        }),
        // new ExtractTextPlugin('css/index.css') // 将 css 成生文件，而非内联
        new WebpackBar() // webpack进度条

    ],
    devServer: {
        port: 8999,
        hot: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        contentBase: './dist',
        compress: true,
    }
}