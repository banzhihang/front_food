<template>
	<view>
		<view class="box">
			<view class="top">
				<view class="userinfo">
					<view class="left">
						<image :src="discussInfo.user_head_portrait" mode="aspectFill"></image>
					</view>
					<view class="right">
						<view>
							<view class="name">{{ discussInfo.user_nick_name }}</view>
							<text>发布讨论</text>
						</view>
						<view>
							<text>{{discussInfo.add_time}}</text>
						</view>
					</view>
				</view>
				<view class="content">
					<u-parse :html="discussInfo.content"></u-parse>
				</view>
			</view>
			<view class="gap">
				<u-gap height="18" bg-color="#ebebf2"></u-gap>
			</view>
			<view class="mid">
				<view class="tab">
					<u-tabs :list="tabList" :is-scroll="false"
					font-size="30" inactive-color="#b5b5bb" active-color="#585758"></u-tabs>
					<view class="bottom-line">
						<u-line color="#e0dde3" length="800rpx"/>
					</view>
				</view>
			</view>
			<view class="bottom">
				<discuss-comment @reply="replyEdit" @comment="commentdit"></discuss-comment>
			</view>
		</view>
		<input-comment-reply class="comment-input" :content="replyText"></input-comment-reply>
	</view>
</template>

<script>
	import commentInput from '@/components/input-comment-reply/input-comment-reply.vue'
	import discussComment from '@/components/discuss-comment/discuss-comment.vue'
	export default {
		data() {
			return {
				replyText:"评论千万条，友善第一条",
				discussInfo:{
					add_time:"9小时之前",
					user_nick_name:"你哈哈哈😄",
					user_head_portrait:"https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
					content: `
					<h2>露从今夜白，月是故乡明</h2>
					<br/>
					<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
					<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
					<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
				`
				},
				tabList:[
					{
						name:"评论"
					}
				]
			};
		},
		components:{
			discussComment,
			commentInput
		},
		methods:{
			replyEdit(e) {
				const text = '回复 '+e.targetUserName+":"
				this.replyText = text
			},
			commentdit(e) {
				console.log(e)
				const text = '评论 '+e.targetUserName+":"
				this.replyText = text
			},
		}
	}
</script>

<style lang="scss" scoped>
.box{
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
	
.top{
	.userinfo{
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
			view {
				text{
					font-size: 25rpx;
					color: #b5b5bb;
				}
			}
		}
	}
	.content {
		margin-top: 20rpx;
	}
}

.gap {
	margin-top: 20rpx;
}

.mid {
	.tab{
		padding-right: 630rpx;
		.bottom-line {
			margin-top: -7rpx;
		}
	}
}
</style>
