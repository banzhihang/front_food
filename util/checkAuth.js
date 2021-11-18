export function getLocationFail(){
	uni.showToast({
		title:"获取定位失败",
		icon:"error"
	})
	uni.navigateTo({
		url:'/pages/openauth/openauth'
	})
}

export function getUserInfoFail(){
	uni.showToast({
		title:"获取授权信息失败",
		icon:"error"
	})
	uni.navigateTo({
		url:'/pages/openauth/openauth'
	})
}