module.exports = {
    /**
     * 数组去重
     *
     * @since 0.1.0
     * @category Array
     * @param {Array} 要去重的数组
     * @returns {Array} 返回一个去重后的新数组.
     * @example
     *
     * arrayUnique([2, 1, 2])
     * // => [2, 1]
     */
    arrayUnique: function (array) {
        var newArr = [],
            obj = {},
            i, len;
        for (i = 0, len = array.length; i < len; i++) {
            if (!obj[array[i]]) {
                newArr.push(array[i]);
                obj[array[i]] = true;
            }
        }
        return newArr;
    },
    /**
     * 判断两个数组是否相等
     *
     * @since 0.1.0
     * @category Array
     * @param {Array} 要比较的数组
     * @param {other} 另一个要比较的数组
     * @returns {boolean}
     * @example
     *
     * arrayEqual([0, 1],[1, 2])
     * // => false
     */
    arrayEqual: function (array,other) {
        var i, l;
        if (!other) {
            return false;
        }
        if (array.length != other.length) {
            return false;
        }
        for (i = 0, l = array.length; i < l; i++) {
            if (array[i] instanceof Array && other[i] instanceof Array) {
                if (!array[i].equals(other[i])) {
                    return false;
                }
            } else if (array[i] != other[i]) {
                return false;
            }
        }
        return true;
    },
}
