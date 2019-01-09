const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const webpackCleanPlugin = require('clean-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./config')
const ENV = process.argv.NODE_ENV

module.exports = merge(webpackBaseConfig, {
    output: {
        filename: 'demo.m.ui.js',
        path: path.resolve(config.basePath, './dist'),
        publicPath: '/dist/',
        libraryTarget: 'umd'
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
        rules: [
            {
                test: /\.(sc|c)ss$/,
                use: [miniCssExtractPlugin.loader, 
                {loader: 'css-loader'}, 
                {loader: 'sass-loader'}]
            }
        ]
    },

    plugins: [
        new webpackCleanPlugin(
            ['../dist'], {
                root: path.resolve(__dirname),
                allowExternal: true,
                exclude: ['vue.min.js']
            }
        ),
        new miniCssExtractPlugin({
            filename: "demo.ui.min.css"
        })
    ]
})

    
