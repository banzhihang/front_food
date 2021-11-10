<template>
	<view>
		<view class="comment" v-for="(res,idx) in shortCommentList" :key="res.id">
			<view class="left">
				<image :src="res.user_head_portrait" mode="aspectFill"></image>
			</view>
			<view class="right">
				<view class="top">
					<view>
						<view class="name">{{ res.user_nick_name }}</view>
						<view class="score-time">
							<uni-rate :value="res.user_score" size="12" allowHalf readonly active-color='#EC9F3A'/>
							<text class="time">{{res.add_time}}</text>
						</view>
					</view>
					<view class="like" @click="approvalShortComment(idx)">
						<u-icon
						:name="res.is_approval ? 'thumb-up-fill' : 'thumb-up'" 
						class="like" size="35" 
						:color="res.is_approval ? '#1a56b4': '#808080'"></u-icon>
						
						<view class="num" :style="{color:(res.is_approval ? '#1a56b4' : '#808080')}">{{ res.approval_number }}</view>
					</view>
				</view>
				<view class="content">{{ res.content }}</view>
			</view>
			<view class="bottom-line" v-show="showBottomLine(idx)">
				<u-line color="#e0dde3" length="800rpx"/>
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
		props: {
			shortCommentList:{
				type:Array,
				default:[]
			},
			hiddenBottom:{
				type:Boolean,
				default:true
			}
		},
		name:"shortComment",
		methods:{
			getScore(score) {
				if (score !== null) {
					return (score/2).toFixed(1)
				}else {
					return 'www'
				}
			},
			showBottomLine(idx){
				if (idx === this.shortCommentList.length-1  && this.hiddenBottom ) {
					return false
				}else {
					return true
				}
			},
			
			// 短评点赞
			async approvalShortComment(index) {
				// 先检查用户是否登录
				const canContinue = checkLogin()
				if (!canContinue) {
					return
				}
				
				uni.vibrateShort({})
				let obj = this.shortCommentList[index]
				let data = {
					"short_comment":obj.id
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
				let obj = this.shortCommentList[index]
				const is_approval = obj.is_approval
				let data = {
					index:index
				}
				
				if (is_approval) {
					data.kind = "sub"
				} else {
					data.kind = "add"
				}
				this.$emit("approval",data)
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
				font-size: 30rpx;
				color: #000000;
			}
			.like {
				display: flex;
				align-items: center;
				color: #808080;
				font-size: 26rpx;
				.num {
					margin-right: 4rpx;
					color: #808080;
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
			font-size: 30rpx;
			margin-bottom: 30rpx;
			color: #000000;
		}
		
		.score-time {
			display: flex;
			align-items: center;
			.time {
				margin-left: 15rpx;
				font-size: 23rpx;
				color: #808080;
			}
		}
	}
}
</style>
