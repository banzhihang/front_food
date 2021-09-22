<template>
	<view>
		<view class="top">
			<u-navbar :is-back="true" :border-bottom="false" 
			:back-text-style="navCustomStyle"
			back-icon-color="#000000"
			back-text="取消" >
				<view class="top-wrap">
					<view class="btn">
						<view class="btn-draft">
							<u-button :ripple="true"
								type="default"
								:plain="true"
								:custom-style="customStyle1"
								ripple-bg-color="rgba(0,0,0,0.2)"
								:hair-line="false"
								>存草稿
							</u-button>
						</view>
						<view class="btn-ok">
							<u-button :ripple="true"
								type="primary"
								:custom-style="customStyle2"
								ripple-bg-color="rgba(0,0,0,0.2)"
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
				maxlength="20"
				:custom-style="titleCustomStyle"
				placeholder-style="font-size: 30rpx;color:#c8c5ca"/>
			</view>
			<view class="line-in">
				<u-line color="#e0dde3" length="690rpx"/>
			</view>
			<view class="desc">
				<u-input v-model="title" type="textarea"
				:clearable="false" placeholder="美食描述" height="260" 
				:auto-height="true"
				maxlength="200"
				:custom-style="descCustomStyle"
				placeholder-style="font-size: 30rpx;color:#c8c5ca"/>
			</view>
			<view class="upload">
				<u-upload :action="action"  :auto-upload="false" 
				upload-text="添加美食图片" del-bg-color="#1a56b4"
				max-count="20"
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
				<text>{{locationName}}</text>
			</view>
			
		</view>
		
	</view>
</template>

<script>
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
					borderColor: '#1a56b4',
					backgroundColor:'#1a56b4',
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
					fontSize:'25rpx',
				},
				titleCustomStyle:{
					fontSize:'35rpx',
				},
				descCustomStyle:{
					fontSize:'30rpx',
				},
				locationName:"中国重庆市北培区天生路",
				foodName:"",
				restaurantName:"",
			};
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
		.location {
			white-space: pre-wrap;
			display:inline-block;
			padding-left: 30rpx;
			padding-right: 30rpx;
			margin-top: 20rpx;
			line-height: 60rpx;
			height: 60rpx;
			background-color: #F6F6F6;
			border-radius: 40rpx;
			color: #8C8C8C;
			font-size: 25rpx;
		}
		.restaurant-name {
			padding-left: 30rpx;
			padding-right: 30rpx;
			margin-top: 20rpx;
			line-height: 60rpx;
			height: 60rpx;
			background-color: #F6F6F6;
			border-radius: 40rpx;
			color: #8C8C8C;
			font-size: 25rpx;
			display: inline-block;
			.name-input {
				display: inline-block;
			}
		}
	}
</style>
