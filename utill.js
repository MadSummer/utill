'use strict';
var utill = {};
utill.querystring = function (params, url) {
		var reg = new RegExp("(^|&)" + params + "=([^&]*)(&|$)", "i");
		var r = url.match(reg);  //获取url中"?"符后的字符串并正则匹配
		var context = "";
		if (r != null)
		context = r;//返回匹配的查询
		reg = null;
		r = null;
		return context == null || context == "" || context == "undefined" ? "" : context;
		/*
		*
		*	utill.querystring('data','http://www.host.com/search?name=lj&data=testdata')
		* ["&data=testdata", "&", "testdata", "", index: 34, input: "http://www.host.com/search?name=lj&data=testdata"]
		*
		*/
};
utill.cookie = {
		'prefix': '',
		// 保存 Cookie
		'set': function (name, value, seconds) {
		var expires = new Date();
		expires.setTime(expires.getTime() + (1000 * seconds));
		document.cookie = this.name(name) + "=" + escape(value) + "; expires=" + expires.toGMTString() + "; path=/";
		},
		// 获取 Cookie
		'get': function (name) {
		cookie_name = this.name(name) + "=";
		cookie_length = document.cookie.length;
		cookie_begin = 0;
		while (cookie_begin < cookie_length) {
			value_begin = cookie_begin + cookie_name.length;
			if (document.cookie.substring(cookie_begin, value_begin) == cookie_name) {
				var value_end = document.cookie.indexOf(";", value_begin);
				if (value_end == -1) {
					value_end = cookie_length;
				}
				return unescape(document.cookie.substring(value_begin, value_end));
			}
			cookie_begin = document.cookie.indexOf(" ", cookie_begin) + 1;
			if (cookie_begin == 0) {
				break;
			}
		}
		return null;
		},
		// 清除 Cookie
		'del': function (name) {
		var expireNow = new Date();
		document.cookie = this.name(name) + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT" + "; path=/";
		},
		'name': function (name) {
		return this.prefix + name;
		}
};
utill.agent = function () {
		var agent = navigator.userAgent;
		var isAndroid = agent.indexOf('Android') > -1 || agent.indexOf('Linux') > -1;
		var isIOS = !!agent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
		var isWX = agent.match(/MicroMessenger/i) == "micromessenger";
		if (isWX && isAndroid) {
		return 'androidWX';
		}
		else if (isWX && isIOS) {
		return 'iOSWX';
		}
		else if (isAndroid) {
		return 'android';
		}
		else if (isIOS) {
		return 'ios';
		}
		else {
		return 'unknown'
		}
};
// 按当前环境返回
// commonjs
if (typeof module !== 'undefined' && module.exports) {
	module.exports = myPlugin;
}

// amd require
else if (typeof define !== 'undefined' && define.amd) {
	define('utill', [], function () {
		return utill;
	})
}

else {
	window.utill = utill;
}
