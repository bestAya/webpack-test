const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './main.js',
    output: {
        filename: 'test.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
         contentBase: './dist'
   },
    module: {

                rules: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: "babel-loader"
                    },
                    {
                        test: /\.css$/,
                        use: ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: "css-loader"
                        })
                    },
                    {
                        test: /\.(html)$/,
                        use: {
                            loader: 'html-loader',
                            options: {
                                attrs: [':src']
                            }
                        }
                    },
                    {
                        test: /\.(png|jpg|gif)$/,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    outputPath:'img/'
                                }
                            }
                        ]
                    }
                ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            title:"webpack",
            filename:"index1.html",
            template:"index.html"

        })
    ]
    };
