const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

const pages = ['index'];

module.exports = {
    entry: path.resolve(__dirname, 'src/scripts/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin(),
        new copyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/images'),
                    to: 'images'
                }
            ]
        })
    ].concat(pages.map(page => new htmlWebpackPlugin({
        template: path.resolve(__dirname, `src/${page}.html`),
        filename: `${page}.html`
    }))),
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        }
    }
}
