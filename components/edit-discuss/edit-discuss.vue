<template>
	<view class="box">
		<view class="close-text">
			<text>发讨论</text>
			<view>
				<u-line color="#e0dde3" length="750rpx"/>
			</view>
		</view>
		<view class="btn">
			<u-button type="primary" :custom-style="customStyle" :ripple="true" 
			ripple-bg-color="rgba(0,0,0,0.2)">确</u-button>
		</view>
		<view class="body">
			<view class="title">
				<u-input v-model="title" type="text" 
				:clearable="false" placeholder="标题" height="80" 
				:custom-style="titleCustomStyle"
				placeholder-style="font-size: 35rpx;color:#c8c5ca"/>
			</view>
			<u-line color="#e0dde3" length="699rpx"/>
			<view class="content">
				<jinEdit placeholder="内容" @editOk="editOk" 
				uploadFileUrl="/#"
				:showImgResize="true"
				></jinEdit> 
			</view>
		</view>
	</view>
</template>

<script>
	import jinEdit from 'components/jin-edit/jin-edit.vue';
	export default {
		props:['foodId'],
		name:"edit-discuss",
		data() {
			return {
				customStyle: {
					borderColor: '#1a56b4',
					height:'100rpx',
					width: '100rpx',
					height: '50rpx',
				},
				titleCustomStyle:{
					fontSize:'35rpx',
				},
				title:'',
			};
		},
		
		components:{
			jinEdit,
		}
	}
</script>

<style lang="scss" scoped>
.box {
	position: relative;
	.close-text{
		position: absolute;
		top:24rpx;
		left: 50rpx;
		width: 200rpx;
		font-size: 35rpx;
		view {
			width: 100%;
			margin-top: 20rpx;
			margin-left: -50rpx;
		}
	}
	.btn {
		position: absolute;
		top:25rpx;
		right: 25rpx;
	}
	.body {
		position: absolute;
		width: 700rpx;
		top:99rpx;
		right: 25rpx;
		.title {
			margin-bottom: 10rpx;
		}
		.content {
			margin-top: 20rpx;
			margin-left: -35rpx;
		}
	}
}
</style>
