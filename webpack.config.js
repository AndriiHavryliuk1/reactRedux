const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

const config = {
    entry: "./src/app/index.js",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_models/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
module.exports = config;﻿