const path = require('path')   // 相对路径变绝对路径
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const WebpackBar = require('webpackbar')
const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')

module.exports = merge(webpackBaseConfig, {
    mode: 'development', // 模式 默认 production development
    entry: {// 入口
        app: [
            // "babel-polyfill",
            path.resolve(__dirname, '../src/设计模式/index.js'),// 设计模式
            // "./src/pages/home/index.jsx",
            // "./src/pages/home/categorys/index.jsx"
        ],
        // vendor: ["react", "better-scroll", "react-redux", "react-lazyload"]
    },
    output: {
        filename: '[name].[hash:8].js',   // hash: 8只显示8位
        path: path.resolve(__dirname, '../build'),
    },
    module: {
        rules: [

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
        }),// html模板
        new webpack.HotModuleReplacementPlugin(),
        new WebpackBar() // webpack进度条

    ],
    watch: true, // 启用 Watch 模式。这意味着在初始构建之后，webpack 将继续监听任何已解析文件的更改。
    devServer: {
        port: 8999,
        hot: true,
        static: {
            directory: path.join(__dirname, '../public'),
            // watch: true, // 默认开启，监听文件变化
        },
        client: {
            reconnect: true, // 客户端应该尝试重新连接的次数，true为无限连接
            overlay: {//当出现编译错误或警告时，在浏览器中显示全屏覆盖。
                errors: true,
                warnings: false,
            },
            logging: 'info', // 允许在浏览器中设置日志级别，例如在重载之前，在一个错误之前或者 热模块替换 启用时。
        },

        // resolve: {
        //     extensions: [".js", ".json", ".jsx"]
        // },

        proxy: { // 转发
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: { '^/api': '' },
            },
        },

        // compress: true, // 启动gzip压缩

        // allowedHosts: [ // 该选项允许将允许访问开发服务器的服务列入白名单。
        //     'host.com',
        //     'subdomain.host.com',
        //     'subdomain2.host.com',
        //     'host2.com',
        // ],


        // http2: true, // 使用 spdy 提供 HTTP/2 服务，HTTP/2 带有自签名证书，也可以通过https配置证书。

        // https: { // 使用 HTTPS 提供服务
        //     key: fs.readFileSync('/path/to/server.key'),
        //     cert: fs.readFileSync('/path/to/server.crt'),
        //     ca: fs.readFileSync('/path/to/ca.pem'),
        // },

    }
})