# utill
自己收集或者写的一些常用函数封装

# 引用方式

  直接引用或者amd，commonjs均可。

## querystring
  
  查找匹配url参数

### 示例：

  utill.querystring('data','http://www.host.com/search?name=lj&data=testdata') =>

  ["&data=testdata", "&", "testdata", "", index: 34, input: "http://www.host.com/search?name=lj&data=testdata"]

## cookie

  设置cookie

## agent

  用户代理判断
  - androidWX：android客户端微信
  - iOSWX： iOS客户端微信
  - ios： iOS设备
  - android： android设备
  - unknow: 其他设备