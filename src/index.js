/**
 * @desc webpack打包入口文件
 * @example 自动引入子目录下所有js文件
 */
let moduleExports = {};

const files = require.context('./', true, /\.js$/);
files.keys().forEach(key => {
	if (key === './index.js') return;
    // let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
    for (var k in files(key)){
        moduleExports[k] = files(key)[k]
    }
    // forEach
    // moduleExports[attr] = files(key);
});
module.exports = moduleExports;
