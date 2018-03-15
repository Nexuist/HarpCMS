const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    devtool: "inline-source-map",
    devServer: {
        host: "0.0.0.0",
        port: 8081,
        historyApiFallback: {
            rewrites: [
                // shows favicon
                { from: /favicon.ico/, to: '/src/images/favicon/favicon.ico' }
            ]
        }
    }
});