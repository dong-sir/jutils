var mobile = {
    isSQ: function () {
        if (/qq\/([\d\.]+)*/i.test(navigator.userAgent)) {
            return true;
        }
        return false;
    },
    isWX: function () {
        if (/MicroMessenger/i.test(navigator.userAgent)) {
            return true;
        }
        return false;
    },
    /**
     * [getOperator 获取手机运营商]
     * @author dongsir
     * @DateTime 2019-09-10
     * @version  [version]
     * @param    {[type]}   e [description]
     * @param    {[type]}   i [description]
     * @return   {[type]}     [联通、电信、移动、未知]
     */
    getOperator: function (e, i) {
        var t = "134,135,136,137,138,139,150,151,152,157,158,159,187,188,147,182,183,184,178"
          , a = "130,131,132,155,156,185,186,145,176"
          , n = "133,153,180,181,189,177,173,170"
          , s = e || ""
          , o = s.substring(0, 3)
          , r = s.substring(0, 4)
          , d = !!/^1\d{10}$/.test(s) && (a.indexOf(o) >= 0 ? "联通" : n.indexOf(o) >= 0 ? "电信" : "1349" == r ? "电信" : t.indexOf(o) >= 0 ? "移动" : "未知");
        return i || d || !/^1\d{2}\*{4}\d{4}$/.test(s) || (d = !0),
        d
    }


}
module.exports = mobile;
