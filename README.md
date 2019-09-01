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



## API 

* 浏览器
  * getBrowserInfo	获取浏览器信息
  ```javascript
jutils.getBrowserInfo();
//{name: "Chrome", version: "76.0.3809.100"}
  ```
  * isCss3Support	判断是否支持css3
  ``` javascript
jutils.isCss3Support() ? true : false
  ```
  
  
  
* 转换

    * 字符串反转

    ``` javascript
    jutils.reverseStr("sj.slituj");
    // jutils.js
    ```





## Questions?

If you have any questions, please feel free to ask through [New Issue](https://github.com/dong-sir/jutils/issues/new).

## License

jutils.js is available under the terms of the [MIT License](./LICENSE).