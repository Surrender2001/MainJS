const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    entry:{
        artstation:'./Artstation/script.js',
        countdown:'./Countdown/script.js',
        messenger:'./Messenger/script.js',
        pilots:'./PilotsBros/script.js',
        whack:'./WhackMole/script.js'
    },
    output:{
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    plugins: [
        new htmlwebpackplugin(
            {
                template: "./Artstation/index.html",
                filename: "index.html",
                excludeChunks: ['countdown','messenger','pilots']
            }),
        new CleanWebpackPlugin(),
        new htmlwebpackplugin(
            {
                template: "./Countdown/index.html",
                filename: "indexcount.html",
                excludeChunks: ['artstation','messenger','pilots','whack']
            }),
        new htmlwebpackplugin(
            {
                template: "./Messenger/index.html",
                filename: "indexmessage.html",
                excludeChunks: ['artstation','countdown','pilots','whack']
            }),
        new htmlwebpackplugin(
            {
                template: "./PilotsBros/index.html",
                filename: "indexpilots.html",
                excludeChunks: ['artstation','countdown','messenger','whack']
            }),
        new htmlwebpackplugin(
            {
                template: "./WhackMole/index.html",
                filename: "indexwhackmole.html",
                excludeChunks: ['artstation','countdown','messenger','pilots']
            })
    ],
    module: {
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }]
    }
}