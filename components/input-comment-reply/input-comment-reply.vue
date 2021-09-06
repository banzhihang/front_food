<template>
	<view class="box">
		<view class="btn1">
			<u-button size="default"
			:custom-style="customStyle"
			:plain="true"
			:hair-line="false"
			>
			评论千万条，友善第一条
			</u-button>
		</view>
		<view class="btn2">
			<u-button size="default"
			:custom-style="customStyle"
			:plain="true"
			:hair-line="false"
			>确定</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		props:["content"],
		name:"input-comment-reply",
		data() {
			return {
				customStyle:{
					borderStyle: "none" ,
					fontSize: "28rpx",
					padding: "30rpx 40rpx 30rpx 40rpx",
				},
			};
		}
	}
</script>

<style lang="scss" scoped>
.box {
	display: flex;
	justify-content: space-between;
	height: 100%;
	width: 100%;
	.btn1 {
		flex:1;
		text-align: left;
	}
}
</style>
