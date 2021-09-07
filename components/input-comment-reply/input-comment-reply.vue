<template>
	<view class="box-x">
		
		<view class="btn1">
			<u-input v-model="inputValue" 
			type="textarea"
			:clearable="false"
			placeholder-style="font-size: 30rpx;color: #afaeb0;"
			maxlength="1000"
			:auto-height="true"
			:height="40"
			ref="textare"
			:placeholder="content" />
		</view>
		<view class="btn2" >
			<text :style="{color:(inputValue ? '#2B63F3' : '#B9D0F9')}">确定</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			content:{
				type: String,
				default: "评论千万条，友善第一条"
			}
		},
		name:"input-comment-reply",
		data() {
			return {
				inputValue:"",
			};
		},
	}
</script>

<style lang="scss" scoped>
.box-x {
	width: 100%;
	position: relative;
	display: flex;
	padding-bottom: 25rpx;
	box-sizing: border-box;
	.btn1 {
		background-color: #FFFFFF;
		margin-left: 30rpx;
		color: #bab9bc;
		position: relative;
		top: 15rpx;
		left: 0;
		width: 75%;
		background-color:#F7F7F7 ;
		border-radius: 30rpx;
		padding-left: 30rpx;
		padding-top: 6rpx;
	}
	.btn2{
		flex: 1;
		font-size: 30rpx;
		position: relative;
		bottom: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 30rpx;
	}
}
</style>
