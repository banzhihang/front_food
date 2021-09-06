<template>
	<view class="wrap">
		<view class="all-reply">
			<view class="all-reply-top">回复（{{ replyInfo.replyNum }}）</view>
			<view class="item" v-for="(item, index) in replyInfo.replyList" :key="index">
				<view class="comment">
					<view class="top">
						<view class="left">
							<view class="heart-photo"><image :src="item.user_head_portrait" mode=""></image></view>
							<view class="user-info">
								<view class="name">{{ item.user_nick_name }}</view>
								<u-icon name="https://hotschool.ltd/triangle.png" color="#2979ff" size="28"></u-icon>
								<view class="target-name">{{ item.target_user_nick_name }}</view>
							</view>
						</view>
						<view class="right"  :class="{ highlight: item.is_approval }">
							<view class="num">{{ item.approval_number }}</view>
							<u-icon v-if="!item.is_approval" name="thumb-up" class="like" :size="30" color="#9a9a9a" @click="getLike(index)"></u-icon>
							<u-icon v-if="item.is_approval" name="thumb-up-fill" class="like" :size="30" @click="getLike(index)"></u-icon>
						</view>
					</view>
					
					<view class="content">{{ item.content }}</view>
					<view class="bottom">
						<text>{{item.add_time}}</text>
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
		}
	}
</script>

<style lang="scss" scoped>


.all-reply {
	margin-top: 10rpx;
	padding-top: 20rpx;
	background-color: #ffffff;
	.all-reply-top {
		margin-left: 20rpx;
		padding-left: 20rpx;
		border-left: solid 4rpx #5677fc;
		font-size: 30rpx;
		font-weight: bold;
	}
	.item {
		border-bottom: solid 2rpx $u-border-color;
	}
	.reply {
		padding: 20rpx;
		background-color: rgb(242, 242, 242);
		border-radius: 12rpx;
		margin: 10rpx 0;
		.username {
			font-size: 24rpx;
			color: #7a7a7a;
		}
	}
}
</style>
