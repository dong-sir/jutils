# jutils

jutils - JavaScript常用函数库

在日常工作生活中，会经常用到一些`日期格式化`，`url相关操作`，`浏览器类型判断`，`常用验证格式`等等函数，虽然大部分只需谷歌/百度一下就能找到，但是大多数都存在着一些问题，于是整理了网上和自己平常用到的工具类，方便大家以后的使用，提升开发效率。



## 安装使用

1. 直接下载jutils.min.js使用，支持UMD通用模块规范。

``` html
<script src="jutils.min.js"></script>
<script>
  var browser = jutils.getBrowserInfo()
</script>
```



## API 目录

### 浏览器

* [getBrowserInfo](#getBrowserInfo) 获取浏览器信息
* [isCss3Support](#isCss3Support) 判断浏览器是否支持css3

### 日期

* [formatDate](#formatDate) 时间戳的转换（自定义格式）
* [getTimeInterval](#getTimeInterval) 获取两个时间的间隔的天、小时、分钟和秒



## API 说明

### getBrowserInfo

获取浏览器信息

```javascript
jutils.getBrowserInfo();
//{name: "Chrome", version: "76.0.3809.100"}
```

### isCss3Support

判断是否支持css3

```javascript
jutils.isCss3Support() ? true : false
```

### formatDate

时间戳的转换（自定义格式）

> 年、月、日、时、分、秒

```javascript
var date = jutils.formatDate(new Date(1533686888*1000),"YYYY-MM-DD HH:ii:ss");
console.log(date);
// 2019-07-09 19:44:01
```

### getTimeInterval

获取两个时间的间隔，返回间隔的天、小时、分钟和秒。 注意：*结束时间要大于开始时间否则返回空*

``` javascript
jutils.getTimeInterval("开始时间", "结束时间");
//例：
jutils.getTimeInterval(1567562605000, 1567649014000)
//1天0小时0分钟9秒
```

