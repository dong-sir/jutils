var browser = {
    getBrowserInfo: function() {
        var e, t, r, o = {
                name: "other",
                version: "0"
            },
            i = navigator.userAgent.toLowerCase();
        for (t = [
            ["WeiXin", /micromessenger\/([^\s]+)/],
            ["QQ", /qq\/([^\s]+)/],
            ["QQBrowser", /(?:qqbrowser|qqlivebrowser)\/([^\s]+)/],
            ["JDAPP", /jdapp;/],
            ["QIHU", /qihu|360se/],
            ["LieBao", /(?:lbbrowser|liebaofast)\/?([\d\.]+)?/],
            ["Sogou", /(?:metasr|sogou[\w]*)[ \/]([\d\.]+)/],
            ["Opera", /(?:opera|opr|oupeng)\/([\d\.]+)/],
            ["BaiduBrowser", /(?:bidubrowser|baidubrowser)[\/ ]?([\d\.\w]+)/],
            ["BaiduBox", /baiduboxapp|baiduboxpad/],
            ["UC", /(?:ucweb|ucbrowser)\/?([\d\.]+)/],
            ["Maxthon", /maxthon\/([\d\.]+)/],
            ["Samsung", /samsungbrowser\/([\d\.]+)/],
            ["Dolphin", /aphone|apad/],
            ["2345", /2345/],
            ["Miui", /miuibrowser\/([\d\.]+)/],
            ["OppoBrowser", /oppobrowser\/([\d\.]+)/],
            ["MeiZu", /mz-/],
            ["Weibo", /weibo/],
            ["Youku", /youku/],
            ["NewsApp", /newsapp/],
            ["AliApp", /aliapp/],
            ["Firefox", /firefox\/([\d\.\w]+)/],
            ["Chrome", /chrome\/([\d\.]+)/],
            ["IE", /msie[ ](\d+\.\d+)/],
            ["Safari", /safari\/([\d\.]+)/]
        ], e = 0; e < t.length; e++)
            if (r = i.match(t[e][1])) {
                o.name = t[e][0], o.version = r[1] || "0";
                break
            }
        return o
    },
}
/**
 * [isCss3Support description]
 * @author dongsir
 * @DateTime 2019-08-30
 * @version  [version]
 * @return   {Boolean}  [description]
 */
browser.isCss3Support = function() {
    var t, e, i, a = {
        TransitionEvent: "transitionend",
        WebKitTransitionEvent: "webkitTransitionEnd",
        OTransitionEvent: "oTransitionEnd",
        otransitionEvent: "otransitionEnd"
    }, n = !1;
    for (i in a) {
        if (window[i]) {
            t = a[i];
            break
        }
        try {
            document.createEvent(i);
            t = a[i];
            break
        } catch (t) {}
    }
    "string" == typeof t && (n = !0),
    a = {
        AnimationEvent: "animationend",
        WebKitAnimationEvent: "webkitAnimationEnd"
    };
    for (i in a)
        if (window[i]) {
            e = a[i];
            break
        }
    return "string" == typeof e && (n = !0),
    n
}
module.exports = browser;
