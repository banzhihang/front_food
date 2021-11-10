
// 检查是否登录，未登录就跳转
export function checkLogin(){
	const token = uni.getStorageSync("loginToken")
	if (token) {
		return true
	} else {
		uni.navigateTo({
			url:'/pages/self/login'
		})
		return false
	}
}