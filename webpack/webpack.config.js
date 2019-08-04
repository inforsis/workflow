const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")  
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {  
    entry: './src/index.js',

    output: {  
        path: path.resolve(__dirname, 'public'), 
        filename: 'main.js'  
    },  
    /* The stats option lets you control what bundling information to display. */
    devServer: {
        stats: {
            devtool: '#eval-source-map',
            children: false, // Hide children information
            maxModules: 0 // Set the maximum number of modules to be shown
        },
        open: true,
        contentBase: path.join(__dirname, 'public'),
        port: 3001
    },
    module: {  
        rules: [  
            {  
                test: /\.js$/,  
                exclude: /node_modules/,
                use: {  
                    loader: 'babel-loader',  
                    options: {  
                        cacheDirectory: true  
                    }  
                }  
            },
            {  
                test: /\.scss$/,  
                use: [  
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '../'
                            }
                        },  
                        "css-loader",  
                        "sass-loader" 
                        
                    ]  
            },
            {  
                test: /\.(png|jpg|svg)$/,  
                use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'img/'
                            }
                        }
                    ]  
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts/'
                            }
                        }
                    ]
            },
            {
            test: /\.html$/,
            use: [
                    {
                        loader: "html-loader"
                    }
                ]
            } 
        ]  
    }, 
    plugins: [ 
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }), 
        new MiniCssExtractPlugin({  
            filename: "css/[name].css"  
        })   
    ]
}