<template>
	<view class="box">
		<view class="item" v-for="(item, index) in replyInfo.replyList" :key="index">
			<view class="top">
				<view class="left">
					<image :src="item.user_head_portrait" mode=""></image>
				</view>
				<view class="right" :class="{ highlight: item.is_approval }">
					<view class="right-top">
						<view class="user-info">
							<view class="name">{{ item.user_nick_name }}</view>
							<u-icon name="https://hotschool.ltd/triangle.png" color="#2979ff" size="28" class="arrow"></u-icon>
							<view class="target-name">{{ item.target_user_nick_name }}</view>
						</view>
					</view>
					<view class="content" style="font-size: 27rpx;color: #5f5f5f;">{{ item.content }}</view>
					<view class="bottom">
						<text>{{item.add_time}}</text>
						<view class="bottom-right">
							
							<view class="reply-icon" @click="reply(item.user,item.user_nick_name)">
								<u-icon 
								name="http://hotschool.ltd/comment-reply.png" 
								color="#2979ff" size="30"></u-icon>
							</view>
							<view class="like-num" >
								<u-icon v-if="!item.is_approval" name="thumb-up" class="like" :size="35" color="#9a9a9a" @click="reply(item.target_user,item.target_user_nick_name)"></u-icon>
								<u-icon v-if="item.is_approval" name="thumb-up" class="like" :size="35" @click="reply(item.target_user,item.target_user_nick_name)" color="#1a56b4"></u-icon>
								<view class="num">{{ item.approval_number }}</view>
							</view>
							
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		name:"discuss-reply",
		props:['replyList'],
		data() {
			return {
				replyInfo:{
					replyNum:100,
					replyList:[
						{
							"id": 1,
							"user": 1,
							"user_nick_name": "小明😄22",
							"user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
							"target_user": 2,
							"target_user_nick_name": "哈哈",
							"content": "真的吗妈妈妈妈",
							"is_approval": true,
							"approval_number": 12,
							"add_time": "9小时前",
							"is_author": 1
						},
						{
							"id": 2,
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
							"id": 3,
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
							"id": 4,
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
			};
		},
		methods:{
			getIsApproval(is_approval) {
				if (is_approval ===0 ) return false
				return true
			},
			reply(targetUserId,targetUserName) {
				const data = {
					"targetUserId":targetUserId,
					"targetUserName":targetUserName
				}
				this.$emit('reply',data)
			}
		}
	}
</script>

<style lang="scss" scoped>
.box {
	.item {
		.top {
			margin-bottom: 10rpx;
			display: flex;
			.left {
				margin-top: 10rpx;
				image{
					width: 44rpx;
					height: 44rpx;
					border-radius: 50%;
					background-color: #f2f2f2;
				}
				margin-right: 10rpx;
			}
			
			.right{
				flex: 1;
				margin-top: 11rpx;
				margin-left: 10rpx;
				.right-top {
					margin-bottom: 10rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.user-info {
						display: flex;
						align-items: center;
						.name {
							font-size: 26rpx;
						}
						.target-name{
							font-size: 26rpx;
						}
					}
					
				}
				
				.bottom {
					margin-top: 10rpx;
					align-items: center;
					margin-bottom: 10rpx;
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
			}	
		}
	}
}

</style>
