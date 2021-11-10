<template>
	<view class="wrap">
		<view class="comment">
			<view class="left">
				<image :src="commentInfo.user_head_portrait" mode="aspectFill"></image>
			</view>
			<view class="right">
				<view class="top">
					<view class="name">{{ commentInfo.user_nick_name }}</view>
				</view>
				<view class="content" style="color: #454545;margin-bottom: 20rpx;">{{ commentInfo.content }}</view>
				<view class="bottom">
					<text>{{commentInfo.add_time}}</text>
					<view class="bottom-right">
						<view class="reply-icon" @click="replyThis">
							<uni-icons type="chat" size="17" color="#737373"></uni-icons>
						</view>
						<view class="like-num" @click="approvalComment">
							<u-icon
							:name="commentInfo.is_approval ? 'thumb-up-fill' : 'thumb-up'" 
							class="like" size="35" 
							:color="commentInfo.is_approval ? '#1a56b4': '#808080'"></u-icon>
							
							<view class="num" :style="{color:(commentInfo.is_approval ? '#1a56b4' : '#808080')}">{{ commentInfo.approval_number }}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="gap">
				<u-gap height="18" bg-color="#EFF3F2"></u-gap>
			</view>
		</view>
		<view class="mid">
				<view class="tab">
					<view class="tab-title"><u-tabs :list="tabList" :is-scroll="false" font-size="30" inactive-color="#b5b5bb"
						active-color="#585758"></u-tabs></view>
					<view class="bottom-line">
						<u-line color="#e0dde3" length="900rpx" />
					</view>
				</view>
			</view>
		<view class="reply-box">
			<view class="reply-list">
				<discuss-reply :replyList="replyInfo.replyList" @reply="replyChild" :commentId="commentInfo.id" @approval="approvalRevertHandle"
					commentIndex="123"></discuss-reply>
			</view>
			<u-loadmore :status="status" is-dot v-show="isShowLoad" :load-text="loadText" />
			<view style="height: 100rpx;"></view>
		</view>

		<view class="comment-input" :style="'bottom:'+KeyboardHeight+'px;'">
			<input-comment-reply ref="commentInputRef" kind="回复" :targetUserName="commentInfo.user_nick_name"
				:targetUserId="commentInfo.user" @throwData="startReply">
			</input-comment-reply>
		</view>
		<!-- 错误提示 -->
		<u-popup v-model="showError" mode="bottom" length="70%" @close="closeError" :closeable="true"
			close-icon-size="44" border-radius="40">
			<view class="err-title">请更正以下错误</view>
			<view class="err-item">
				<view v-for="item,index in errInfo" :key="index">
					<u-alert-tips type="error" :title="item.name" :description="item.value" :show-icon="true">
					</u-alert-tips>
					<view style="height: 20rpx;"></view>
				</view>
			</view>
		</u-popup>
		<u-empty text="暂无回复" v-if="showEmpty" margin-top="100"></u-empty>
	</view>
</template>


<script>
	import reply from '@/components/discuss-reply/discuss-reply.vue'
	import {
		approvalUrl,
	} from '@/util/api.js';
	import Schema from 'async-validator'
	import {
		revertPushDomain,
	} from '@/util/api.js';
	import {
		encrypt
	} from '@/util/encrypt/encrypt.js'
	import {
		checkLogin
	} from '@/util/checkLogin.js'
	export default {
		name: "discuss-reply-page",
		data() {
			return {
				KeyboardHeight: 0,
				loadText: {
					loadmore: '',
					loading: '',
					nomore: ''
				},
				status: "loading",
				isShowLoad: true,
				showEmpty: false,
				commentInfo: {},
				replyInfo: {
					nextUrl: null,
					replyNum: 0,
					replyList: []
				},
				errInfo: [],
				showError: false,
				revertErrDict: {
					content: "回复内容"
				},
				tabList:[
					{
						name:"回复"
					}
				],
			};
		},
		methods: {
			// z子组件回复事件
			replyChild(e) {
				this.$refs.commentInputRef.editStart(e.kind, e.targetUserName, e.targetUserId, e.extra)
			},
			// 回复楼主
			replyThis() {
				this.$refs.commentInputRef.editStart("回复", this.commentInfo.user_nick_name, this.commentInfo.user, null)
			},

			// 获得所有回复
			async getAllRevert(link) {
				const {
					data: res
				} = await this.$http.get(link, {
					"baseURL": ""
				})

				if (res.code == "3") {
					this.showEmpty = true
				} else {
					this.replyInfo.replyList = res.data.results
					this.replyInfo.nextUrl = res.data.next
				}

				if (this.replyInfo.nextUrl !== null) {
					this.isShowLoad = false
				} else {
					if (this.showEmpty) {
						this.isShowLoad = false
					} else {
						this.isShowLoad = true
					}
					this.status = "nomore"
				}
			},
			async getNext() {
				this.status = "loading"
				this.isShowLoad = true
				const {
					data: res
				} = await this.$http.get(this.replyInfo.nextUrl, {
					"baseURL": ""
				})

				this.replyInfo.replyList = [...this.replyInfo.replyList, ...res.data.results]
				this.replyInfo.nextUrl = res.data.next
				if (this.replyInfo.nextUrl !== null) {
					this.isShowLoad = false
				} else {
					this.isShowLoad = true
					this.status = "nomore"
				}
			},
			
			// 处理子组件的回复点赞
			approvalRevertHandle(data) {
				let kind = data.kind
				let revertIndex = data.revertIndex
				let index = data.index
				let obj = this.replyInfo.replyList[revertIndex]
				let approval_number = obj.approval_number
				if (kind == "add") {
					obj.is_approval = true
					obj.approval_number ++
				} else {
					obj.is_approval = false
					obj.approval_number --
				}
			},
			// 关闭错误提示
			closeError() {
				this.errInfo = []
			},
			
			// 评论点赞
			async approvalComment() {
				// 先检查用户是否登录
				const canContinue = checkLogin()
				if (!canContinue) {
					return
				}
				
				uni.vibrateShort({})
				let obj = this.commentInfo
				let data = {
					"comment":obj.id
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
					this.alterApprovalStatus()
				}
			},
			
			// 点赞改变状态
			alterApprovalStatus(){
				let obj = this.commentInfo
				const is_approval = obj.is_approval
				this.commentInfo.is_approval = !is_approval
				if (is_approval) {
					this.commentInfo.approval_number --
				} else {
					this.commentInfo.approval_number ++
				}
			},
			
			// 插入回复
			insertReply(data) {
				if (this.replyInfo.nextUrl === null) {
					this.showEmpty = false
					this.replyInfo.replyList.push(data)
					this.isShowLoad = true
				}
			},

			// 真正发起数据请求
			async subPostData(data, push_url, type, extra) {
				uni.showLoading({
					title: "发布中",
					mask: true
				})
				const url = push_url
				const enData = encrypt(data)
				const {
					data: res
				} = await this.$http.post(url, enData)
				uni.hideLoading()
				let that = this
				uni.showToast({
					title: "发布成功",
					success() {
						that.$refs.commentInputRef.editEnd()
						that.insertReply(res.data)
					}
				})

			},

			// 发布回复
			pushRevert(push_data) {
				let data = {
					content: push_data.content,
					comment: this.commentInfo.id,
					target_user: push_data.targetUserId
				}

				const descriptor = {
					content: {
						type: "string",
						max: 30,
						min: 1,
						required: true,
						message: "回复内容最少一个字"
					},
				}

				const validator = new Schema(descriptor)
				const that = this
				const pushUrl = revertPushDomain
				validator.validate(data, (errors, fields) => {
					// 构建错误信息
					if (errors) {
						for (var item in errors) {
							let tmp = {
								name: that.revertErrDict[errors[item].field],
								value: errors[item].message
							}
							that.errInfo.push(tmp)
						}
						that.showError = true
						return
					} else {
						this.subPostData(data, pushUrl, "回复", push_data.extra)
					}
				})
			},

			// 回复开始函数
			startReply(data) {
				// 先检查用户是否登录
				const canContinue = checkLogin()
				if (!canContinue) {
					return
				}
				const kind = data.kind
				this.pushRevert(data)
			}
		},

		components: {
			reply
		},
		onLoad(options) {
			let data = JSON.parse(decodeURIComponent(options.data))
			this.commentInfo = data
			this.replyInfo.replyNum = data.revert_number
			this.getAllRevert(data.all_revert_link)
		},
		onShow() {
			uni.onKeyboardHeightChange(res => {
				this.KeyboardHeight = res.height
			})
		},
		onHide() {
			uni.onKeyboardHeightChange(res => {})
		},
		onReachBottom() {
			if (this.replyInfo.nextUrl === null) {
				return
			}
			this.getNext()
		},
		watch:{
			"commentInfo.revert_number" :{
				handler: function(newVal,oldVal){
					if (newVal !== undefined) {
						this.tabList[0].name = "回复 " + newVal.toString()
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		margin: 10rpx 25rpx 0 25rpx;
	}
	.mid {
		.tab {
			width: 100%;
			.tab-title {
				display: flex;
				justify-content: flex-start;
			}
			.bottom-line {
				margin-top: -7rpx;
				margin-left: -100rpx;
			}
		}
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
			bottom: -20rpx;
			left: -100rpx;
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
			padding-left: 20rpx;
			font-size: 27rpx;

			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10rpx;

				.name {
					color: #0b0f1b;
					font-size: 30rpx;
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
				font-size: 30rpx;
			}

			.bottom {
				margin-top: 20rpx;
				color: #808080;
				align-items: center;
				margin-bottom: 20rpx;
				justify-content: space-between;
				display: flex;

				text {
					font-size: 25rpx;
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

	.reply-box {
		margin-left: 10rpx;
		padding: 0 15rpx 0rpx 0rpx;
		margin-top: 20rpx;

		.reply-list {
			margin-top: 20rpx;
			
		}

		.reply-num {
			margin-bottom: 10rpx;
			margin-left: -10rpx;
		}
	}

	.err-item {
		margin-top: 70rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
	}

	.err-title {
		margin-top: 60rpx;
		text-align: center;
		font-size: 40rpx;
	}
</style>
