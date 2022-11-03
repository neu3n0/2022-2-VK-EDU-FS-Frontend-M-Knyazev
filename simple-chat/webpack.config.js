'use strict';

const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
    context: SRC_PATH,
    entry: {
        index: './scripts/index.js',
        messagespage: './scripts/messages-page.js',
        chatslist: './scripts/chats-list.js',
    },
    output: {
        path: BUILD_PATH,
        publicPath: '',
        filename: 'scripts/[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.js$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        },
                    },
                ],
            },
            {
                test: /shadow\.css$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'css-loader'
                    },
                ],
            },
            {
                test: /\.css$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            chunks: ['index']
        }),
        new MiniCSSExtractPlugin({
            filename: 'styles/[name].css',
            chunks: ['messagespage']
        }),
        new HTMLWebpackPlugin({
            filename: 'messages-page.html',
            template: './templates/messages-page.html',
            chunks: ['messagespage']
        }),
        new MiniCSSExtractPlugin({
            filename: 'styles/[name].css',
            chunks: ['chatslist']
        }),
        new HTMLWebpackPlugin({
            filename: 'chats-list.html',
            template: './templates/chats-list.html',
            chunks: ['chatslist']
        }),
    ]
};