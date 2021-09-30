const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_env !== 'production';
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool:isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' 
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: path.resolve(__dirname, 'public')
    },
    plugins: [
        // o && aqui significa: apenas se for em desenvolvimento, crie o plugin
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean), // se o isDevelopment retorna false, o plugin não consegue lidar com isso. Então, a gente filtra booleanos.
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    }
};