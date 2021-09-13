<template>
	<view class="wrap">
		<view class="comment">
			<view class="left"><image :src="commentInfo.user_head_portrait" mode="aspectFill"></image></view>
			<view class="right">
				<view class="top">
					<view class="name">{{ commentInfo.user_nick_name }}</view>
				</view>
				<view class="content" style="color: #454545;">{{ commentInfo.content }}</view>
				<view class="bottom">
					<text>{{commentInfo.add_time}}</text>
					<view class="bottom-right">
						<view class="reply-icon" @click="replyThis">
							<u-icon name="https://hotschool.ltd/comment-reply.png" color="#2979ff" size="30"></u-icon>
						</view>
						<view class="like-num" >
							<u-icon v-if="!commentInfo.is_approval" name="thumb-up" class="like" :size="35" color="#9a9a9a" @click="getLike(index)"></u-icon>
							<u-icon v-if="commentInfo.is_approval" name="thumb-up" class="like" :size="35" @click="getLike(index)" color="#1a56b4"></u-icon>
							<view class="num">{{ commentInfo.approval_number }}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="gap">
				<u-gap height="18" bg-color="#f1eef3"></u-gap>
			</view>
		</view>
		
		<view class="reply-box">
			<view class="reply-num">回复 {{replyInfo.replyNum}}</view>
			<view class="reply-list">
				<discuss-reply :replyList="replyInfo.replyList" @reply="replyEdit"></discuss-reply>
			</view>	
			<u-divider half-width="500" margin-bottom="200rpx">没有更多了</u-divider>
			<view>
				<image></image>
			</view>
		</view>
		<input-comment-reply class="comment-input" :content="replyText"></input-comment-reply>
	</view>
</template>


<script>
	import reply from '@/components/discuss-reply/discuss-reply.vue'
	export default {
		name:"discuss-reply-page",
		onLoad: function(option){
			this.commentInfo = JSON.parse(option.data)
			this.replyText = "回复 "+this.commentInfo.user_nick_name+"："
		},
		
		data() {
			return {
				replyText:'回复',
				commentInfo:{
					"id": 2,
					"user": 1,
					"user_nick_name": "小明21515151",
					"user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
					"content": "真大",
					"is_approval": 0,
					"revert_number": 12,
					"approval_number": 23,
					"add_time": "9小时前",
					"is_author": false,
				},
				replyInfo:{
					replyNum:100,
					replyList:[
						{
							"id": 1,
							"user": 1,
							"user_nick_name": "你好",
							"user_head_portrait": "123456",
							"target_user": 2,
							"target_user_nick_name": "哈哈",
							"content": "真的吗",
							"is_approval": false,
							"approval_number": 12,
							"add_time": "9小时前",
							"is_author": 1
						},
						{
							"id": 2,
							"user": 1,
							"user_nick_name": "你好",
							"user_head_portrait": "123456",
							"target_user": 2,
							"target_user_nick_name": "哈哈",
							"content": "真的吗",
							"is_approval": false,
							"approval_number": 12,
							"add_time": "9小时前",
							"is_author": 1
						},
						{
							"id": 3,
							"user": 1,
							"user_nick_name": "你好",
							"user_head_portrait": "123456",
							"target_user": 2,
							"target_user_nick_name": "哈哈",
							"content": "真的吗",
							"is_approval": false,
							"approval_number": 12,
							"add_time": "9小时前",
							"is_author": 1
						},
						{
							"id": 4,
							"user": 1,
							"user_nick_name": "你好",
							"user_head_portrait": "123456",
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
			};
		},
		methods:{
			replyEdit(e) {
				const text = '回复 '+e.targetUserName+":"
				this.replyText = text
			},
			replyThis(){
				const text = '回复 '+this.commentInfo.user_nick_name+":"
				this.replyText = text
			},
		},
		components:{
			reply
		}
	}
</script>

<style lang="scss" scoped>
.wrap {
	margin: 10rpx 25rpx 0 25rpx;
}
.comment-input {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: #FFFFFF;
		z-index: 5000;
}
.comment {
	display: flex;
	position: relative;
	padding: 30rpx 15rpx 0rpx 10rpx;
	margin-bottom: 50rpx;
	.gap {
		height: 18rpx;
		width: 900rpx;
		position: absolute;
		bottom:-20rpx;
		left: -100rpx;
	}
	.left {
		image {
			width: 54rpx;
			height: 54rpx;
			border-radius: 50%;
			background-color: #f2f2f2;
		}
	}
	.right {
		flex: 1;
		padding-left: 20rpx;
		font-size: 27rpx;
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
		.bottom{
			margin-top: 20rpx;
		}
	}
}

.reply-box {
	margin-left: 20rpx;
	padding: 0 15rpx 0rpx 10rpx;
	margin-top: 20rpx;
	.reply-list {
		margin-top: 20rpx;
	}
	.reply-num {
		margin-bottom: 10rpx;
		margin-left: -10rpx;
	}
}

</style>
