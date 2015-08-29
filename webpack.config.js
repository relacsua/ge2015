var path = require('path');

module.exports = {
    entry: "./app/App.js",
    output: {
        path: path.resolve(__dirname, './public/javascripts'),
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, loader: 'jsx-loader?harmony'}
        ]
    }
};