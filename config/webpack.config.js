var path = require('path');

module.exports = {
    entry: "../app/app.jsx",
    output: {
        path: path.resolve(__dirname, '../public/javascripts'),
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jsx$/, loader: 'jsx-loader?harmony'}
        ]
    }
};