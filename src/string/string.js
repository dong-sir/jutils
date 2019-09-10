function strLenGB(v) {
    return v.replace(/[\u00FF-\uFFFF]/g, "  ").length;
}
var string = {
	/**
     * [strSubGB description]
     * @author dongsir
     * @DateTime 2019-09-01
     * @version  [version]
     * @param    {[type]}   str   [description]
     * @param    {[type]}   start [description]
     * @param    {[type]}   len   [description]
     * @param    {[type]}   flag  [description]
     * @return   {[type]}         [description]
     */
    strSubGB: function (str, start, len, flag) {
        var total = strLenGB(str);
        if (total > (len - start)) {
            var flag = flag || "";
            var strTemp = str.replace(/[\u00FF-\uFFFF]/g, "@-").substr(start, len);
            var subLen = strTemp.match(/@-/g) ? strTemp.match(/@-/g).length : 0;
            return str.substring(0, len - subLen) + flag;
        }
        return str;
    },
}
module.exports = string;
