module.exports = {
    entry: "./scripts/Main.js",
    output: {
        path: __dirname,
        filename: "./public/static/script.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]

    }
};
