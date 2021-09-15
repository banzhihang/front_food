<template>
	<view class="box">
		<view>
			<text>全部短评({{shortCommentInfo.short_comment_num}})</text>
		</view>
		<view class="slider">
			<u-subsection :list="selectList" 
			height="55" font-size="20rpx" active-color="#1a56b4"
			:bold="false"
			bg-color="#EFF4F0"
			>
			</u-subsection>
		</view>
		<view class="body">
			<short-comment :shortCommentList="shortCommentInfo.short_comment_list"></short-comment>
		</view>
	</view>
</template>

<script>
	import shortComment from 'components/short-comment/short-comment.vue';
	export default {
		props:['foodId'],
		name:"all-short-comment",
		data() {
			return {
				loading:true,
				shortCommentInfo:{
					short_comment_num:50,
					short_comment_list:[
						{
							"id": 5,
							"user": 1,
							"user_nick_name": "你好你好",
							"user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
							"user_score": 4,
							"is_approval": 0,
							"content": "是的",
							"approval_number": 0,
							"add_time": "03-10",
							"is_author": 1,
							"type": 1
						},
						{
							"id": 4,
							"user": 1,
							"user_nick_name": "你好",
							"user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
							"user_score": 5,
							"is_approval": 0,
							"content": "是的你家那不好不好不好不好南京南京南京不好不好就不好不好不好和v把v个v个v个v吧把",
							"approval_number": 10,
							"add_time": "03-10",
							"is_author": 1,
							"type": 1
						},
						{
							"id": 3,
							"user": 1,
							"user_nick_name": "你好",
							"user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
							"user_score": 1,
							"is_approval": 1,
							"content": "是的会不会v把vv和v南京南京不好就会v个v结果v个v个v个v个v韩国v规划v韩国v哈哈",
							"approval_number": 9,
							"add_time": "03-10",
							"is_author": 1,
							"type": 1
						},
						{
							"id": -1,
							"user": 1,
							"user_nick_name": "你好",
							"user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
							"user_score": 5,
							"is_approval": 0,
							"content": "是的会不会v把vv和v南京南京不好就会v个v结果v个v个v个v个v韩国v规划v韩国v哈哈",
							"approval_number": 50,
							"add_time": "03-10",
							"is_author": 1,
							"type": 1
						},
						{
							"id": 1,
							"user": 1,
							"user_nick_name": "你好",
							"user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
							"user_score": 3,
							"is_approval": 0,
							"content": "是的会不会v把vv和v南京南京不好就会v个v结果v个v个v个v个v韩国v规划v韩国v哈哈",
							"approval_number": 100,
							"add_time": "03-10",
							"is_author": 1,
							"type": 1
						},
					]
				},
				selectList:[
					{
						name:"热门",
					},
					{
						name:"最新",
					}
				]
			};
		},
		components:{
			shortComment,
		},
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
		top: 155rpx;
		right: 30rpx;
	}
	
}

</style>
