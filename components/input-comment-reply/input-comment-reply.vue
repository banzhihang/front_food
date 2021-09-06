<template>
	<view class="box-x">
		<view class="bottom-line">
			<u-line color="#e4e7ed" length="800rpx"/>
		</view>
		<view class="btn1">
			<text>评论千万条，友善第一条</text>
		</view>
		<view class="btn2">
			<text>确定</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:["content"],
		name:"input-comment-reply",
		data() {
			return {
			};
		}
	}
</script>

<style lang="scss" scoped>
.box-x {
	display: flex;
	justify-content: space-between;
	height: 100%;
	width: 100%;
	position: relative;
	.btn1 {
		flex:1;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 30rpx;
		color: #999999;
	}
	.btn2{
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-right: 20rpx;
		color: #2979ff;
	}
	.bottom-line {
		position: absolute;
		top: 0rpx;
		left: -30rpx;
	}
}
</style>
