<template>
	<view>
		<view v-for="discuss in dissCussList" :key="discuss.id" class="box" >
			<view class="left">
				<view class="icon">
					<u-icon size="30" name="http://hotschool.ltd/reply.png"></u-icon>
				</view>
				<view class="comment-num">
					<text>
						{{discuss.comment_number}}
					</text>
				</view>
			</view>
			<navigator hover-class="none" url="../../pages/discuss-info/discuss-info">
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
			</navigator>
			
			<view class="bottom-line">
				<u-line color="#e0dde3" length="800rpx"/>
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
		padding-top: 20rpx;
		display: flex;
		position: relative;
		margin-bottom: 50rpx;
		.bottom-line {
			position: absolute;
			bottom:-40rpx;
			left: -30rpx;
		}
	
	}
	.left {
		.icon {
			margin-top: 10rpx;
		}
		.comment-num {
			margin-top: -15rpx;
			text {
				font-size: 20rpx;
				margin-left: 6rpx;
				color: #838184;
			}
		}
	}
	.right {
		margin-top: 5rpx;
		margin-left: 20rpx;
		.discuss-title {
			font-size: 28rpx;
			
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
				font-size: 23rpx;
				margin-left: 10rpx;
				margin-top: -5rpx;
			}
		}
		.bottom-line {
			margin-left: -70rpx;
			margin-bottom: 40rpx;
			margin-top: 40rpx;
		}
	}
	
</style>
