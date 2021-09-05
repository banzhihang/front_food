<template>
	<view>
		<view class="comment" v-for="res in shortCommentList" :key="res.id">
			<view class="left">
				<image :src="res.user_head_portrait" mode="aspectFill"></image>
			</view>
			<view class="right">
				<view class="top">
					<view>
						<view class="name">{{ res.user_nick_name }}</view>
						<view class="score-time">
							<uni-rate :value="res.user_score" size="10" allowHalf readonly active-color='#EC9F3A'/>
							<text class="time">{{res.add_time}}</text>
						</view>
					</view>
					<view class="like" :class="{ highlight: getIsApproval(res.is_approval) }">
						<view>{{res.approval_number}}</view>
						<view class="num">{{ res.likeNum }}</view>
						<u-icon v-if="!getIsApproval(res.is_approval)" name="thumb-up" :size="30" color="#9a9a9a" @click="getLike(index)"></u-icon>
						<u-icon v-if="getIsApproval(res.is_approval)" name="thumb-up" :size="30" @click="getLike(index)" color="#1a56b4" ></u-icon>
					</view>
				</view>
				<view class="content">{{ res.content }}</view>
			</view>
			<view class="bottom-line">
				<u-line color="#e0dde3" length="800rpx"/>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props: ['shortCommentList'],
		name:"shortComment",
		methods:{
			getIsApproval(is_approval) {
				if (is_approval ===0 ) return false
				return true
			},
			getScore(score) {
				if (score !== null) {
					return (score/2).toFixed(1)
				}else {
					return 'www'
				}
			},
			
		}
	}
</script>

<style lang="scss" scoped>
.comment {
	display: flex;
	padding: 5rpx 0 0 0;
	position: relative;
	margin-bottom: 40rpx;
	.bottom-line {
		position: absolute;
		bottom:-10rpx;
		left: -30rpx;
	}
	.left {
		image {
			width: 64rpx;
			height: 64rpx;
			border-radius: 50%;
			background-color: #f2f2f2;
		}
	}
	.right {
		flex: 1;
		padding-left: 15rpx;
		font-size: 30rpx;
		.top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 10rpx;
			.name {
				font-size: 25rpx;
				color: #000000;
			}
			.like {
				display: flex;
				align-items: center;
				color: #9a9a9a;
				font-size: 26rpx;
				.num {
					margin-right: 4rpx;
					color: #9a9a9a;
				}
			}
			.highlight {
				color: #1a56b4;
				.num {
					color: #1a56b4;
				}
			}
		}
		.content {
			font-size: 28rpx;
			margin-bottom: 30rpx;
		}
		
		.score-time {
			display: flex;
			.time {
				margin-top: -7rpx;
				margin-left: 15rpx;
				font-size: 20rpx;
			}
		}
	}
}
</style>
