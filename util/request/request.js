import Vue from 'vue'
import axios from 'axios'

const service = axios.create({
	baseURL: 'http://10.129.85.77:8000', 
	timeout: 6000, 
	crossDomain: true
})


service.interceptors.request.use(
    config => {
		const token = uni.getStorageSync("loginToken")
		if (token) {
			config.headers["AUTHORIZATION"] = token
		}
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
); 

//配置成功后的拦截器
service.interceptors.response.use(res => {
	const httpStatus = res.status
    if (httpStatus== 200) {
		const code = res.data.code
		if (code === "10" || code === "11" || code === "12" || code === "4" || code === "6"){
			uni.navigateTo({
				url: "/pages/self/login"
			})
		} else if (code === "14") {
			uni.redirectTo({
				url: "/pages/self/servererror",
			})
		} else if (code === "2") {
			uni.showToast({
				title:"请求失败",
				icon:"error"
			})
		} else if (code === "9") {
			uni.showToast({
				title:"登录失败，请稍后再试",
				icon:"none"
			})
		}
		
        return res
    } else {
        return Promise.reject(res.errMsg);
    }
}, error => {
	const code = error.response.status
	if (code === 429) {
		uni.showToast({
			title:"操作太快啦，休息一下吧",
			icon:"none",
			success() {
				setTimeout(()=>{
					uni.navigateBack({})
				},2000)
			}
		})
	} else {
		uni.redirectTo({
			url: "/pages/self/servererror",
		})
	}
    return Promise.reject(error)
})


// 在main.js中放入这段自定义适配器的代码，就可以实现uniapp的app和小程序开发中能使用axios进行跨域网络请求，并支持携带cookie
axios.defaults.adapter = function(config) { 
    return new Promise((resolve, reject) => {
        var settle = require('axios/lib/core/settle');
        var buildURL = require('axios/lib/helpers/buildURL');
        uni.request({
            method: config.method.toUpperCase(),
            url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
            header: config.headers,
            data: config.data,
            dataType: config.dataType,
            responseType: config.responseType,
            sslVerify: config.sslVerify,
            complete: function complete(response) {
                response = {
                    data: response.data,
                    status: response.statusCode,
                    errMsg: response.errMsg,
                    header: response.header,
                    config: config
                };

                settle(resolve, reject, response);
            }
        })
    })
}


export default service