<template>
	<view>
		<view v-for="(discuss,idx) in dissCussList" :key="discuss.id" class="box" @click="jumpDiscussInfo(discuss.link)">
			<view class="left">
				<view class="icon">
					<u-icon size="26" name="http://hotschool.ltd/reply.png"></u-icon>
				</view>
				<view class="comment-num">
					<text>
						{{discuss.comment_number}}
					</text>
				</view>
			</view>
			<view >
				<view class="right">
					<view class="discuss-title">
						{{discuss.title}}
					</view>
					<view class="user">
						<image :src="discuss.user_head_portrait" mode="aspectFill"></image>
						<view class="user_nick_name">
							<text>{{discuss.user_nick_name}}</text>
						</view>
						<view class="update_time">
							{{discuss.update_time}}更新
						</view>
					</view>
				</view>
			</view>

			<view class="bottom-line" v-show="showBottomLine(idx)">
				<u-line color="#e0dde3" length="800rpx" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			dissCussList: {
				type: Array,
				default: []
			},
			hiddenBottom: {
				type: Boolean,
				default: true
			}
		},
		name: "discuss",
		methods: {
			showBottomLine(idx) {
				if (idx === this.dissCussList.length - 1 && this.hiddenBottom) {
					return false
				} else {
					return true
				}
			},
			jumpDiscussInfo(link){
				let data = {
					link:link
				}
				let item = encodeURIComponent(JSON.stringify(data))
				uni.navigateTo({
					url: "/pages/discuss-info/discuss-info?item=" + item,
					animationDuration:700,
					animationType: 'slide-in-bottom',
				})
			}
		}
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
			bottom: -40rpx;
			left: -30rpx;
		}

	}

	.left {
		display: flex;
		flex-direction:column;
		justify-content: center;
		margin-left: 40rpx;
		
		.icon {
			text-align: center;
		}
		.comment-num {
			text-align: center;
			font-size: 25rpx;
			color: #808080;
		}
	}

	.right {
		margin-top: 5rpx;
		margin-left: 50rpx;

		.discuss-title {
			font-size: 35rpx;
			color: #000000;
		}

		.user {
			display: flex;
			margin-top: 20rpx;
			align-items: center;
			image {
				width: 29rpx;
				height: 29rpx;
				border-radius: 50%;
				background-color: #c1bec3;
			}
			.user_nick_name {
				color: #808080;
				font-size: 25rpx;
				margin-left: 10rpx;
				
			}
		}
		.update_time {
			color: #808080;
			font-size: 24rpx;
			margin-left: 20rpx;
		}

		.bottom-line {
			margin-left: -70rpx;
			margin-bottom: 40rpx;
			margin-top: 40rpx;
		}
	}
</style>
