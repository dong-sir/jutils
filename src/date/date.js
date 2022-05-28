var date = {
    /**
     * [getTimeInterval 获取两个时间的间隔]
     * @author dongsir
     * @DateTime 2019-09-05
     * @version  [version]
     * @param    {[type]}   st [开始时间]
     * @param    {[type]}   et [结束时间]
     * @return   {[type]}      [返回间隔的天、小时、分钟和秒]
     */
    getTimeInterval: function (st, et) {
        var dateLeft = 0,
            hourLeft = 0,
            minuteLeft = 0,
            secondLeft = 0,
            timeLeft = [0, 0, 0, 0],
            timeStr = "";
        var ts = (et > st) ? parseInt((et - st) / 1000) : 0;
        timeLeft[0] = (ts > 86400) ? parseInt(ts / 86400) : 0;
        ts = ts - timeLeft[0] * 86400;
        timeLeft[1] = (ts > 3600) ? parseInt(ts / 3600) : 0;
        ts = ts - timeLeft[1] * 3600;
        timeLeft[2] = (ts > 60) ? parseInt(ts / 60) : 0;
        timeLeft[3] = ts - timeLeft[2] * 60;
        timeStr = (timeLeft[0] > 0) ? timeLeft[0] + "天" : "";
        timeStr += (timeLeft[0] <= 0 && timeLeft[1] <= 0) ? "" : (timeLeft[1] + "小时");
        timeStr += (timeLeft[0] <= 0 && timeLeft[1] <= 0 && timeLeft[2] <= 0) ? "" : (timeLeft[2] + "分钟");
        timeStr += (timeLeft[0] <= 0 && timeLeft[1] <= 0 && timeLeft[2] <= 0 && timeLeft[3] <= 0) ? "" : timeLeft[3] + "秒";
        return timeStr;
    },
    /**
     * js 时间戳的转换（自定义格式）
     * @param  date [创建 Date 对象]
     * @param  formatStr [日期格式]
     * @return (string) 日期时间
     */
    formatDate: function (date, formatStr) {
        function addZero(v, size) {
            for (var i = 0, len = size - (v + "").length; i < len; i++) {
                v = "0" + v;
            };
            return v + "";
        }
        var arrWeek = ['日', '一', '二', '三', '四', '五', '六'],
            str = formatStr.replace(/yyyy|YYYY/, date.getFullYear()).replace(/yy|YY/, addZero(date.getFullYear() % 100, 2)).replace(/mm|MM/, addZero(date.getMonth() + 1, 2)).replace(/m|M/g, date.getMonth() + 1).replace(/dd|DD/, addZero(date.getDate(), 2)).replace(/d|D/g, date.getDate()).replace(/hh|HH/, addZero(date.getHours(), 2)).replace(/h|H/g, date.getHours()).replace(/ii|II/, addZero(date.getMinutes(), 2)).replace(/i|I/g, date.getMinutes()).replace(/ss|SS/, addZero(date.getSeconds(), 2)).replace(/s|S/g, date.getSeconds()).replace(/w/g, date.getDay()).replace(/W/g, arrWeek[date.getDay()]);
        return str;
    },
}

module.exports = date;
