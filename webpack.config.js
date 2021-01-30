const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')




const optimization = () => {
        const config = {
            splitChunks: {
                chunks: 'all'
            }
        }
        if (isProd) {
            config.minimizer = [
                new OptimizeCssAssetWebpackPlugin(),
                new TerserWebpackPlugin()
            ]
        }
        return config
}

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
console.log('is Dev:', isDev)

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        index: './index.js',
    },
    devtool: false,
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        // после установки mini-css-extract-plugin выдал ошибку: Automatic publicPath is not supported in this browser
        // потом добавил publicPath, всё заработало, прописывал просто path не помогло.
        publicPath: ''
    },
    optimization: optimization(),
    devServer: {
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './formAndElements.pug',
            filename: 'formAndElements.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new HTMLWebpackPlugin({
            template: './cards.html',
            filename: 'cards.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new HTMLWebpackPlugin({
            template: './headersAndFooters.html',
            filename: 'headersAndFooters.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
        // new HTMLWebpackPlugin({
        //     template: './pug.pug',
        //     filename: 'pug.html',
        //     minify: {
        //         collapseWhitespace: isProd
        //     }
        // })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''
                        }
                    }, 'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                          name: 'img/[name].[ext]'
                        },
                      }
                ]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                          name: 'fonts/[name].[ext]'
                        },
                      }
                ]
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                    {
                        loader: 'pug-html-loader',
                        options: {
                            pretty: isDev
                        }
                    }
                ]
            }
        ]
    }
}