const webpack = require('webpack')
const path = require('path')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

var note = `${pkg.realname}-v${pkg.version} ${pkg.license}`;

const config = {
    mode: 'production', //development
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
    plugins: [
        new webpack.BannerPlugin(note)
        // new webpack.BannerPlugin({
        //   banner: (yourVariable) => { return `yourVariable: ${yourVariable}`; }
        // })
    ]

}

module.exports = config
