'use strict';

var webpack = require('webpack');
var path    = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var src  = path.join(__dirname, 'src');
var dist = path.join(__dirname, 'dist');

var config = {
    debug:     true,
    devtool:   'sourcemap',
    entry:     {
        index: path.join(src, 'index.js')
    },
    module:    {
        loaders: [
            {
                test:    /\.css$/,
                loader:  ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap'),
                include: src
            }
        ]
    },
    output:    {
        path:       dist,
        publicPath: '/',
        filename:   '[name].js'
    },
    plugins:   [
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        })
    ],
    resolve:   {
        extensions: ['', '.js', '.css', '.styl']
    },
    target:    'web'
};

module.exports = config;
