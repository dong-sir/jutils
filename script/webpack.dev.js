const webpack = require('webpack')
const path = require('path')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

var note = `${pkg.realname}-v${pkg.version} ${pkg.license}`;

const config = {
    mode: 'development', //development
    entry: path.resolve(rootPath, 'src', 'index.js'),
    output: {
        filename: `${pkg.realname}.min.js`,
        path: path.resolve(rootPath, 'dist'),
        library: `${pkg.realname}`,
        libraryTarget: "umd",
        globalObject: 'this'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,  // 加快编译速度，不包含node_modules文件夹内容
            loader: "babel-loader"
        }]
    },
    devServer: {
        hot: true,
        contentBase: './dist',
        host: '0.0.0.0', // 指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问 0.0.0.0
        port: 8085, // 端口
        open: true, // 是否打开浏览器
        overlay: { // 出现错误或者警告的时候，是否覆盖页面线上错误消息。
          warnings: true,
          errors: true
        },
        publicPath: '/', // 此路径下的打包文件可在浏览器中访问。
        watchOptions: { // 监视文件相关的控制选项
            poll: true,
            ignored: /node_modules/, // 忽略监控的文件夹，正则
            aggregateTimeout: 300 // 默认值，当第一个文件更改，会在重新构建前增加延迟
        }
    },
    plugins: [
        new webpack.BannerPlugin(note),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.BannerPlugin({
        //   banner: (yourVariable) => { return `yourVariable: ${yourVariable}`; }
        // })
    ]

}

module.exports = config
