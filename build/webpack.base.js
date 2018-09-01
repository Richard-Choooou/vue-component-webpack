const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config  = require('./config')
const ENV = process.env.NODE_ENV


module.exports = {
    entry: path.resolve(config.basePath, './src/entry.js'),
    output: {
        filename: 'senguo.m.ui.js',
        path: path.resolve(config.basePath, './dist'),
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: [".js", ".vue", ".json"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': config.srcPath
        }
    },  
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.html$/,
            use: [{loader: 'html-loader'}]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: ENV == 'product' ? '[name].[hash].[ext]' : '[name].[ext]',
                    outputPath: './images'
                }
            }]
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        }),
        new VueLoaderPlugin()
    ]
}