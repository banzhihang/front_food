<template>
	<view>
		<view class="comment" v-for="res in commentInfo.commentList" :key="res.id">
			<view class="left"><image :src="res.user_head_portrait" mode="aspectFill"></image></view>
			<view class="right">
				<view class="top">
					<view class="name">{{ res.user_nick_name }}</view>
				</view>
				<view class="content" style="color: #454545;">{{ res.content }}</view>
				<view class="bottom">
					<text>{{res.add_time}}</text>
					<view class="bottom-right">
						<view class="reply-icon">
							<u-icon name="https://hotschool.ltd/comment-reply.png" color="#2979ff" size="30"></u-icon>
						</view>
						<view class="like-num" >
							<u-icon v-if="!res.is_approval" name="thumb-up" class="like" :size="35" color="#9a9a9a" @click="getLike(index)"></u-icon>
							<u-icon v-if="res.is_approval" name="thumb-up" class="like" :size="35" @click="getLike(index)" color="#1a56b4"></u-icon>
							<view class="num">{{ res.approval_number }}</view>
						</view>
					</view>
				</view>
				<view class="reply-box">
					<view>
						<discuss-reply :replyList="res.revert"></discuss-reply>
					</view>
					<view class="all-reply"  v-if="res.revert != undefined">
						<u-button size="mini" 
						type="default"
						:plain="true"
						:hair-line="false"
						shape="circle"
						:custom-style="customStyle"
						class="btn"
						>
							查看全部 {{ res.revert_number }} 条回复
							<u-icon class="more" name="arrow-right" :size="21"></u-icon>
							</u-button>
					</view>
				</view>
				
			</view>
		</view>
		
		<u-divider half-width="500" margin-bottom="200rpx">没有更多了</u-divider>
		<view>
			<image></image>
		</view>
	</view>
</template>

<script>
	import reply from '@/components/discuss-reply/discuss-reply.vue'
	export default {
		name:"discuss-comment",
		components: {
			reply,
		},
		data() {
			return {
				customStyle:{
					borderStyle:"none" ,
					backgroundColor: "#F6F6F6",
					fontSize:"26rpx",
					padding:"30rpx 40rpx 30rpx 40rpx",
				},
				commentInfo:{
					commentList:[
						 {
							"id": 2,
							"user": 1,
							"user_nick_name": "你好",
							"user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
							"content": "真大",
							"is_approval": 0,
							"revert_number": 12,
							"approval_number": 23,
							"add_time": "9小时前",
							"is_author": false,
							"revert": [
								{
									"id": 1,
									"user": 1,
									"user_nick_name": "你好",
									"user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
									"target_user": 2,
									"target_user_nick_name": "哈哈",
									"content": "真的吗",
									"is_approval": false,
									"approval_number": 12,
									"add_time": "9小时前",
									"is_author": 1
								},
								{
									"id": 1,
									"user": 1,
									"user_nick_name": "你好",
									"user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
									"target_user": 2,
									"target_user_nick_name": "哈哈",
									"content": "真的吗",
									"is_approval": false,
									"approval_number": 12,
									"add_time": "9小时前",
									"is_author": 1
								},
							]
						},
						{
							"id": 2,
							"user": 1,
							"user_nick_name": "你好",
							"user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
							"content": "真大",
							"is_approval": 0,
							"revert_number": 12,
							"approval_number": 23,
							"add_time": "9小时前",
							"is_author": false,
							"revert": [
								{
									"id": 1,
									"user": 1,
									"user_nick_name": "你好",
									"user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
									"target_user": 2,
									"target_user_nick_name": "哈哈",
									"content": "真的吗",
									"is_approval": false,
									"approval_number": 12,
									"add_time": "9小时前",
									"is_author": 1
								},
								{
									"id": 1,
									"user": 1,
									"user_nick_name": "你好",
									"user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
									"target_user": 2,
									"target_user_nick_name": "哈哈",
									"content": "真的吗",
									"is_approval": false,
									"approval_number": 12,
									"add_time": "9小时前",
									"is_author": 1
								},
							]
						}
					]
				},			
			};
		},	
}	
</script>

<style lang="scss" scoped>
.comment {
	display: flex;
	padding: 30rpx 15rpx 0rpx 10rpx;
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
		padding-left: 20rpx;
		font-size: 30rpx;
		.top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 10rpx;
			.name {
				color: #0b0f1b;
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
				color: #5677fc;
				.num {
					color: #5677fc;
				}
			}
		}
		.content {
			margin-bottom: -10rpx;
		}
		.bottom {
			align-items: center;
			margin-bottom: 20rpx;
			justify-content: space-between;
			display: flex;
			text {
				font-size: 25rpx;
				color: #b3b4b6;
			}
			.bottom-right {
				margin-right: 20rpx;
				display: flex;
				.reply-icon {
					margin-top: 5rpx;
					margin-right: 30rpx;
				}
				.like-num{
					flex: 1;
					display: flex;
					align-items: center;
					color: #9a9a9a;
					font-size: 26rpx;
					.num {
						margin-right: 4rpx;
						margin-left: 10rpx;
						color: #9a9a9a;
					}
				}
			}
		}
		
		.reply-box {
			border-radius: 20rpx;
			.item {
				padding: 20rpx;
				border-bottom: solid 2rpx $u-border-color;
				.username {
					font-size: 24rpx;
					color: #999999;
				}
			}
			.all-reply {
				padding-left: 44rpx;
				margin-top: 20rpx;
				padding-bottom: 20rpx;
				.more {
					margin-left: 10rpx;
				}
			}
		}
		.bottom{
			margin-top: 20rpx;
		}
	}
}
</style>
