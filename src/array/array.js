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
        var e, i, t = [],
            a = {};
        for (e = 0, i = arr.length; e < i; e++) a[arr[e]] || (t.push(arr[e]), a[arr[e]] = !0);
        return t
    }

}
module.exports = array;
