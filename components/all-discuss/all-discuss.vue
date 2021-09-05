<template>
	<view class="box">
		<view>
			<text>全部讨论({{discussInfo.discuss_num}})</text>
		</view>
		<view class="slider">
			<u-subsection :list="selectList" current="0" 
			height="55" font-size="20rpx" active-color="#1a56b4"
			:bold="false"
			>
			</u-subsection>
		</view>
		<view class="body">
			<discuss :dissCussList="discussInfo.discuss_list"></discuss>
		</view>
		<view class="write" @click="isShowDisscussEdit=true">
			<u-image width="80rpx" height="80rpx" src="https://hotschool.ltd/write.png"></u-image>
		</view>
		
		<u-popup v-model="isShowDisscussEdit" mode="bottom"
			length="100%" close-icon-pos="top-left" :closeable="true"
			close-icon-size="40" close-icon="arrow-left" close-icon-color="#000000" 
		>
			<edit-discuss :foodId="foodId"></edit-discuss>
		</u-popup>
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
					{
						name:"热门",
					},
					{
						name:"最新",
					}
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
		}
	}
</script>

<style lang="scss" scoped>
@import '../../common/uni-ui.scss';
.box {
	position: relative;
	text{
		position: absolute;
		top: 85rpx;
		left: 30rpx;
		font-size: 30rpx;
	}
	.slider{
		width: 300rpx;
		position: absolute;
		top: 80rpx;
		right: 45rpx;
	}
	.body {
		position: absolute;
		width: 695rpx;
		top: 185rpx;
		right: 35rpx;
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
