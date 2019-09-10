var validate = {
    checkUserId: function (e) {
        var i, t, a, n, s, o, r, d, l, c, p = {
            11: "北京",
            12: "天津",
            13: "河北",
            14: "山西",
            15: "内蒙古",
            21: "辽宁",
            22: "吉林",
            23: "黑龙江",
            31: "上海",
            32: "江苏",
            33: "浙江",
            34: "安徽",
            35: "福建",
            36: "江西",
            37: "山东",
            41: "河南",
            42: "湖北",
            43: "湖南",
            44: "广东",
            45: "广西",
            46: "海南",
            50: "重庆",
            51: "四川",
            52: "贵州",
            53: "云南",
            54: "西藏",
            61: "陕西",
            62: "甘肃",
            63: "青海",
            64: "宁夏",
            65: "新疆",
            71: "台湾",
            81: "香港",
            82: "澳门",
            91: "国外"
        };
        if ("",
        s = ["1", "0", "x", "9", "8", "7", "6", "5", "4", "3", "2"],
        o = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"],
        i = "",
        !e)
            return "身份证号码不能为空";
        if (18 != e.length)
            return "身份证号码长度应该为18位";
        if (18 == e.length ? i = e.substring(0, 17) : 15 == e.length && (i = e.substring(0, 6) + "19" + e.substring(6, 15)),
        !/^\d+$/.test(i))
            return "身份证格式错误";
        if (t = i.substring(6, 10),
        a = i.substring(10, 12),
        n = i.substring(12, 14),
        0 == /[1-9]\d{3}\-(0[1-9]|1[0-2])\-([0-2]\d|3[0-1])/.test(t + "-" + a + "-" + n))
            return "身份证生日无效。";
        if ((new Date).getFullYear() - t > 150 || (new Date).getTime() - new Date(t,a - 1,n).getTime() < 0)
            return "身份证生日不在有效范围";
        if (a > 12 || 0 == a)
            return "身份证月份无效";
        if (n > 31 || 0 == n)
            return "身份证日期无效";
        if (!p[i.substring(0, 2)])
            return "身份证地区编码错误";
        for (d = 0,
        r = 0; r < 17; r++)
            d += i.charAt(r) * o[r];
        return l = d % 11,
        c = s[l],
        i += c,
        18 != e.length ? "" : i != e.toLowerCase() ? "不是合法的身份证号码" : ""
    },

}
module.exports = validate;
