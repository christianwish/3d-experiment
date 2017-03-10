const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry: [
        "./src/js/app.tsx"
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            nodeModules: path.resolve('node_modules'),
            css: path.resolve('src/css')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: path.resolve('build'),
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: path.resolve('build'),
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};

module.exports = config;
