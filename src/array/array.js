Array.prototype.unique = function() {
    var e, i, t = [], a = {};
    for (e = 0,
    i = this.length; e < i; e++)
        a[this[e]] || (t.push(this[e]),
        a[this[e]] = !0);
    return t
}
Array.prototype.equals = function(e) {
    var i, t;
    if (!e)
        return !1;
    if (this.length != e.length)
        return !1;
    for (i = 0,
    t = this.length; i < t; i++)
        if (this[i]instanceof Array && e[i]instanceof Array) {
            if (!this[i].equals(e[i]))
                return !1
        } else if (this[i] != e[i])
            return !1;
    return !0
}
var array = {


}
module.exports = array;
