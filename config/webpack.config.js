var path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../app/App.js')
    },
    output: {
        path: path.resolve(__dirname, '../public/javascripts'),
        filename: "[name].bundle.js",
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, loader: 'jsx-loader?harmony'}
        ]
    }
};