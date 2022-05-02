const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    mode:'production',
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
    devtool:'inline-source-map'
    ,
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
   },
    plugins: [new HtmlWebpackPlugin({
        template: './base.html'
    }), new MiniCssExtractPlugin({
        filename:'main.[hash].css'
    })],
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
    },
};