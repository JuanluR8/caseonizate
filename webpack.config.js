const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js']
    },
    context: __dirname,
    entry: './src/app/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'src')
    },
    devServer: {
        contentBase: path.join(__dirname, "src"),
        port: 8080,
        publicPath: "/"
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /index\.html/
            }
        ]
    }
}