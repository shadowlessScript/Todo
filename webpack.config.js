const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "inline-source-map",
    plugins: [
        new htmlWebpackPlugin({
            title: "Todo List",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpeg|svg|jpg|gif)$/i,
                type: "asset/resource",
            },
        ],
        
    },
};