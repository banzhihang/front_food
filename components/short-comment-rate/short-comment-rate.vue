<template>
	<view class="box">
		<view class="btn">
			<u-button type="warning" :ripple="true" ripple-bg-color="rgba(0,0,0,0.2)" @click="submitShortComment">确定</u-button>
		</view>
		<view class="rate-text">
			<text>{{rateText}}</text>
		</view>
		<view class="rate">
			<u-rate size='70' active-color='#EC9F3A' inactive-color='#b4b7c1' 
			gutter='15' min-count='1' v-model='rateNum' @change="rateChange"></u-rate>
		</view>
		<view class="short-comment">
			<u-input type="textarea"
			:clearable="false" placeholder="说说你吃过之后的感受吧..." placeholder-style="font-size:30rpx;color:#bfbac2"
			:auto-height="true" maxlength='200' :border="true" 
			:custom-style="customStyle"
			cursor-spacing="20"
			height="250" border-color="#e9ecf0" v-model="content"/>
		</view>
		<u-popup v-model="showError" mode="bottom" length="60%"  @close="closeError"
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
</template>

<script>
	import Schema from 'async-validator';
	import {encrypt} from '../../util/encrypt/encrypt.js'
	import {checkLogin} from '../../util/checkLogin.js'
	import {shortCommentPushDomain} from '../../util/api.js'
	export default {
		name:"short-comment-rate",
		props:["food"],
		data() {
			return {
				customStyle:{
					fontSize:"32rpx"
				},
				content:"nihao",
				rateText:'点击星星评分',
				rateNum:0,
				// 字段名到错误信息名称的映射
				errDict:{
					"score":"评分",
					"content":"短评"
				},
				showError:false,
				errInfo:[]
			};
		},
		methods: {
			rateChange(value){
				switch(value){
					case 1:
						this.rateText = '很差'
						break
					case 2:
						this.rateText = '较差'
						break
					case 3:
						this.rateText = '还行'
						break
					case 4:
						this.rateText = '推荐'
						break
					case 5:
						this.rateText = '力荐'
						break
				}
				this.rateNum = value
			},
			clean(){
				this.rateNum = 0
				this.rateText = '点击星星评分'
			},
			ready(){
				this.content = ""
			},
			// 关闭错误提示
			closeError(){
				this.errInfo = []
			},
			// 提交信息
			async submitShortComment(){
				const concanContinue = checkLogin()
				if (!concanContinue) {
					return
				}
				const data = {
					food:this.food,
					content:this.content,
					score:this.rateNum
				}
				
				// 校验规则
				const descriptor = {
					content:{
						type: "string",
						max:200,
						min:2,
						required: true,
						message: "短评内容至少2个字"  
					},
					score:{
						type:"integer",
						max:5,
						min:1,
						required:true,
						message:"评分不能为空"
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
				const url = shortCommentPushDomain
				const enData = encrypt(data)
				const {data:res} = await this.$http.post(url,enData)
				uni.hideLoading()
				uni.showToast({
					title:"发布成功",
					success() {
						setTimeout(()=>{
							uni.navigateBack({})
						},1500)
					}
				})
			},
		},
	}
</script>

<style lang="scss" scoped>
.box{
	position: relative;
	.btn {
		position: absolute;
		top:23rpx;
		right: 40rpx;
		width: 100rpx;
		height: 100rpx;
	}
	.rate {
		position: absolute;
		top:250rpx;
		right: 480rpx;
		width: 100rpx;
	}
	.rate-text {
		position: absolute;
		top:200rpx;
		right: 20rpx;
		width: 750rpx;
		text-align: center;
		color: #b4b7c1;
		font-size: 25rpx;
		padding-left: 55rpx;
	}
	.short-comment {
		color: #000000;
		display: inline-block;
		left: 50rpx;
		position: absolute;
		top:400rpx;
		width: 650rpx;
		color:#bfbac2 ;
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
		color: #000000;
	}
}
</style>
