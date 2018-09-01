const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const webpackCleanPlugin = require('clean-webpack-plugin')
const config = require('./config')


module.exports = merge(webpackBaseConfig, {
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'sass-loader'}]
        }]
    },
    devServer: {
        host: '0.0.0.0',
        publicPath: '/',
        hot: true,
    },

    plugins: [
        new webpackCleanPlugin(
            ['../dist'], {
                root: config.basePath,
                allowExternal: true
            }
        ),
        new webpack.HotModuleReplacementPlugin()
    ]
})

    