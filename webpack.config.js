const path = require('path');   
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode : 'development' , 
    entry: './src/index.js',
    output : {
        path: path.resolve(__dirname , 'dist') , 
        filename: 'bundle.js' 
        
    },
    devServer : {
        static: {
            directory: path.resolve(__dirname , 'dist') ,  /* is were we want to serve from */
        },
        port: 3000 , 
        open : true ,/*open immediatly in the browser*/
        hot:true, /** Hot reloading */
        compress: true, 
        
    },
    module: {
        rules: [      
            {
                test: /\.css$/,  /* regax were we want the loader that apply to files end with css */
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    },
    plugins:[ new HtmlWebpackPlugin({
        title: "Webpack Starter ",
        filename: 'index.html',
        template: './src/index.html'
    }),
    new MiniCssExtractPlugin() ],
    
}
