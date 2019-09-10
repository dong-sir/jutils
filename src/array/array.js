/**
 * [array 数组的相关操作函数]
 * @type {Object}
 */
var array = {
    /**
     * [arrayUniq 简单数组去重]
     * @author dongsir
     * @DateTime 2019-09-04
     * @version  [version]
     * @param    {[type]}   arr [description]
     * @return   {[type]}       [description]
     */
    arrayUniq: function (arr) {
        var returnArr = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            (("," + returnArr + ",").indexOf("," + arr[i] + ",") < 0) ? returnArr.push(arr[i]): '';
        };
        return returnArr;
    }

}
module.exports = array;
