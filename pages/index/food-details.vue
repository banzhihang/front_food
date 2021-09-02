<template>
	<view class="content">
		<view class="header">
			<view class="food-picture uni-thumb">
				<image :src="food.first_image" mode="aspectFill"></image>
			</view>
			<view>
				<text class="food-name">{{food.foodName}}</text>
				<view class="food-time">
					<u-icon name="clock-fill" class="food-time-img"></u-icon>
					<text>{{food.add_time}}</text>
				</view>
				<view class="food-address">
					<u-icon name="map-fill" class="food-address-img"></u-icon>
					<text>{{food.address}}</text>
				</view>
				<view class="food-want-eated">
					<view class="food-want">
						<u-button type="default" :plain="true" :custom-style="customStyle" :hair-line="false">
							<u-icon name="bookmark" color="#EC9F3A"></u-icon>
							<text style="font-size: 29rpx;">想吃</text>
							</u-button>
					</view>
					<view class="food-eated" >
						<u-button type="default" :plain="true" :custom-style="customStyle" 
						:hair-line="false" @click="eated()">
							<u-icon name="star" color="#EC9F3A"></u-icon>
							<text style="font-size: 29rpx;">吃过</text>
							</u-button>
							<u-popup v-model="isShowShortCommentEdit" mode="bottom" 
							length="100%" close-icon-pos="top-left" :closeable="true"
							close-icon-size="40"
							>
							<short-comment-edit></short-comment-edit>
							</u-popup>
					</view>
				</view>
			</view>	
		</view>
		<view class="score">
			<u-card title="吃小猪评分" 
			style="background: rgba(0,0,0,0.02);"
			:sub-title="food.vote_number"
			thumb="../../static/icon/score.png"
			thumb-width="30"
			box-shadow="rgba(0, 0, 0, 0.1) 1rpx 1rpx 5rpx 5rpx">
				<view slot="body" class="score-body">
				<view class="score-text">
					<text >{{food.score}}</text>
					<uni-rate :value="getScore(food.score)" size="17" allowHalf readonly color="#d7d5da" activeColor="#EC9F3A"/>
				</view> 
				<view class="score-rate">
					<uni-rate value="0" size="13" max="5" allowHalf readonly color="#d7d5da" activeColor="#EC9F3A"/>
					<uni-rate value="0" size="13" max="4" allowHalf readonly color="#d7d5da" activeColor="#EC9F3A"/>				
					<uni-rate value="0" size="13" max="3" allowHalf readonly color="#d7d5da" activeColor="#EC9F3A"/>				
					<uni-rate value="0" size="13" max="2" allowHalf readonly color="#d7d5da" activeColor="#EC9F3A"/>				
					<uni-rate value="0" size="13" max="1" allowHalf readonly color="#d7d5da" activeColor="#EC9F3A"/>					
				</view>
				<view class="score-progress">
					<view style="height: 28rpx;">
						<u-line-progress active-color="#EC9F3A" :percent="food.rate[0]" :show-percent="false" height="6"
							class="progress" ></u-line-progress>
					</view>
					<view style="height: 28rpx;">
						<u-line-progress active-color="#EC9F3A" :percent="food.rate[1]" :show-percent="false" height="6"
							class="progress" ></u-line-progress>
					</view>
					<view style="height: 25rpx;">
						<u-line-progress active-color="#EC9F3A" :percent="food.rate[2]" :show-percent="false" height="6"
							class="progress" ></u-line-progress>
					</view>
					<view style="height: 28rpx;">
						<u-line-progress active-color="#EC9F3A" :percent="food.rate[3]" :show-percent="false" height="6"
							class="progress" ></u-line-progress>
					</view>
					<view style="height: 25rpx;">
						<u-line-progress active-color="#EC9F3A" :percent="food.rate[4]" :show-percent="false" height="6"
							class="progress" ></u-line-progress>
					</view>

				</view>
			</view>	
			</u-card>
		</view>
		<view class="desc">
			<u-card title="简介"
			thumb="../../static/icon/abstract.png"
			thumb-width="33"
			:border="false"
			:head-border-bottom="false">
				<view slot="body">
					<text>{{food.desc}}</text>
				</view>
			</u-card>
			   
		</view>
		<view class="food-photo">
			<u-card title="图片" 
			sub-title="查看全部"
			thumb="../../static/icon/picture.png"
			thumb-width="33"
			:border="false"
			:head-border-bottom="false">
				<view slot="body">
					<u-swiper :list="food.image" mode="none" :effect3d="true" effect3d-previous-margin="40" duration="1000"></u-swiper>
				</view>
			</u-card>
		</view>
		<view class="short-comment">
			<u-card title="短评" 
			style="background: rgba(0,0,0,0.02);"
			:sub-title="getShortCommentNum(food.short_comment_number)"
			thumb="../../static/icon/short-comment.png"
			thumb-width="30"
			box-shadow="rgba(0, 0, 0, 0.1) 1rpx 1rpx 5rpx 5rpx"
			>
				<view slot="body"> 
					<short-comment :shortCommentList="food.short_comment"></short-comment>
				</view>
				<view slot="foot" class="short-comment-foot">
					<text>查看全部{{food.short_comment_number}}条短评</text>
					<text class="short-comment-foot-arrow">></text>
				</view>
			</u-card>
		</view>
		<view class="discuss">
			<u-card title="讨论"
			style="background: rgba(0,0,0,0.02);"
			:sub-title="getShortCommentNum(food.discuss_number)"
			thumb="../../static/icon/discuss.png"
			thumb-width="30"
			box-shadow="rgba(0, 0, 0, 0.1) 1rpx 1rpx 3rpx 3rpx"
			>
				<view slot="body">
					<discuss :dissCussList="food.discuss"></discuss>
				</view>
				<view slot="foot" class="discuss-foot">
					<text>查看全部{{food.discuss_number}}个讨论</text>
					<text class="discuss-foot-arrow">></text>
				</view>
			</u-card>
		</view>
	</view>
</template>

<script>
	import shortComment from 'components/short-comment/short-comment.vue';
	import disCuss from 'components/discuss/discuss.vue';
	import shortCommentEdit from '../../components/short-comment-rate.vue'
	
	export default {
		data() {
			return {
				// 控制打分界面的弹出
				isShowShortCommentEdit:false,
				customStyle: {
					borderColor: '#EC9F3A',
					boxShadow:"rgba(0, 0, 0, 0.05) 1rpx 1rpx 0.5rpx 0.5rpx",
					color: '#000000',
				},
				food :{
					first_image:"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
					foodName:"青椒肉丝",
					address:"田坝街天财路你家那就是不断进步",
					add_time:"2020-12-11",
					vote_number:"3000人评分",
					score:5.9,
					desc:"这个非常不错！炒鸡好吃哈哈碚的胡说八道还是不胡说八道好几遍世界的变化就是v大概就是v大家还是博大精深博大精深v不到v过山车时光和vv先公后私v",
					image:[
						"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"https://hotschool.ltd/011e9c909d72429e9318d7455080f523",
						"https://tse1-mm.cn.bing.net/th/id/R-C.bcffaa09e50785c20b2e04699c5937a7?rik=k8gIWLKXu1eoaw&riu=http%3a%2f%2ffile2.zhituad.com%2fthumb%2f201201%2f13%2f201201130300339473kNpfJ_priv.jpg&ehk=%2bX8g%2b%2f6sv9R2WnMImY2mueHfjqqFTgq6rq%2fv8rtPAjw%3d&risl=&pid=ImgRaw&r=0",
					],
					short_comment_number:962,
					discuss_number:100,
					rate:[10,20,30,10,30],
					short_comment:[
						{
							"id": 5,
							"user": 1,
							"user_nick_name": "你好你好",
							"user_head_portrait": "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZToVEV_uqawGxTf0eDFdZQAAAA?pid=ImgDet&rs=1",
							"user_score": 5,
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
							"user_score": 5,
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
							"user_score": 5,
							"is_approval": 0,
							"content": "是的会不会v把vv和v南京南京不好就会v个v结果v个v个v个v个v韩国v规划v韩国v哈哈",
							"approval_number": 100,
							"add_time": "03-10",
							"is_author": 1,
							"type": 1
						},
					],
					discuss:[
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
						  }
					]
				}
			};
		},
		methods:{
			getScore(score) {
				if (score !== null) {
					return (score/2).toFixed(1)
				}else {
					return 'zaneu'
				}
			},
			getShortCommentNum(num){
				return "全部"+num+" >"
			},
			eated(){
				this.isShowShortCommentEdit = true
			}
		},
		components:{
			shortComment,
			disCuss,
			shortCommentEdit
		}
	}
</script>

<style lang='scss' scoped>
	@import '../../common/uni-ui.scss';
	.content {
		margin-left: 20rpx;
		margin-top: 20rpx;
	}
	.header{
		display: flex;
		.food-picture {
			height: 250rpx;
			width: 194rpx;
		}
		
		.food-name{
			font-size: 38rpx;
		}
		
		.food-address {
			margin-top: 5rpx;
			color: #696a6c;
			font-size: 25rpx;
			width: 500rpx;
			.food-address-img {
				height: 23rpx;
				width: 26rpx;
			}
		}	
		
		.food-time {
			margin-top: 10rpx;
			color: #696a6c;
			font-size: 25rpx;
			.food-time-img {
				margin-right: 5rpx;
				height: 23rpx;
				width: 26rpx;
			}
		}
		
		.food-want-eated{
			display: flex;
			margin-top: 30rpx;
			/deep/ .u-size-default{
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
			.food-eated{
				/* display: block; */
				background-color: #FFFFFF;
				color: #F7CC5B;
				font-size: 25rpx;
				width: 200rpx;
			}
		}
	}
	.score {
		margin-top: 30rpx;
		font-size: 25rpx;
		margin-left: -30rpx;
		.score-body {
			display: flex;
			.score-text {
				text-align: center;
				font-size: 40rpx;
				margin-top: 10rpx;
				margin-left: 60rpx;
			}
			.score-rate{
				margin-top: 0rpx;
				text-align: center;
				margin-left: 20rpx;
				width: 150rpx;
				/deep/ .uni-rate {
					justify-content: flex-end;
				 }
				}
			}
			.score-progress {
				margin-top: -17rpx;
				margin-left: 20rpx;
				width: 200rpx;
				
			}
		}
	
	.desc{
		font-size: 25rpx;
		margin-left: -30rpx;
	}
	.food-photo{
		font-size: 25rpx;
		margin-left: -30rpx;
	}
	.food-address-photo-ing {
		display: flex;
	}
	.short-comment{
		margin-left: -30rpx;
	}
	.short-comment-foot {
		font-size: 25rpx;
		position: relative;
		.short-comment-foot-arrow {
			position: absolute;
			top: 0;
			right: 0;
		}
	}
	.discuss{
		margin-left: -30rpx;
	}
	.discuss-foot{
		font-size: 25rpx;
		position: relative;
		.discuss-foot-arrow {
			position: absolute;
			top: 0;
			right: 0;
		}
	}
	
</style>
