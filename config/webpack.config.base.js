const path = require('path')   // 相对路径变绝对路径
const os = require("os");

module.exports = {
    resolve: {
        extensions: [".js", ".json", ".jsx",'ts','tsx'],
        alias: {
            '@/': path.resolve(__dirname,'../src/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js)|(tsx?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "thread-loader",
                        options: {
                            workers: os.cpus().length
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                ]
            },
            {
                test: /\.tsx?$/,
                // use: ['happypack/loader?id=babel'], // 可以将这个过程分配给子进程去做
                use: [
                    'ts-loader',
                    "thread-loader",
                    // 耗时的 loader （例如 babel-loader）
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(less|css)$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: false,
                            localIdentName: "[local]--[hash:base64:5]"
                        }
                    },
                    {
                        loader: "less-loader",
                        options: { javascriptEnabled: true }
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|bmp|svg|png|webp|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 8 * 1024,
                    name: "[name].[hash:8].[ext]"
                }
            },
            // {  // expose-loader 允许暴露一个模块（整体或者部分）给全局对象（self、window 和 global）。
            //     test: require.resolve("jquery"),
            //     loader: "expose-loader",
            //     options: {
            //         exposes: ["$", "jQuery"],
            //     },
            // },

        ],
    },
}