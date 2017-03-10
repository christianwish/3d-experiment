var path = require("path");

var config = {
    entry: [
        "./src/js/app.tsx"
    ],
    output: {
        path: path.resolve(__dirname, "build/js"),
        filename: "bundle.js"
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
        ]
    }
};

module.exports = config;
