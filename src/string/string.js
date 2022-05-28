function strLenGB(v) {
    return v.replace(/[\u00FF-\uFFFF]/g, "  ").length;
}
var string = {
    getCookie: function getCookie(name) {
        var reg = new RegExp("(^| )" + decodeURIComponent(name) + "(?:=([^;]*))?(;|$)")
          , val = document.cookie.match(reg);
        return val ? val[2] ? decodeURIComponent(val[2]) : "" : null
    },
    setCookie: function setCookie(name, value, expires, path, domain, secure) {
        var exp = new Date;
        path = arguments[3] || "/",
        domain = arguments[4] || null,
        secure = arguments[5] || !1,
        (expires = arguments[2] || null) && exp.setMinutes(exp.getMinutes() + parseInt(expires)),
        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + (expires ? ";expires=" + exp.toGMTString() : "") + (path ? ";path=" + path : "") + (domain ? ";domain=" + domain : "") + (secure ? ";secure" : "")
    },
    delCookie: function delCookie(name, path, domain, secure) {
        var value;
        if (null != this.getCookie(name)) {
            var exp = new Date;
            exp.setMinutes(exp.getMinutes() - 1e3),
            path = path || "/",
            document.cookie = encodeURIComponent(name) + "=;expires=" + exp.toGMTString() + (path ? ";path=" + path : "") + (domain ? ";domain=" + domain : "") + (secure ? ";secure" : "")
        }
    },
    time33: function time33(str) {
        for (var hash = 5381, len = str.length, i = 0; i < len; ++i)
            hash += (hash << 5) + str.charCodeAt(i);
        return 2147483647 & hash
    },
    ltrim: function ltrim(str, chars) {
        str = str.toString();
        var pattern = chars ? new RegExp("^[" + chars + "]+","g") : /^\s+/g;
        return str.replace(pattern, "")
    },
    rtrim: function rtrim(str, chars) {
        str = str.toString();
        for (var pattern = chars ? new RegExp("[" + chars + "]") : /\s/, idx = str.length - 1; 0 <= idx && pattern.test(str[idx]); )
            idx--;
        return idx < str.length ? str.substr(0, idx + 1) : str
    },
    trim: function trim(str, chars) {
        return this.rtrim(this.ltrim(str, chars), chars)
    },
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
    /**
     * guid生成器
     * @DateTime 2020-3-17 23:31:16
     * @version  1.0
     */
    guidGenerator: function () {
        var d = (new Date).getTime();
        var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == "x" ? r : r & 3 | 8).toString(16)
        });
        return uuid
    },
    /**
     * js生成指定范围内随机数，支持只传一个参数
     * @version  1.0
     */
    randomScope: function(e, t) {
        return null == t && (t = e,
        e = 0),
        e + Math.floor(Math.random() * (t - e + 1))
    },
    /**
     * 随机数
     * @version  1.0
     */
    getSafeRandomNum: function() {
        return window.crypto ? window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296 : window.msCrypto.getRandomValues(new Uint32Array(1))[0] / 4294967296
    },
    UUID: function UUID() {
        function ensureLength(str, len) {
            if (str.length < len) {
                var pad = [];
                pad.length = len - str.length + 1,
                str += pad.join("0")
            } else
                str.length > len && (str = str.substr(0, len));
            return str
        }
        function dechex(str) {
            return "" === str ? "" : str.toString(16)
        }
        function guid(len) {
            for (var str = "", i = 0; i < len; i++)
                str += dechex(Math.floor(16 * Math.random()));
            return str
        }
        var D = new Date, msec = D.getMilliseconds(), sec = D.getTime(), msecHex = dechex(1e6 * msec), secHex = dechex(sec), uuid;
        return msecHex = ensureLength(msecHex, 5),
        secHex = ensureLength(secHex, 6),
        "" + msecHex + guid(3) + "-" + guid(4) + "-" + guid(4) + "-" + guid(4) + "-" + secHex + guid(6)
    },
}
module.exports = string;
