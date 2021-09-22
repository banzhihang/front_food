<template>
	<view class="box">
		<view class="header">
			<view class="header-wrap">
				<text>全部讨论({{discussInfo.discuss_num}})</text>
				<view class="slider">
					<uni-segmented-control
							:values="selectList" @clickItem="onClickItem" 
							styleType="button" 
							activeColor="#1d65d8">
					</uni-segmented-control>
				</view>
			</view>
			<view class="header-empty">
				
			</view>
		</view>
		
		<view class="body">
			<discuss :dissCussList="discussInfo.discuss_list"></discuss>
		</view>
		<view class="write" @click="jumpToDiscussPush">
			<u-image width="80rpx" height="80rpx" src="https://hotschool.ltd/write.png"></u-image>
		</view>
		
	</view>
</template>

<script>
	import disCuss from 'components/discuss/discuss.vue';
	import disCussEdit from 'components/edit-discuss/edit-discuss.vue';
	export default {
		props:['foodId'],
		name:"all-discuss",
		options: { styleIsolation: 'shared' },
		data() {
			return {
				isShowDisscussEdit:false,
				selectList:[
					"热门",
					"最新",
				],
				discussInfo:{
					discuss_num:30,
					discuss_list:[
						{
							  "id": 2,
							  "user_nick_name": "哈哈",
							  "user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
							  "title": "哈哈哈哈还不好不好不好不好不好不好v不会v好就南京南京不好不好vv",
							  "comment_number": 3
						},
						  {
							  "id": 1,
							  "user_nick_name": "你好好久不",
							  "user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
							  "title": "真的可以吃吗",
							  "comment_number": 0
						  },
						  {
						  	  "id": 22,
						  	  "user_nick_name": "哈哈",
						  	  "user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
						  	  "title": "哈哈哈哈还不好不好不好不好不好不好v不会v好就南京南京不好不好vv",
						  	  "comment_number": 3
						  },
						    {
						  	  "id": 11,
						  	  "user_nick_name": "你好好久不",
						  	  "user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
						  	  "title": "真的可以吃吗",
						  	  "comment_number": 0
						    },
							{
								  "id": 21,
								  "user_nick_name": "哈哈",
								  "user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
								  "title": "哈哈哈哈还不好不好不好不好不好不好v不会v好就南京南京不好不好vv",
								  "comment_number": 3
							},
							  {
								  "id": 12,
								  "user_nick_name": "你好好久不",
								  "user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
								  "title": "真的可以吃吗",
								  "comment_number": 0
							  },
							  {
							  	  "id": 23,
							  	  "user_nick_name": "哈哈",
							  	  "user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
							  	  "title": "哈哈哈哈还不好不好不好不好不好不好v不会v好就南京南京不好不好vv",
							  	  "comment_number": 3
							  },
							    {
							  	  "id": 13,
							  	  "user_nick_name": "你好好久不",
							  	  "user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
							  	  "title": "真的可以吃吗",
							  	  "comment_number": 0
							    },
								{
									  "id": 24,
									  "user_nick_name": "哈哈",
									  "user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
									  "title": "哈哈哈哈还不好不好不好不好不好不好v不会v好就南京南京不好不好vv",
									  "comment_number": 3
								},
								  {
									  "id": 14,
									  "user_nick_name": "你好好久不",
									  "user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
									  "title": "真的可以吃吗",
									  "comment_number": 0
								  },
					]
				}
			};
		},
		components:{
			disCuss,
			disCussEdit,
		},
		methods:{
			jumpToDiscussPush(){
				uni.navigateTo({
					url: "/pages/discuss-push/discuss-push",
					animationDuration:700,
					animationType: 'slide-in-bottom',
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../../common/uni-ui.scss';
.box {
	.header {
		position: relative;
		background-color: "#FFFFFF";
		.header-empty {
			width: 100%;
			height: 90rpx;
			background-color: #FFFFFF;
		}
		.header-wrap{
			z-index: 10;
			position: fixed;
			width: 100%;
			height: 90rpx;
			background-color: #FFFFFF;
			display: flex;
			justify-content: space-between;
			text{
				margin-top: 15rpx;
				margin-left: 30rpx;
				font-size: 30rpx;
			}
			.slider{
				padding-top: 10rpx;
				margin-right: 50rpx;
				width: 200rpx;
				/deep/ .segmented-control__text {
					font-size: 25rpx;
				}
				/deep/ .segmented-control {
					height: 50rpx;
				}
			}
		}
	}
	
	
	.body {
		width: 700rpx;
		margin-left: 30rpx;
		
	}
	.write {
		width: 80rpx;
		height: 80rpx;
		position: fixed;
		bottom: 150rpx;
		right: 30rpx;
	}
	
	::v-deep .u-icon__icon {
		left:-25rpx;
	}
}
</style>
