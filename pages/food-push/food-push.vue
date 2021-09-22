<template>
	<view>
		<view class="top">
			<u-navbar :is-back="true" :border-bottom="false" 
			:back-text-style="navCustomStyle"
			back-icon-color="#000000"
			back-text="取消" >
				<view class="top-wrap">
					<view class="btn">
						<view>
							<u-button :ripple="true"
								type="primary"
								:custom-style="customStyle"
								ripple-bg-color="rgba(0,0,0,0.2)"
								>确定
							</u-button>
						</view>
					</view>
				</view>
			</u-navbar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customStyle: {
					borderColor: '#1a56b4',
					height:'100rpx',
					width: '100rpx',
					height: '50rpx',
				},
				navCustomStyle: {
					color:'#000000',
					fontSize:'32rpx',
				},
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
	}
}
</style>
