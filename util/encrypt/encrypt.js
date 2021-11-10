var CryptoJS = require("crypto-js")

// 加密post请求数据
export function encrypt(data) {
	const iv = CryptoJS.enc.Utf8.parse("\x01\x02\x03\x04\x05\x06\x07\x08\x01\x02\x03\x04\x05\x06\x07\x08")
	const key = CryptoJS.enc.Utf8.parse("ytUQ7l2ZZu8mLvJZ");
	var encrypt = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
			iv: iv,
	        mode: CryptoJS.mode.CBC,
	        padding: CryptoJS.pad.Pkcs7
	    })
	    var encRes=encrypt.toString()
		let res = {
			"body_string":encRes
		}
		return res
}