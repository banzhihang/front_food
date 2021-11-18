<template>
	<view>
		<u-toast ref="uToast" />
		<view class="top">
			<u-navbar :is-back="true" :border-bottom="false" 
			:back-text-style="navCustomStyle"
			back-icon-color="#000000"
			back-text="发讨论" >
				<view class="top-wrap">
					<view class="btn">
						<view class="btn-ok">
							<u-button :ripple="true"
								type="primary"
								:custom-style="customStyle1"
								ripple-bg-color="rgba(0,0,0,0.2)"
								@click="submitDiscuss"
								>确定
							</u-button>
						</view>
					</view>
				</view>
			</u-navbar>
		</view>
		<view class="body">
			<view class="title">
				<u-input v-model="discussTitle" type="text"
				:clearable="false" placeholder="标题" height="80" 
				maxlength="10"
				:custom-style="titleCustomStyle"
				placeholder-style="font-size: 38rpx;color:#c8c5ca"/>
			</view>
			<view class="line-in">
				<u-line color="#e0dde3" length="690rpx"/>
			</view>
			<view class="content">
				<u-input v-model="content" type="textarea"
				:clearable="false" placeholder="内容" height="260" 
				:auto-height="true"
				maxlength="2000"
				:custom-style="contentStyle"
				placeholder-style="font-size: 32rpx;color:#c8c5ca"/>
			</view>
			<view class="upload">
				<u-upload :action="action" :max-size="4 * 1024 * 1024" :auto-upload="false" @on-choose-complete="chooseReady"
				upload-text="添加图片" del-bg-color="#1a56b4" ref="uUpload"
				max-count="5" :formData="formData" 
				></u-upload>
			</view>
			<u-popup v-model="showError" mode="bottom" length="70%"  @close="closeError"
			:closeable="true" close-icon-size="44" border-radius="40">
				<view class="err-title">请更正以下错误</view>
				<view class="err-item">
					<view v-for="item,index in errInfo" :key="index">
						<u-alert-tips type="error" :title="item.name" :description="item.value" :show-icon="true">
						</u-alert-tips>
						<view style="height: 20rpx;"></view>
					</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	import Schema from 'async-validator';
	import {getUploadToken} from '../../util/request/upload.js';
	import {discussPushDomain,photoDomain} from '../../util/api.js';
	import {encrypt} from '../../util/encrypt/encrypt.js'
	import {checkLogin} from '../../util/checkLogin.js'
	export default {
		data() {
			return {
				customStyle1: {
					borderColor: '#f3eff6',
					backgroundColor:'#3363D1',
					height:'120rpx',
					width: '120rpx',
					height: '50rpx',
				},
				navCustomStyle: {
					color:'#000000',
					fontSize:'33rpx',
				},
				discussTitle:"",
				content:"",
				titleCustomStyle:{
					fontSize:'38rpx',
				},
				contentStyle:{
					fontSize:'32rpx',
				},
				food:-1,
				showError:false,
				errInfo:[],
				imageList:[],
				// 字段名到错误信息名称的映射
				errDict:{
					"title":"讨论标题",
					"content":"讨论内容",
					"image":"讨论配图"
				},
				action:"https://up-z2.qiniup.com",
				formData:{
					token:''
				}
			};
		},
		methods:{
			// 关闭错误提示
			closeError(){
				this.errInfo = []
			},
			// 提交信息
			async submitDiscuss(){
				const concanContinue = checkLogin()
				if (!concanContinue) {
					return
				}
				
				let imageResp = this.$refs.uUpload.lists.filter(val => {
					return val.progress == 100;
				})
				
				let image = imageResp.forEach((item)=>{
					const url = photoDomain + item.response.key
					this.imageList.push(url)
				})
				
				const data = {
					food:this.food,
					title:this.discussTitle.replace(/\s+/g,""),
					content:this.content,
					image:this.imageList
				}
				
				// 校验规则
				const descriptor = {
				  title: {
				    title: "string",
					max:10,
					min:2,
				    required: true,
				    message: "标题最少两个字"
				  },
				  content:{
					type: "string",
					max:200,
					min:4,
					required: false,
					message: "内容最少四个字"  
				  },
				  image:{
					 type: "array",
					 max:5,
					 min:0,
					 required: false,
					 message: "最多5张照片" 
				  }
				}
				
				const validator = new Schema(descriptor)
				const that = this
				validator.validate(data, (errors, fields) => {
				  // 构建错误信息
				  if (errors) {
					for (var item in errors) {
						let tmp = {
							name:that.errDict[errors[item].field],
							value:errors[item].message
						}
						that.errInfo.push(tmp)
					}
					that.showError=true
					that.imageList = []
					return
				  } else {
					  this.subPostData(data)
				  }
				})
			},
			// 真正发起数据请求
			async subPostData(data){
				uni.showLoading({
					title:"发布中",
					mask:true
				})
				const url = discussPushDomain
				const enData = encrypt(data)
				const {data:res} = await this.$http.post(url,enData)
				uni.hideLoading()
				uni.showToast({
					title:"已提交审核",
					success() {
						setTimeout(()=>{
							uni.navigateBack({})
						},1500)
					}
				})
			},
			// 照片选择完毕
			async chooseReady(lists) {
				const token = await getUploadToken()
				this.formData.token = token
				// 设置延迟的目的，第一次token为空，双向绑定token还未到达子组件，故延迟500ms
				setTimeout(()=>{
					this.$refs.uUpload.upload();
				},500)
			},
		},
		onLoad(options) {
			let data = JSON.parse(decodeURIComponent(options.item))
			this.food = data.food
			checkLogin()
		}
	}
</script>

<style lang="scss" scoped>
.top-wrap {
	width: 100%;
	.btn {
		display: flex;
		justify-content: flex-end;
		margin-right: 20rpx;
		.btn-ok {
			border-radius: 20rpx;
		}
	}
}
.body{
	padding-left: 30rpx;
	.content {
		padding-top: 10rpx;
		padding-right: 20rpx;
	}
	.upload{
		margin-left: -10rpx;
		/deep/ .u-add-tips {
			color: #8C8C8C;
		}
		/deep/ .u-iconfont{
			color: #8C8C8C;
		}
		/deep/ .u-add-wrap {
			width: 218rpx !important;
			height: 218rpx !important;
			border-radius: 20rpx;
			overflow: hidden;
		}
		/deep/ .u-preview-wrap{
			width: 218rpx !important;
			height: 218rpx !important;
			border-radius: 20rpx;
			overflow: hidden;
		}
	}
	.title {
		margin-bottom: 10rpx;
	}
	
	.err-item {
		margin-top: 70rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
	}
	.err-title {
		margin-top: 60rpx;
		text-align: center;
		font-size: 40rpx;
	}
}
</style>
