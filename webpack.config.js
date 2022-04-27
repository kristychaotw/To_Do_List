const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './base.html'
    }), new MiniCssExtractPlugin({
        filename:'main.[hash].css'
    })],
};