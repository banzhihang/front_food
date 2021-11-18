
// 检查是否登录，未登录就跳转
export function checkLogin(dontNeedGoto){
	const token = uni.getStorageSync("loginToken")
	if (token) {
		return true
	} else {
		if (!dontNeedGoto){
			uni.navigateTo({
				url:'/pages/self/login'
			})
			return false
		} else {
			return false
		}
	}
}