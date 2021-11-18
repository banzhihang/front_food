<template>
	<view>
		<view class="body">
			<view class="content" >授权后才能正常使用</view>
			<view class="btn">
				<u-button type="default" 
				:loading="btnLoading"
				:hair-line="false" :ripple="true"
				:plain="true"
				@click="open"
				:custom-style="customStyle" >点击授权</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customStyle:{
					height:"80rpx",
					width:"330rpx",
					backgroundColor:"#1a5abf",
					color:"#FFFFFF",
					fontSize:"30rpx"
				},
			};
		},
		methods:{
			open(){
				uni.openSetting({
					success(res){
						uni.navigateBack({
							
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
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
