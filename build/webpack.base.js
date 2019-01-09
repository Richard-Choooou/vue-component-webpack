const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config  = require('./config')
const ENV = process.env.NODE_ENV


module.exports = {
    entry: path.resolve(config.basePath, './src/entry.js'),
    // output: {
    //     filename: 'senguo.m.ui.js',
    //     path: path.resolve(config.basePath, './dist'),
    //     publicPath: '/dist/',
    //     libraryTarget: 'umd'
    // },
    resolve: {
        extensions: [".js", ".vue", ".json"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': config.srcPath,
            '@examples': config.examplesPath
        }
    },  
    
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
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
        new VueLoaderPlugin()
    ]
}