/**
 * [array 数组的相关操作函数]
 * @type {Object}
 */
var array = {
    /**
     * [arrayUniq 简单数组去重]
     * @author dongsir
     * @DateTime 2019-09-04
     * @version  1.1
     * @param    {Array}   arr [带有重复数据的数组]
     * @return   {Array}       [处理后的数组]
     */
    arrayUniq: function (arr) {
        var e, i, t = [],
            a = {};
        for (e = 0, i = arr.length; e < i; e++) a[arr[e]] || (t.push(arr[e]), a[arr[e]] = !0);
        return t
    }

}
module.exports = array;
