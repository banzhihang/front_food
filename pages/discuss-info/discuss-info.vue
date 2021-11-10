<template>
	<view>
		<u-empty text="数据为空" mode="data" v-if="showEmpty"></u-empty>
		<my-loading :active="showLoading" v-if="showLoading && !showEmpty"></my-loading>
		<view class="box" v-if="!showLoading && !showEmpty">
			<view class="top">
				<view class="userinfo">
					<view class="left">
						<image :src="discussInfo.user_head_portrait" mode="aspectFill"></image>
					</view>
					<view class="right">
						<view>
							<view class="name">{{ discussInfo.user_nick_name }}</view>
							<text class="push">发布讨论</text>
						</view>
						<view class="time">
							<text>{{discussInfo.add_time}}</text>
						</view>
					</view>
				</view>

				<view class="content">
					<text class="title">{{discussInfo.title}}</text>
					<view class="detail">
						<u-parse :html="discussInfo.content"></u-parse>
					</view>
				</view>
				<!-- 显示照片 -->
				<view class="photo-box">
					<view v-for="(item,index) in discussInfo.image" :key="index" class="photoInfo uni-thumb">
						<u-image :src="item" @click="prePhoto(index)" mode="widthFix" border-radius="25rpx"></u-image>
						<view style="height: 1rpx;"></view>
					</view>
				</view>
			</view>
			<view class="gap">
				<u-gap height="18" bg-color="#EFF3F2"></u-gap>
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
			<view class="bottom">
				<discuss-comment @reply="replyHandle" :link="discussInfo.comment_link" ref="comment"></discuss-comment>
			</view>
		</view>
		<view class="comment-input" :style="'bottom:'+KeyboardHeight+'px;'">
			<input-comment-reply ref="commentInputRef" kind="评论" :targetUserName="discussInfo.user_nick_name"
				:targetUserId="discussInfo.user" @throwData="startCommentAndReply">
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
	</view>
</template>

<script>
	import commentInput from '@/components/input-comment-reply/input-comment-reply.vue'
	import discussComment from '@/components/discuss-comment/discuss-comment.vue'
	import Schema from 'async-validator';
	import {
		revertPushDomain,
		commentPushDomain
	} from '../../util/api.js';
	import {
		encrypt
	} from '../../util/encrypt/encrypt.js'
	import {
		checkLogin
	} from '../../util/checkLogin.js'
	export default {
		data() {
			return {
				KeyboardHeight: 0,
				showLoading: true,
				discussInfo: {},
				tabList:[
					{
						name:"评论"
					}
				],
				photoUrlList: [],
				errInfo: [],
				showError: false,
				commentErrDict: {
					content: "评论内容"
				},
				revertErrDict: {
					content: "回复内容"
				},
				showEmpty:false
			};
		},
		components: {
			discussComment,
			commentInput
		},
		methods: {
			// 处理子组件的回复事件
			replyHandle(e) {
				// 调用回复组件的editStart方法
				this.$refs.commentInputRef.editStart(e.kind, e.targetUserName, e.targetUserId, e.extra)
			},
			// 获得讨论数据
			async getDiscussInfo(link) {
				const {
					data: res
				} = await this.$http.get(link, {
					"baseURL": ""
				})
				if (res.code !== "3") {
					this.discussInfo = res.data
					this.showLoading = false
					this.showEmpty = false
				} else {
					this.showLoading = false
					this.showEmpty = true
				}
				
			},
			prePhoto(index) {
				if (this.photoUrlList.length === 0) {
					this.discussInfo.image.forEach((element) => {
						this.photoUrlList.push(element)
					})
				}
				uni.previewImage({
					urls: this.photoUrlList,
					current: this.photoUrlList[index],
					indicator: "number"
				})
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
				console.log(res)
				uni.hideLoading()
				let that = this
				uni.showToast({
					title: "发布成功",
					success() {
						that.$refs.commentInputRef.editEnd()
						if (type === "评论") {
							that.$refs.comment.insertComment(res.data)
						} else {
							that.$refs.comment.insertReply(res.data, extra)
						}
					}
				})

			},

			// 发布评论
			pushComment(push_data) {
				let data = {
					content: push_data.content,
					discuss: this.discussInfo.id
				}

				const descriptor = {
					content: {
						type: "string",
						max: 30,
						min: 1,
						required: true,
						message: "评论内容最少一个字"
					},
				}

				const validator = new Schema(descriptor)
				const that = this
				const pushUrl = commentPushDomain
				validator.validate(data, (errors, fields) => {
					// 构建错误信息
					if (errors) {
						for (var item in errors) {
							let tmp = {
								name: that.commentErrDict[errors[item].field],
								value: errors[item].message
							}
							that.errInfo.push(tmp)
						}
						that.showError = true
						return
					} else {
						this.subPostData(data, pushUrl, "评论", push_data.extra)
					}
				})
			},

			// 发布回复
			pushRevert(push_data) {
				let data = {
					content: push_data.content,
					comment: push_data.extra.commentId,
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

			// 接受评论或者回复组件抛出的数据
			startCommentAndReply(data) {
				// 先检查用户是否登录
				const canContinue = checkLogin()
				if (!canContinue) {
					return
				}

				const kind = data.kind
				if (kind === "评论") {
					this.pushComment(data)
				} else {
					this.pushRevert(data)
				}
			},

			// 关闭错误提示
			closeError() {
				this.errInfo = []
			},
		},
		onLoad(options) {
			let data = JSON.parse(decodeURIComponent(options.item))
			this.getDiscussInfo(data.link)
		},
		onShow() {
			uni.onKeyboardHeightChange(res => {
				this.KeyboardHeight = res.height
			})
		},
		onHide() {
			uni.onKeyboardHeightChange(res => {

			})
		},
		onReachBottom() {
			this.$refs.comment.pullUp()
		},
		watch:{
			"discussInfo.comment_number":{
				handler: function(newVal,oldVal){
					if (newVal !== undefined) {
						this.tabList[0].name = "评论 " + newVal.toString()
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box {
		margin: 0 25rpx 0 25rpx;

	}

	.comment-input {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: #FFFFFF;
		z-index: 5000;
	}

	.top {
		.userinfo {
			display: flex;

			.left {
				margin-top: 10rpx;

				image {
					width: 74rpx;
					height: 74rpx;
					border-radius: 50%;
					background-color: #f2f2f2;
				}
			}

			.right {
				margin-left: 10rpx;
				flex: 1;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.name {
					font-size: 29rpx;
				}

				.push {
					font-size: 25rpx;
					color: #808080;
				}

				.time {
					text {
						font-size: 25rpx;
						color: #808080;
					}
				}
			}
		}

		.content {
			margin-bottom: 40rpx;
			margin-top: 10rpx;

			.title {
				font-size: 48rpx;
				font-weight: bold
			}

			.detail {
				margin-top: 30rpx;
				font-size: 35rpx;
			}

		}
	}

	.gap {
		margin-top: 30rpx;
		width: 900rpx;
		margin-left: -100rpx;
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
