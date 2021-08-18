const path = require("path");
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader","css-loader"]
        }, {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]

        }]
    },
    plugins: [],
    mode: 'development' //production
}