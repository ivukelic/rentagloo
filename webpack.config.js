const glob = require('glob');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
            {
                test: /.(png|jpg)$/,
                use: {
                    loader: 'url-loader',
                    options: { limit: 15000, name: '[name].[ext]' },
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: /src/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            // {
            //     test: /\.(css|pcss)$/,
            //     use: [
            //         { loader: MiniCssExtractPlugin.loader },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 importLoaders: 1,
            //                 modules: true,
            //             },
            //         },
            //         {
            //             loader: 'postcss-loader',
            //             options: {
            //                 ident: 'postcss',
            //                 modules: true,
            //             },
            //         },
            //     ],
            // },
            {
                test: /.(scss|css)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName:
                                    '[name]__[local]-[hash:base64:6]',
                            },
                            importLoaders: 3,
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            Components: path.resolve(__dirname, './src/app/components/'),
            Pages: path.resolve(__dirname, './src/app/pages/'),
            Styles: path.resolve(__dirname, './src/app/styles/'),
            Assets: path.resolve(__dirname, './src/app/assets/'),
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, {
                nodir: true,
            }),
        }),
    ],
};
