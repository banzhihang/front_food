<template>
	<view>
		<view class="header">
			<view class="avatar">
				<u-avatar :src="userInfo.user_head_portrait" size="100"></u-avatar>
			</view>
			<view class="name">
				<view >{{userInfo.user_nick_name}}</view>
			</view>
		</view>
		
		<view class="body">
			<u-card 
			box-shadow="rgba(0, 0, 0, 0.1) 1rpx 1rpx 3rpx 3rpx"
			:head-border-bottom="false"
			:foot-border-top="false"
			border-radius="20"
			>
				<view slot="body" class="body-middle">
					<view class="first-box" @click="jumpToMyContent('想吃',1)">
						<text>想吃</text>
						<u-icon name="arrow-right" size="20"></u-icon>
						<view class="eated-want first">
							<u-image width="100%" height="200rpx" :src="userInfo.want_eat_img"></u-image>
						</view>
						<text>{{userInfo.want_eat_num}}</text>
					</view>
					
					<view class="second-box" @click="jumpToMyContent('吃过',2)">
						<text>吃过</text>
						<u-icon name="arrow-right" size="20"></u-icon>
						<view class="eated-want first">
							<u-image width="100%" height="200rpx" :src="userInfo.eated_img"></u-image>
						</view>
						<text>{{userInfo.eated_num}}</text>
					</view>
					
					<view class="third-box" @click="jumpToMyContent('我的发布',3)">
						<text>我的发布</text>
						<u-icon name="arrow-right" size="20"></u-icon>
						<view class="eated-want first">
							<u-image width="100%" height="200rpx" :src="userInfo.my_push_img"></u-image>
						</view>
						<text>{{userInfo.my_push_num}}</text>
					</view>
				</view>
			</u-card>
		</view>
		
	</view>
</template>

<script >
	export default {
		data() {
			return {
				userInfo:{
					user_head_portrait:"https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
					user_nick_name:"小明哈哈",
					want_eat_img:"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
					eated_img:"https://img.zcool.cn/community/019f7e5c061a3da80121ab5dd1990e.jpg@1280w_1l_2o_100sh.jpg",
					my_push_img:"https://img.zcool.cn/community/018a4c56dfbcdb6ac72531cb07004c.jpg@1280w_1l_2o_100sh.jpg",
					want_eat_num:10,
					eated_num:12,
					my_push_num:10,
					
				}
			}
		},
		methods: {
			jumpToMyContent(title,type){
				uni.navigateTo({
					url: "/pages/self/my-content?type="+ type + "&title="+title ,
					animationDuration:700,
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-color: #ededed;
}

.header {
	margin-top: 100rpx;
	margin-bottom: 50rpx;
	text-align: center;
}
.body {
	.body-middle{
		justify-content: space-between;
		margin-top: -50rpx;
		margin-bottom: 10rpx;
		display: flex;
		.first-box {
			text-align: center;
			text {
				font-size: 26rpx;
				margin-right: 5rpx;
			}
		}
		.second-box {
			text-align: center;
			text {
				font-size: 26rpx;
				margin-right: 5rpx;
			}
		}
		.third-box {
			text-align: center;
			text {
				font-size: 26rpx;
				margin-right: 5rpx;
			}
		}
		.eated-want {
			overflow: hidden;
			width: 150rpx;
			height: 200rpx;
			background-color: #F7F7F7;
			box-shadow:rgba(0, 0, 0, 0.1) 1rpx 1rpx 3rpx 3rpx;
			border-radius: 20rpx;
			margin-top: 10rpx;
			margin-bottom: 10rpx;
		}
		.first {
			
		}
		.second {
			
		}
	}
}
</style>
