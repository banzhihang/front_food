<template>
	<view>
		<u-toast ref="uToast" />
		<view class="header">
			<view class="in">
				<u-avatar size="120" class="photo"></u-avatar>
				<view class="not-login">未登录</view>
			</view>
		</view>
		<view class="body">
			<view class="content" >登录吃小猪，发现更多美食</view>
			<view class="btn">
				<u-button type="default" 
				:loading="btnLoading"
				:hair-line="false" :ripple="true"
				:plain="true"
				@click="login"
				:custom-style="customStyle" >{{loginText}}</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import {encrypt} from '@/util/encrypt/encrypt.js';
export default {
	data() {
		return {
			customStyle:{
				height:"80rpx",
				width:"430rpx",
				backgroundColor:"#1a5abf",
				color:"#FFFFFF",
				fontSize:"30rpx"
			},
			btnLoading:false,
			userInfo:{},
			code:"",
			loginText:"登录"
		};
	},
	methods:{
		async login(){
			this.btnOnLoading()
			const that = this
				await uni.login({
					provider: 'weixin',
					success(res) {
						that.code = res.code
					},
					fail() {
						that.$refs.uToast.show({
							title: '登录失败',
							type: 'error ',
						})
						that.btnLoaded()
					}
				})
				
				await uni.getUserProfile({
					desc:'获取你的头像及昵称',
					success(res) {
						that.userInfo = res.userInfo
						that.loginMyService()
					},
					fail() {
						that.$refs.uToast.show({
							title: '登录失败',
							type: 'error ',
						})
						that.btnLoaded()
					}
				})
				
			},
			
			async loginMyService(){
				const that = this
				const loginData ={
					"code":that.code,
					"nickName":that.userInfo.nickName,
					"avatarUrl":that.userInfo.avatarUrl,
					"source":"wx"
				}
				const enData = encrypt(loginData)
				const {data:res} = await that.$http.post("/login",enData)
				
				uni.setStorage({
					key:'loginToken',
					data:res.data.token,
					success() {
						const token = uni.getStorageSync('loginToken')
						console.log(token)
						if (token) {
							that.btnLoaded()
							that.$refs.uToast.show({
								title: '登录成功',
								type: 'success',
							})
							uni.navigateBack()
						}
					}
				})	
			},
			
			btnOnLoading(){
				this.btnLoading = true
				this.loginText = "登录中..."
			},
			btnLoaded() {
				this.btnLoading = false
				this.loginText = "登录"
			}
		}
	
}
</script>

<style lang="scss" scoped>
.header {
	text-align: center;
	color: #808080;
	background-color:#F6F6F6 ;
	height: 300rpx;
	padding-top: 100rpx;
	.not-login {
		font-size: 35rpx;
	}
}

.body{
	text-align: center;
	margin-top: 250rpx;
	.btn {
		width: 100%;
		text-align: center;
	}
	.content {
		margin-bottom: 20rpx;
		font-size: 35rpx;
	}
	
}
</style>
