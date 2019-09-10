var url = {
    getQuery: function (name, url) {
        var u = arguments[1] || window.location.search,
            reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            r = u.substr(u.indexOf("\?") + 1).match(reg);
        return r != null ? r[2] : "";
    },
    setQuery: function (json, url) {
        var hash = url ? url.match(/#.*/) && url.match(/#.*/)[0] || "" : location.hash,
            search = url ? url.replace(/#.*/, "").match(/\?.*/) && url.replace(/#.*/, "").match(/\?.*/)[0] || "" : location.search,
            path = url ? url.replace(/#.*/, "").replace(/\?.*/, "") : location.protocol + "//" + location.host + location.pathname;
        for (var i in json) {
            var query = i + "=" + json[i],
                oldValue = getQuery(i, search);
            if (oldValue) {
                search = search.replace(i + "=" + oldValue, i + "=" + json[i]);
            } else {
                search = (search.length > 0) ? search + "&" + query : "?" + query;
            }
        }
        return path + search + hash;
    },
    getUrlParam: function (name) {
        var u = arguments[1] || window.location.search,
            reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", 'i'),
            r = u.substr(u.indexOf("\?") + 1).match(reg);
        return r != null ? r[2] : "";
    },
    getHash: function (name) {
        var u = arguments[1] || location.hash;
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = u.substr(u.indexOf("#") + 1).match(reg);
        if (r != null) {
            return r[2];
        }
        return "";
    },
    replaceParam: function (e, t, n, r) {
        n = n || location.href;
        var i = new RegExp("([\\?&]" + e + "=)[^&#]*");
        return n.match(i) ? r ? n.replace(i, "$1" + t) : n : n.indexOf("?") == -1 ? n + "?" + e + "=" + t : n + "&" + e + "=" + t
    },
    /**
     * [loadCss 加载style文件]
     * @author dongsir
     * @DateTime 2019-09-10
     * @version  [version]
     * @param    {[type]}   url [description]
     * @return   {[type]}       [description]
     */
    loadCss: function (url) {
        var l = document.createElement('link');
        l.setAttribute('type', 'text/css');
        l.setAttribute('rel', 'stylesheet');
        l.setAttribute('href', url);
        document.getElementsByTagName("head")[0].appendChild(l);
    },
    /**
     * [loadonJS 加载并执行js文件]
     * @author dongsir
     * @DateTime 2019-09-10
     * @version  [version]
     * @param    {[type]}   url      [description]
     * @param    {Function} callback [description]
     * @param    {[type]}   charset  [description]
     * @return   {[type]}            [description]
     */
    loadonJS: function (url, callback, charset) {
        if (typeof callback == 'string') {
            charset = callback;
            callback = function () {};
        }
        var sc = document.createElement('script'),
            head = document.getElementsByTagName('head')[0];
        sc.setAttribute('charset', charset || 'utf-8');
        sc.src = url;
        sc.onload = function () {
            callback && callback();
            head.removeChild(sc);
        };
        head.appendChild(sc);
    }
}
module.exports = url;
