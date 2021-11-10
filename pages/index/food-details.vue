<template>
	<view class="content">
		<u-empty text="数据为空" mode="data" v-if="showEmpty" margin-top="100"></u-empty>
		<my-loading :active="showLoading" v-if="showLoading"></my-loading>
		<view class="header" v-if="!showLoading && !showEmpty">
			<view class="food-picture uni-thumb">
				<image :src="food.first_image" mode="aspectFill"></image>
			</view>
			<view>
				<text class="food-name">{{food.name}}</text>
				<view class="food-time">
					<u-icon name="clock" class="food-time-img" color="#1a56b4" size="25"></u-icon>
					<text>{{food.add_time}}</text>
				</view>
				<view class="restaurant-nme">
					<u-icon name="home" size="23" color="#1a56b4"></u-icon>
					<text>{{food.restaurant_name}}</text>
				</view>
				<view class="food-address" @click="jumpToMap">
					<u-icon name="map" color="#1a56b4" size="26"></u-icon>
					<text>{{food.address}}</text>
					<u-icon name="arrow-right" color="#696a6c" size="20"></u-icon>
				</view>
				<view>
					<view class="food-want-eated" v-if="food.is_want_eated !== 1">
						<view class="food-want" v-if="food.is_want_eated !== 2">
							<u-button type="default" :plain="true" :custom-style="customStyle" :hair-line="false"
								@click="want_eat_start" :ripple="true" ripple-bg-color="rgba(236,159,58,0.5)">
								<u-icon name="bookmark" color="#EC9F3A"></u-icon>
								<text style="font-size: 29rpx;">想吃</text>
							</u-button>
						</view>
						<view class="food-wanted" v-if="food.is_want_eated === 2">
							<text>已想吃</text>
							<u-icon name="arrow-right" color="#3f3f41" size="22" style="margin-left: 10rpx;"></u-icon>
						</view>
						<view class="food-eated">
							<u-button type="default" :plain="true" :custom-style="customStyle" :hair-line="false"
								@click="jumpToRateEdit" :ripple="true" ripple-bg-color="rgba(236,159,58,0.5)">
								<u-icon name="star" color="#EC9F3A"></u-icon>
								<text style="font-size: 29rpx;">吃过</text>
							</u-button>

							<u-popup v-model="isShowShortCommentEdit" mode="bottom" length="100%"
								close-icon-pos="top-left" :closeable="true" close-icon-size="40" @close="rateBack">
								<short-comment-edit ref="rateEdit" :food="food.id"></short-comment-edit>
							</u-popup>
						</view>
					</view>
					<view class="food-already-eated" v-if="food.is_want_eated === 1" @click="isShowRateInfo = true">
						<view class="food-already-eated-left">
							<text style="margin-right: 5rpx;">已吃过</text>
							<u-rate size='20' active-color='#EC9F3A' inactive-color='#b4b7c1' gutter='7' min-count='1'
								v-model="userRateInfo.score" :disabled="true"></u-rate>
						</view>
						<view class="food-already-eated-right">
							<text>{{ userRateInfo.add_time }}</text>
							<u-icon name="arrow-right" color="#b4b7c1" size="22" style="margin-left: 10rpx;"></u-icon>
						</view>
						<u-popup v-model="isShowRateInfo" mode="bottom" length="100%" close-icon-pos="top-left"
							:closeable="true" close-icon-size="40">

							<eated-show :link="food.eated_data_link" v-if="isShowRateInfo"></eated-show>
						</u-popup>
					</view>
				</view>
			</view>
		</view>
		<view class="score" v-if="!showLoading && !showEmpty">
			<u-card title="吃小猪评分" style="background: rgba(0,0,0,0.02);"
				box-shadow="rgba(0, 0, 0, 0.1) 1rpx 1rpx 5rpx 5rpx" border-radius="20"
				:head-border-bottom="food.rate_score.score !== -1">
				<view slot="head" class="score-head">
					<view class="score-head-left">
						<u-icon name="https://hotschool.ltd/score.png" color="#1a56b4" size="38"
							style="margin-right: 7rpx;"></u-icon>
						<text>吃小猪评分</text>
					</view>
					<text class="score-head-right" v-if="food.rate_score.score !== -1">{{food.vote_number}}人评分</text>
					<text class="score-head-right" v-if="food.rate_score.score === -1">{{food.want_eat_num}}人想吃</text>
				</view>
				<view slot="body" class="score-body">
					<view v-if="food.rate_score.score !== -1">
						<food-rate :foodRate="food.rate_score"></food-rate>
					</view>
					<view v-if="food.rate_score.score === -1"
						style="text-align: center;margin-top: -30rpx;margin-bottom: 30rpx;font-size: 27rpx;color: #808080;">
						<view>暂无评分</view>
						<view style="height: 10rpx;"></view>
						<view>
							<text>已吃过？</text>
							<text style="color:#1a56b4;" @click="jumpToRateEdit">发表评分</text>
						</view>
					</view>
				</view>
			</u-card>
		</view>
		<view class="desc" v-if="!showLoading && !showEmpty">
			<u-card :border="false" :head-border-bottom="false">
				<view slot="head" class="desc-head">
					<u-icon name="https://hotschool.ltd/brief.png" color="#1a56b4" size="30"
						style="margin-right: 10rpx;"></u-icon>
					<text>简介</text>
				</view>
				<view slot="body" class="desc-body">
					<text>{{food.desc}}</text>
				</view>
			</u-card>
		</view>
		<view class="food-photo" v-if="!showLoading && !showEmpty">
			<u-card title="图片" :border="false" :head-border-bottom="false">
				<view slot="head" class="photo-head">
					<view class="photo-head-left">
						<u-icon name="https://hotschool.ltd/photo.png" color="#1a56b4" size="32"
							style="margin-right: 10rpx;"></u-icon>
						<text>图片</text>
					</view>
					<view class="photo-head-right" @click="isShowAllPhoto=true">
						<text style="margin-right: 5rpx;">
							全部{{food.photo_num}}
						</text>
						<u-icon name="arrow-right" color="#000000" size="20"
							style="margin-left: 5rpx;margin-right: -10rpx;"></u-icon>
					</view>

					<u-popup v-model="isShowAllPhoto" mode="bottom" length="100%" close-icon-pos="top-left"
						:closeable="true" close-icon-size="40">
						<photo-list :link="food.all_photo_link" :num="food.photo_num" v-if="isShowAllPhoto">
						</photo-list>
					</u-popup>
				</view>
				<view slot="body">
					<u-swiper :list="food.image" mode="none" :effect3d="true" effect3d-previous-margin="40"
						duration="1000"></u-swiper>
				</view>
			</u-card>
		</view>
		<view class="short-comment" v-if="!showLoading && !showEmpty">
			<u-card title="短评" style="background: rgba(0,0,0,0.02);" box-shadow="rgba(0, 0, 0, 0.1) 1rpx 1rpx 5rpx 5rpx"
				:head-border-bottom="false" :foot-border-top="false" border-radius="20" :foot-style="cardStyle">
				<view slot="head" class="comment-head">
					<view class="comment-head-left">
						<u-icon name="https://hotschool.ltd/short-comment.png" color="#1a56b4" size="30"
							style="margin-right: 10rpx;"></u-icon>
						<text>短评</text>
					</view>
					<view class="comment-head-right" @click="jumpToAllShortComment(food.all_short_comment_link)"
						v-if="food.short_comment_number!==0">
						<text>
							全部{{food.short_comment_number}}
						</text>
						<u-icon name="arrow-right" color="#000000" size="20"
							style="margin-left: 5rpx;margin-right: -10rpx;"></u-icon>
					</view>
				</view>
				<view slot="body">
					<short-comment :shortCommentList="food.short_comment" :hiddenBottom="false"
						v-if="food.short_comment_number!==0" @approval="approvalShortCommentHandle"></short-comment>
				</view>
				<view slot="foot">
					<!-- 有短评的样式 -->
					<view @click="jumpToAllShortComment(food.all_short_comment_link)"
						v-if="food.short_comment_number !== 0" class="short-comment-foot">
						<text style="color: #000000;">查看全部短评</text>
						<u-icon name="arrow-right" color="#000000" size="20" class="short-comment-foot-arrow"></u-icon>
					</view>
					<!-- 无短评的样式 -->
					<view v-if="food.short_comment_number === 0"
						style="text-align: center;margin-top: -60rpx;margin-bottom: 30rpx;font-size: 27rpx;color: #808080;">
						<view>暂无短评</view>
						<view style="height: 10rpx;"></view>
						<view>
							<text>已吃过？</text>
							<text style="color:#1a56b4;" @click="jumpToRateEdit">发表短评</text>
						</view>

					</view>
				</view>
			</u-card>
		</view>
		<view class="discuss" v-if="!showLoading && !showEmpty">
			<u-card title="讨论" style="background: rgba(0,0,0,0.02);" box-shadow="rgba(0, 0, 0, 0.1) 1rpx 1rpx 5rpx 5rpx"
				:head-border-bottom="false" :foot-border-top="false" border-radius="20" :foot-style="cardStyle">
				<view slot="head" class="discuss-head">
					<view class="discuss-head-left">
						<u-icon name="https://hotschool.ltd/discuss.png" color="#1a56b4" size="35"
							style="margin-right: 10rpx;"></u-icon>
						<text>讨论</text>
					</view>

					<view class="discuss-head-right" @click="jumpToAllDiscuss(food.all_discuss_link)"
						v-if="food.discuss_number !==0">
						<text>
							全部{{food.discuss_number}}
						</text>
						<u-icon name="arrow-right" color="#000000" size="20"
							style="margin-left: 5rpx;margin-right: -10rpx;"></u-icon>
					</view>
				</view>
				<view slot="body" class="discuss-body">
					<discuss :dissCussList="food.discuss" :hiddenBottom="false" v-if="food.discuss_number !==0">
					</discuss>
				</view>
				<view slot="foot">
					<view class="discuss-foot" @click="jumpToAllDiscuss(food.all_discuss_link)"
						v-if="food.discuss_number !==0">
						<text style="color: #000000;">查看全部讨论</text>
						<u-icon name="arrow-right" color="#000000" size="20" class="discuss-foot-arrow"></u-icon>
					</view>
					<view v-if="food.discuss_number === 0"
						style="text-align: center;margin-top: -25rpx;margin-bottom: 45rpx;font-size: 27rpx;color: #808080;">
						<text>暂无讨论，</text><text style="color:#1a56b4;" @click="jumpToDiscussPush">写讨论</text>
					</view>
				</view>
			</u-card>

		</view>
	</view>
</template>

<script>
	import shortComment from 'components/short-comment/short-comment.vue';
	import disCuss from 'components/discuss/discuss.vue';
	import shortCommentEdit from 'components/short-comment-rate/short-comment-rate.vue';
	import foodRate from 'components/food-rate/food-rate.vue';
	import allPhoto from 'components/photo-list/photo-list.vue';
	import myLoading from 'components/my-loading/my-loading.vue';
	import EatedData from 'components/eated-show/eated-show.vue'
	import {
		wantEatUrl
	} from '@/util/api.js';
	import {
		encrypt
	} from '@/util/encrypt/encrypt.js'
	import {
		checkLogin
	} from '@/util/checkLogin.js'


	export default {
		options: {
			styleIsolation: 'shared'
		},
		data() {
			return {
				// 是否显示吃过数据页面
				isShowRateInfo: false,
				// 显示数据为空
				showEmpty: false,
				// 页面进来的时候显示加载动画
				showLoading: true,
				photoNum: 6,
				// 控制全部照片页面是否显示
				isShowAllPhoto: false,
				// 控制打分界面的弹出
				isShowShortCommentEdit: false,
				customStyle: {
					borderColor: '#EC9F3A',
					boxShadow: "rgba(0, 0, 0, 0.05) 1rpx 1rpx 0.5rpx 0.5rpx",
					color: '#000000',
				},
				cardStyle: {
					padding: "0 25rpx 30rpx 40rpx",
				},
				food: {},
				userRateInfo: {}
			}
		},
		methods: {
			// 获得星星显示数量
			getScore(score) {
				if (score !== -1) {
					return (score / 2).toFixed(1)
				} else {
					return 'zaneu'
				}
			},
			
			rateBack() {
				this.$refs.rateEdit.clean()
			},
			
			// 跳转到讨论发布页面
			jumpToDiscussPush() {
				let data = {
					food: this.food.id
				}

				let item = encodeURIComponent(JSON.stringify(data))
				uni.navigateTo({
					url: "/pages/discuss-push/discuss-push?item=" + item,
					animationDuration: 700,
					animationType: 'slide-in-bottom',
				})
			},
			// jumpToRateEdit方法用于消除u-input组件的一个bug,bug描述如下
			// 当input组建的v-model值为空时，初次渲染完成之后，placeholder-style属性无效，必须在渲染完成之后改变一次v-model的值,placeholder-style才生效
			// 解决办法:初始v-model不设为空，当需要调出input 页面时调用一个清除v-model的方法，相当于进行了一次改变v-model的操作
			jumpToRateEdit() {
				this.isShowShortCommentEdit = true
				this.$refs.rateEdit.ready()
			},
			
			getShortCommentNum(num) {
				return "全部" + num + " >"
			},

			getDiscussNum(num) {
				return "全部" + num + " >"
			},
			
			jumpToAllDiscuss(link) {
				let data = {
					link: link,
					num: this.food.discuss_number,
					food: this.food.id
				}
				let item = encodeURIComponent(JSON.stringify(data))
				uni.navigateTo({
					url: "/pages/all-discuss/all-discuss?item=" + item,
					animationDuration: 700,
					animationType: 'slide-in-bottom',
				})
			},
			jumpToAllShortComment(link) {
				let data = {
					link: link,
					num: this.food.short_comment_number,
					food: this.food.id
				}
				let item = encodeURIComponent(JSON.stringify(data))
				uni.navigateTo({
					url: "/pages/all-short-comment/all-short-comment?item=" + item,
					animationDuration: 700,
					animationType: 'slide-in-bottom',
				})
			},
			// 跳转到地图页面
			jumpToMap() {
				const location = this.food.location.split(",")
				const lat = parseFloat(location[0])
				const log = parseFloat(location[1])
				const locationName = this.food.address
				uni.authorize({
					scope: 'scope.userLocation',
					success(res) {
						uni.openLocation({
							latitude: lat,
							longitude: log,
							name: locationName,
							success: function() {}
						});
					},
					fail(err) {

					}
				})
			},

			// 处理短评点赞事件
			approvalShortCommentHandle(data) {
				let index = data.index
				let obj = this.food.short_comment[index]
				let kind = data.kind
				let approval_number = obj.approval_number
				if (kind == "add") {
					obj.is_approval = true
					obj.approval_number++
				} else {
					obj.is_approval = false
					obj.approval_number--
				}
			},

			// 请求美食详情
			async getFoodDetail(url) {
				const {
					data: res
				} = await this.$http.get(url, {
					"baseURL": ""
				})
				if (res.code !== "3") {
					this.food = res.data
					this.showLoading = false
					this.getUserRate(this.food.is_want_eated)
				} else {
					this.showEmpty = true
					this.showLoading = false
				}

			},
			// 获取用户的吃过简短信息
			async getUserRate(is_want_eated) {
				if (is_want_eated === 0) {
					return
				} else if (is_want_eated === 1) {
					const {
						data: res
					} = await this.$http.get(this.food.eated_data_short_link, {
						"baseURL": ""
					})
					this.userRateInfo = res.data
				}
			},

			// 想吃
			want_eat_start() {
				// 先检查用户是否登录
				const canContinue = checkLogin()
				if (!canContinue) {
					return
				}

				let data = {
					"food": this.food.id
				}
				this.subPostData(data, wantEatUrl)
			},

			// 真正发起数据请求
			async subPostData(data, push_url) {
				uni.showLoading({
					title: "标记中",
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
					title: "标记成功",
					success() {
						that.food.is_want_eated = 2
					}
				})

			},
		},
		components: {
			shortComment,
			disCuss,
			shortCommentEdit,
			foodRate,
			allPhoto,
			myLoading,
			EatedData,
		},

		onLoad(options) {
			let link = JSON.parse(decodeURIComponent(options.data)).link
			this.getFoodDetail(link)
		},
	}
</script>

<style lang='scss' scoped>
	@import '../../common/uni-ui.scss';

	.content {
		margin-left: 20rpx;
		margin-top: 20rpx;
	}

	.header {
		display: flex;

		.food-picture {
			height: 230rpx;
			width: 184rpx;
		}

		.food-name {
			font-size: 36rpx;
		}

		.food-address {
			margin-top: 5rpx;
			color: #696a6c;
			font-size: 25rpx;
			width: 500rpx;

			text {
				margin-left: 4rpx;
			}

		}

		.food-time {
			margin-top: 5rpx;
			color: #696a6c;
			font-size: 25rpx;

			text {
				margin-left: 5rpx;
			}
		}

		.restaurant-nme {
			margin-top: 1rpx;
			color: #696a6c;
			font-size: 25rpx;

			text {
				margin-left: 5rpx;
			}
		}

		/* 美食没有吃过和没有想吃 */
		.food-want-eated {
			display: flex;
			margin-top: 20rpx;

			/deep/ .u-size-default {
				height: 60rpx;
			}

			.food-want {
				display: block;
				background-color: #FFFFFF;
				font-size: 25rpx;
				color: #F7CC5B;
				width: 200rpx;
				margin-right: 40rpx;
			}

			/* 已吃过 */
			.food-eated {
				/* display: block; */
				background-color: #FFFFFF;
				color: #F7CC5B;
				font-size: 25rpx;
				width: 200rpx;
			}

			.food-wanted {
				width: 220rpx;
				background-color: rgba(178, 179, 180, 0.3);
				display: flex;
				align-items: center;
				color: #3f3f41;
				justify-content: center;
				margin-right: 40rpx;
				border-radius: 10rpx;
			}
		}

		/* 美食已经吃过 */
		.food-already-eated {
			border-radius: 10rpx;
			margin-top: 15rpx;
			width: 495rpx;
			height: 50rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-left: 35rpx;
			padding-right: 25rpx;
			background-color: rgba(216, 219, 220, 0.3);

			.food-already-eated-left {
				font-size: 23rpx;
				color: #696a6c;
			}

			.food-already-eated-right {
				font-size: 23rpx;
				color: #9a9b9e;
			}
		}
	}

	.score {
		margin-top: 30rpx;
		font-size: 25rpx;
		margin-left: -30rpx;

		.score-head {
			display: flex;
			align-items: center;
			position: relative;

			.score-head-right {
				position: absolute;
				right: 0;
				top: 0;
			}

			.score-head-left {
				display: flex;
				align-items: center;
				font-size: 30rpx;
			}
		}
	}

	.desc {
		font-size: 30rpx;
		margin-left: -30rpx;

		.desc-body {
			font-size: 30rpx;
			margin-top: -40rpx;
		}

		.desc-head {
			display: flex;
			align-items: center;
			font-size: 30rpx;
		}
	}

	.food-photo {
		font-size: 25rpx;
		margin-left: -30rpx;

		.photo-head {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.photo-head-right {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				flex: 1;
			}

			.photo-head-left {
				display: flex;
				align-items: center;
				font-size: 30rpx;
			}
		}

		::v-deep .u-icon__icon {
			left: -5rpx;
		}

	}

	.food-address-photo-ing {
		display: flex;
	}

	.short-comment {
		margin-left: -30rpx;

		.comment-head {
			display: flex;
			align-items: center;
			margin-bottom: -10rpx;
			position: relative;

			.comment-head-right {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				flex: 1;
			}

			.comment-head-left {
				display: flex;
				align-items: center;
				font-size: 30rpx;
			}
		}
	}

	.short-comment-foot {
		margin-top: -30rpx;
		font-size: 30rpx;
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.discuss {
		margin-left: -30rpx;

		.discuss-head {
			display: flex;
			align-items: center;
			margin-bottom: -30rpx;

			.discuss-head-right {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				flex: 1;
			}

			.discuss-head-left {
				display: flex;
				align-items: center;
				font-size: 30rpx;
			}
		}
	}

	.discuss-foot {
		margin-top: -20rpx;
		font-size: 30rpx;
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
