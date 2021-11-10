<template>
	<view class="box">
		<view class="item" v-for="item, index in replyList" :key="index">
			<view class="top">
				<view class="left">
					<image :src="item.user_head_portrait" mode=""></image>
				</view>
				<view class="right" :class="{ highlight: item.is_approval }">
					<view class="right-top">
						<view class="user-info">
							<view class="name">{{ item.user_nick_name }}</view>
							<u-icon name="arrow-rightward" color="#8d8d8d" size="25" class="arrow" style="margin-top: 3rpx;">
							</u-icon>
							<view class="target-name">{{ item.target_user_nick_name }}</view>
						</view>
					</view>
					<view class="content" style="font-size: 30rpx;color: #5f5f5f;margin-bottom: 20rpx;">{{ item.content }}</view>
					<view class="bottom">
						<text style="color: #808080;">{{item.add_time}}</text>
						<view class="bottom-right">
							<view class="reply-icon" @click="reply(item.user,item.user_nick_name)">
								<uni-icons type="chat" size="17" color="#737373"></uni-icons>
							</view>
							<view class="like-num" @click="approvalRevert(index)">
								<u-icon
								:name="item.is_approval ? 'thumb-up-fill' : 'thumb-up' " 
								class="like" size="35" 
								:color="item.is_approval ? '#1a56b4': '#808080'"></u-icon>
								<view class="num" :style="{color:(item.is_approval ? '#1a56b4' : '#808080')}">{{ item.approval_number }}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>


<script>
	import {
		approvalUrl,
	} from '@/util/api.js';
	import {
		encrypt
	} from '@/util/encrypt/encrypt.js'
	import {
		checkLogin
	} from '@/util/checkLogin.js'
	export default {
		name: "discuss-reply",
		props: ['replyList', "commentId", "commentIndex"],
		methods: {
			// 点击回复图标抛出一个事件
			reply(targetUserId, targetUserName) {
				const extra = {
					"commentId": this.commentId,
					"index": this.commentIndex
				}
				const data = {
					"targetUserId": targetUserId,
					"targetUserName": targetUserName,
					"kind": "回复",
					"extra": extra
				}
				this.$emit('reply', data)
			},
			// 评论点赞
			async approvalRevert(index) {
				// 先检查用户是否登录
				const canContinue = checkLogin()
				if (!canContinue) {
					return
				}
				
				uni.vibrateShort({})
				let obj = this.replyList[index]
				let data = {
					"revert":obj.id
				}
				
				const url = approvalUrl
				const enData = encrypt(data)
				const {
					data: res
				} = await this.$http.post(url, enData)
				
				if (res.code !== "0") {
					uni.showToast({
						title:"操作失败",
						icon:"error"
					})
				} else {
					this.alterApprovalStatus(index)
				}
			},
			
			// 点赞改变状态
			alterApprovalStatus(index){
				let obj = this.replyList[index]
				const is_approval = obj.is_approval
				let data = {
					revertIndex:index,
					index:this.commentIndex
				}
				
				if (is_approval) {
					data.kind = "sub"
				} else {
					data.kind = "add"
				}
				this.$emit("approval",data)
			},
		},
		
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

					image {
						width: 54rpx;
						height: 54rpx;
						border-radius: 50%;
						background-color: #f2f2f2;
					}

					margin-right: 10rpx;
				}

				.right {
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
								font-size: 30rpx;
								margin-right: 10rpx;
							}

							.target-name {
								font-size: 30rpx;
								margin-left: 15rpx;
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
								margin-right: 40rpx;
							}

							.like-num {
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
