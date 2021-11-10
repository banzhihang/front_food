<template>
	<view>
		<my-loading :active="showLoading" v-if="showLoading"></my-loading>
		<view class="header">
			<view class="avatar">
				<u-avatar :src="userInfo.user_head_portrait" size="100"></u-avatar>
			</view>
			<view class="name">
				<view >{{userInfo.user_nick_name}}</view>
			</view>
		</view>
		
		<view class="body">
			<u-card 
			box-shadow="rgba(0, 0, 0, 0.1) 1rpx 1rpx 3rpx 3rpx"
			:head-border-bottom="false"
			:foot-border-top="false"
			border-radius="20"
			>
				<view slot="body" class="body-middle">
					<view class="first-box" @click="jumpToMyContent('想吃',1)">
						<text>想吃</text>
						<u-icon name="arrow-right" size="20"></u-icon>
						<view class="eated-want first">
							<u-image width="100%" height="200rpx" :src="userInfo.want_eat_img"></u-image>
						</view>
						<text>{{userInfo.want_eat_num}}</text>
					</view>
					
					<view class="second-box" @click="jumpToMyContent('吃过',2)">
						<text>吃过</text>
						<u-icon name="arrow-right" size="20"></u-icon>
						<view class="eated-want first">
							<u-image width="100%" height="200rpx" :src="userInfo.eated_img"></u-image>
						</view>
						<text>{{userInfo.eated_num}}</text>
					</view>
					
					<view class="third-box" @click="jumpToMyContent('我的发布',3)">
						<text>我的发布</text>
						<u-icon name="arrow-right" size="20"></u-icon>
						<view class="eated-want first">
							<u-image width="100%" height="200rpx" :src="userInfo.my_push_img"></u-image>
						</view>
						<text>{{userInfo.push_num}}</text>
					</view>
				</view>
			</u-card>
		</view>
		
	</view>
</template>

<script >
	import {
		checkLogin
	} from '../../util/checkLogin.js'
	import {userDataUrl} from '@/util/api.js';
	export default {
		data() {
			return {
				showLoading:true,
				userInfo:{},
				location:"",
			}
		},
		methods: {
			jumpToMyContent(title,type) {
				let link = ""
				if (title === "想吃") {
					link = this.userInfo.my_want_link
				}else if (title === "吃过"){
					link = this.userInfo.my_eated_link
				}else {
					link = this.userInfo.my_push_link
				}
				
				link = link + "?location=" + this.location
				const data = {
					link : link,
					title : title,
				}
				
				let item = encodeURIComponent(JSON.stringify(data))
				uni.navigateTo({
					url: "/pages/self/my-content?item=" + item,
					animationDuration:700,
				})
			},
			getLocation() {
				const that = this
				if (that.location === "") {
					uni.authorize({
							scope: 'scope.userLocation',
							success(res) {
								uni.getLocation({
									success: async function (r){
										const location = r.latitude.toString() + "," + r.longitude.toString()
										that.location = location
										that.syncData()
								}})
							},
							fail() {
								uni.showToast({
									title:"获取定位失败"
								})
							}
						}
					)
				} else {
					this.syncData()
				}
			},
			
			// 获取个人数据
			async syncData() {
				const {data:res} = await this.$http.get(userDataUrl)
				this.userInfo = res.data
				this.nextUrl = res.data.next
				this.showLoading = false
			}
		},
		onShow() {
			// 先检查用户是否登录
			const canContinue = checkLogin()
			if (canContinue) {
				this.getLocation()
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-color: #ededed;
}

.header {
	margin-top: 100rpx;
	margin-bottom: 50rpx;
	text-align: center;
}
.body {
	.body-middle{
		justify-content: space-between;
		margin-top: -50rpx;
		margin-bottom: 10rpx;
		display: flex;
		.first-box {
			text-align: center;
			text {
				font-size: 26rpx;
				margin-right: 5rpx;
			}
		}
		.second-box {
			text-align: center;
			text {
				font-size: 26rpx;
				margin-right: 5rpx;
			}
		}
		.third-box {
			text-align: center;
			text {
				font-size: 26rpx;
				margin-right: 5rpx;
			}
		}
		.eated-want {
			overflow: hidden;
			width: 150rpx;
			height: 200rpx;
			background-color: #F7F7F7;
			box-shadow:rgba(0, 0, 0, 0.1) 1rpx 1rpx 3rpx 3rpx;
			border-radius: 20rpx;
			margin-top: 10rpx;
			margin-bottom: 10rpx;
		}
	}
}
</style>
