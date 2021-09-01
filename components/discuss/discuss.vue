<template>
	<view>
		<view v-for="discuss in dissCussList" :key="discuss.id">
			<view class="left">
				<u-icon size="60" name="http://hotschool.ltd/reply.png"></u-icon>
				<view class="comment-num">
					<text class="comment-num-text">
						{{discuss.comment_number}}
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['dissCussList'],
		name:"discuss",
	}
</script>

<style lang="scss" scoped>
	.left {
		.comment-num {
			.comment-num-text{
				margin-left: 50prx;
			}
			margin-top: -20rpx;
		}
	}
</style>
