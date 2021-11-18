<template>
	<view>
		<u-toast ref="uToast" />
		<view class="top">
			<u-navbar :is-back="true" :border-bottom="false" 
			:back-text-style="navCustomStyle"
			back-icon-color="#000000"
			back-text="取消" >
				<view class="top-wrap">
					<view class="btn">
						<!-- <view class="btn-draft">
							<u-button :ripple="true"
								type="default"
								:plain="true"
								:custom-style="customStyle1"
								ripple-bg-color="rgba(0,0,0,0.2)"
								:hair-line="false"
								>存草稿
							</u-button>
						</view> -->
						<view class="btn-ok">
							<u-button :ripple="true"
								type="primary"
								:custom-style="customStyle2"
								ripple-bg-color="rgba(0,0,0,0.2)"
								@click="submitFood"
								>确定
							</u-button>
						</view>
					</view>
				</view>
			</u-navbar>
		</view>
		<view class="body">
			<view class="title">
				<u-input v-model="foodName" type="text"
				:clearable="false" placeholder="美食名称" height="80" 
				maxlength="10"
				:custom-style="titleCustomStyle"
				placeholder-style="font-size: 32rpx;color:#c8c5ca"/>
			</view>
			<view class="line-in">
				<u-line color="#e0dde3" length="690rpx"/>
			</view>
			<view class="desc">
				<u-input v-model="desc" type="textarea"
				:clearable="false" placeholder="美食描述" height="260" 
				:auto-height="true"
				maxlength="200"
				:custom-style="descCustomStyle"
				placeholder-style="font-size: 32rpx;color:#c8c5ca"/>
			</view>
			<view class="upload">
				<u-upload :action="action" :max-size="4 * 1024 * 1024" :auto-upload="false" @on-choose-complete="chooseReady"
				upload-text="美食·餐厅图片" del-bg-color="#1a56b4"  :formData="formData" 
				max-count="20" ref="uUpload"
				></u-upload>
				
			</view>
			<view class="restaurant-name">
				<u-icon name="home" size="23" style="margin-right: 5rpx;"></u-icon>
				<text>餐厅名称： &nbsp;&nbsp;</text>
				<view class="name-input">
					<u-input v-model="restaurantName" type="text"
					:clearable="false" placeholder=" " height="60" 
					maxlength="20"
					:custom-style="restaurantNameCustomStyle"
					/>
				</view>
			</view>
			<view class="location">
				<u-icon name="map" size="25" style="margin-right: 3rpx;"></u-icon>
				<text>餐厅地点： </text>
				<text @click="chooseLocation()">{{getShowLocationName(locationName)}}</text>
				<u-icon name="arrow-down" size="25" :style="{marginLeft:(locationName.length > 15 ? '0rpx':'10rpx')}" @click="chooseLocation()"></u-icon>
			</view>
			<view style="height: 100rpx;"></view>
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
	import {foodPushUrl,photoDomain} from '../../util/api.js';
	import {getUploadToken} from '../../util/request/upload.js';
	import {encrypt} from '../../util/encrypt/encrypt.js'
	import {checkLogin} from '../../util/checkLogin.js'
	import {getLocationFail,getUserInfoFail} from '@/util/checkAuth.js'
	export default {
		options: { styleIsolation: 'shared' },
		data() {
			return {
				customStyle1: {
					borderColor: '#f3eff6',
					height:'120rpx',
					width: '120rpx',
					height: '50rpx',
				},
				customStyle2: {
					borderColor: '#3363D1',
					backgroundColor:'#3363D1',
					height:'120rpx',
					width: '120rpx',
					height: '50rpx',
				},
				navCustomStyle: {
					color:'#000000',
					fontSize:'32rpx',
				},
				restaurantNameCustomStyle:{
					color:'#8C8C8C',
					fontSize:'28rpx',
					width:'100%'
				},
				titleCustomStyle:{
					fontSize:'35rpx',
				},
				descCustomStyle:{
					fontSize:'32rpx',
				},
				locationName:"",
				imageList:[],
				foodName:"",
				desc:"",
				restaurantName:"",
				location:"",
				showError:false,
				errInfo:[],
				// 字段名到错误信息名称的映射
				errDict:{
					"name":"美食名称",
					"desc":"美食描述",
					"restaurant_name":"餐厅名称",
					"address":"美食地点",
					"image":"美食照片"
				},
				action:"https://up-z2.qiniup.com",
				formData:{
					token:''
				}
			};
		},
		methods:{
			getShowLocationName(name){
				if(name.length > 15){
					return name.substr(0,15) + '...'
				}else {
					return name
				}
			},
			// 用户选择当前定位
			chooseLocation(){
				const that = this
				uni.authorize({
					scope: 'scope.userLocation',
					success(res) {
						uni.chooseLocation({
							success: function (res) {
								that.location = res.latitude.toString() + "," + res.longitude.toString()
								that.locationName = res.address
							 },
							 fail() {
							 	getLocationFail()
							 }
						});
					},
					fail(err) {
						getUserInfoFail()
					}
				})
			},
			async getLocationNameFromIndex(){
				const url = "/location"
				const {data:res} = await this.$http.get(url,{ params:{
						"location":this.location
					}
				})
				this.locationName = res.data.address_name
			},
			
			// 关闭错误提示
			closeError(){
				this.errInfo = []
			},
			
			// 提交信息
			async submitFood(){
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
					name:this.foodName.replace(/\s+/g,""),
					desc:this.desc.replace(/\s+/g,""),
					address:this.locationName,
					restaurant_name:this.restaurantName.replace(/\s+/g,""),
					location:this.location,
					image:this.imageList
				}
				
				// 校验规则
				const descriptor = {
				  name: {
				    type: "string",
					max:10,
					min:2,
				    required: true,
				    message: "美食名称最少两个字"
				  },
				  desc:{
					type: "string",
					max:200,
					min:4,
					required: true,
					message: "美食描述最少四个字"  
				  },
				  address:{
					type: "string",
					max:100,
					min:4,
					required: true,
					message: "美食地点最少四个字"  
				  },
				  restaurant_name:{
					  type: "string",
					  max:20,
					  min:2,
					  required: true,
					  message: "餐厅名称最少2个字" 
				  },
				  image:{
					 type: "array",
					 max:20,
					 min:4,
					 required: true,
					 message: "需要至少四张照片" 
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
				const url = foodPushUrl
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
				console.log(token,"token")
				this.formData.token = token
				// 设置延迟的目的，第一次token为空，双向绑定token还未到达子组件，故延迟500ms
				setTimeout(()=>{
					this.$refs.uUpload.upload();
				},500)
			},
		},
		

		onLoad(options) {
			let data = JSON.parse(decodeURIComponent(options.item))
			this.location = data.location
			this.getLocationNameFromIndex()
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
		.btn-draft {
			margin-right: 35rpx;
			border-radius: 30rpx;
		}
		.btn-ok {
			border-radius: 20rpx;
		}
	}
}

.body {
		padding-left: 30rpx;
		padding-right: 30rpx;
		.desc {
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
				width: 213.5rpx !important;
				height: 213.5rpx !important;
				border-radius: 20rpx;
				overflow: hidden;
			}
			/deep/ .u-preview-wrap{
				width: 213.5rpx !important;
				height: 213.5rpx !important;
				border-radius: 20rpx;
				overflow: hidden;
			}
		}
		.location {
			white-space: pre-wrap;
			padding-left: 30rpx;
			padding-right: 10rpx;
			margin-top: 20rpx;
			line-height: 70rpx;
			height: 70rpx;
			background-color: #F6F6F6;
			border-radius: 40rpx;
			color: #8C8C8C;
			font-size: 28rpx;
			width: 690rpx;
		}
		.restaurant-name {
			width: 690rpx;
			padding-left: 30rpx;
			padding-right: 30rpx;
			margin-top: 20rpx;
			line-height: 70rpx;
			height: 70rpx;
			background-color: #F6F6F6;
			border-radius: 40rpx;
			color: #8C8C8C;
			font-size: 28rpx;
			display: inline-block;
			.name-input {
				display: inline-block;
				width: 100;
			}
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
