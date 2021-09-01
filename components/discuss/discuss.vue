<template>
	<view>
		<view v-for="discuss in dissCussList" :key="discuss.id" class="box">
			<view class="left">
				<u-icon size="60" name="http://hotschool.ltd/reply.png"></u-icon>
				<view class="comment-num">
					<text>
						{{discuss.comment_number}}
					</text>
				</view>
			</view>
			<view class="right">
				<view class="discuss-title">
					{{discuss.title}}
				</view>
				<view class="user">
					<image :src="discuss.user_head_portrait" mode="aspectFill"></image>
					<view>
						<text>{{discuss.user_nick_name}}</text>
					</view>
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
	.box {
		display: flex;
		margin-bottom: 30rpx;
	}
	.left {
		.comment-num {
			margin-top: -5rpx;
			text {
				margin-left: 21rpx;
				color: #b8b8b8;
			}
		}
	}
	.right {
		margin-top: 10rpx;
		margin-left: 20rpx;
		.discuss-title {
			font-size: 30rpx;
		}
		.user{
			display: flex;
			margin-top: 20rpx;
			image {
				width: 29rpx;
				height: 29rpx;
				border-radius: 50%;
				background-color: #c1bec3;
			}
			view{
				font-size: 5rpx;
				margin-left: 10rpx;
				margin-top: -5rpx;
			}
		}
	}
	
</style>
