const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")  

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
        publicPath: '/public/',
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
                    { loader: MiniCssExtractPlugin.loader },  
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
            } 
        ]  
    }, 
    plugins: [  
        new MiniCssExtractPlugin({  
            filename: "css/[name].css"  
        })   
    ]
}