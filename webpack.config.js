module.exports = {
    entry: [
        './js/app.js',
        'webpack-dev-server/client?http://localhost:8080'
    ],
    output: {
        path: './',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?stage=0',
                 exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map',
    debug: true,
    devServer: {
        contentBase: './'
    }
};
