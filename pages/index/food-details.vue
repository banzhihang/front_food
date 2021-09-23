<template>
	<view class="content u-skeleton">
		<view class="header">
			<view class="food-picture uni-thumb">
				<image :src="food.first_image" mode="aspectFill" ></image>
			</view>
			<view>
				<text class="food-name">{{food.foodName}}</text>
				<view class="food-time">
					<u-icon name="clock" class="food-time-img" color="#1a56b4" size="25"></u-icon>
					<text>{{food.add_time}}</text>
				</view>
				<view class="restaurant-nme">
					<u-icon name="home" size="23" color="#1a56b4" ></u-icon>
					<text>{{food.restaurant_name}}</text>
				</view>
				<view class="food-address" @click="jumpToMap">
					<u-icon name="map" color="#1a56b4" size="26"></u-icon>
					<text>{{food.address}}</text>
					<u-icon name="arrow-right" color="#696a6c" size="20"></u-icon>
				</view>
				<view class="food-want-eated">
					<view class="food-want">
						<u-button type="default" :plain="true" :custom-style="customStyle" 
						:hair-line="false" :ripple="true" ripple-bg-color="rgba(236,159,58,0.5)">
							<u-icon name="bookmark" color="#EC9F3A"></u-icon>
							<text style="font-size: 29rpx;">想吃</text>
							</u-button>
					</view>
					<view class="food-eated" >
						<u-button type="default" :plain="true" :custom-style="customStyle" 
						:hair-line="false" @click="isShowShortCommentEdit=true" :ripple="true" ripple-bg-color="rgba(236,159,58,0.5)">
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
			box-shadow="rgba(0, 0, 0, 0.1) 1rpx 1rpx 5rpx 5rpx"
			border-radius="20"
			>
				<view slot="head" class="score-head">
					<u-icon name="https://hotschool.ltd/score.png" color="#1a56b4" size="38" style="margin-right: 10rpx;"></u-icon>
					<text style="margin-top: -49rpx;display: block;margin-left: 40rpx;">吃小猪评分</text>
					<text class="score-head-right" style="margin-top: -4rpx;">{{food.vote_number}}人评分</text>
				</view>
				<view slot="body" class="score-body">
					<food-rate :foodRate="food.rate_score"></food-rate>
				</view>	
			</u-card>
		</view>
		<view class="desc">
			<u-card title="简介"
			:border="false"
			:head-border-bottom="false">
				<view slot="head" class="desc-head">
					<u-icon name="https://hotschool.ltd/brief.png" color="#1a56b4" size="30" style="margin-right: 10rpx;"></u-icon>
					<text style="margin-top: -44rpx;display: block;margin-left: 40rpx;">简介</text>
				</view>
				<view slot="body" class="desc-body">
					<text>{{food.desc}}</text>
				</view>
			</u-card> 
		</view>
		<view class="food-photo">
			<u-card title="图片" 
			:border="false"
			:head-border-bottom="false">
				<view slot="head" class="photo-head">
					<u-icon name="https://hotschool.ltd/photo.png" color="#1a56b4" size="32" style="margin-right: 10rpx;"></u-icon>
					<text style="margin-top: -46rpx;display: block;margin-left: 40rpx;">图片</text>
					<view class="photo-head-right" @click="isShowAllPhoto=true">
						<text style="margin-top: -6rpx;margin-right: 15rpx;" >
							全部{{photoNum}}
						</text>
						<u-icon name="arrow-right" color="#000000" size="20" style="margin-left: 5rpx;margin-right: -10rpx;"></u-icon>
					</view>
					
					<u-popup v-model="isShowAllPhoto" mode="bottom"
						length="100%" close-icon-pos="top-left" :closeable="true"
						close-icon-size="30"
					>
						<photo-list :foodId="food.id"></photo-list>
					</u-popup>
				</view>
				<view slot="body">
					<u-swiper :list="food.image" mode="none" :effect3d="true" effect3d-previous-margin="40" duration="1000"></u-swiper>
				</view>
			</u-card>
		</view>
		<view class="short-comment">
			<u-card title="短评" 
			style="background: rgba(0,0,0,0.02);"
			box-shadow="rgba(0, 0, 0, 0.1) 1rpx 1rpx 5rpx 5rpx"
			:head-border-bottom="false"
			:foot-border-top="false"
			border-radius="20"
			:foot-style="cardStyle"
			>	
				<view slot="head" class="comment-head">
					<u-icon name="https://hotschool.ltd/short-comment.png" color="#1a56b4" size="30" style="margin-right: 10rpx;"></u-icon>
					<text style="margin-top: -48rpx;display: block;margin-left: 40rpx;">短评</text>
					<view  class="comment-head-right" @click="jumpToAllShortComment(food.id)">
						<text style="margin-top: -7rpx;">
							全部{{food.short_comment_number}}
						</text>
						<u-icon name="arrow-right" color="#000000" size="20" style="margin-left: 5rpx;margin-right: -10rpx;"></u-icon>
					</view>
				</view>
				<view slot="body"> 
					<short-comment :shortCommentList="food.short_comment" :hiddenBottom="false" ></short-comment>
				</view>
				<view slot="foot" class="short-comment-foot" @click="jumpToAllShortComment(food.id)">
					<text style="color: #000000;" >查看全部{{food.short_comment_number}}条短评</text>
					<u-icon name="arrow-right" color="#000000" size="20" class="short-comment-foot-arrow"></u-icon>
				</view>
			</u-card>
		</view>
		<view class="discuss">
			<u-card title="讨论"
			style="background: rgba(0,0,0,0.02);"
			box-shadow="rgba(0, 0, 0, 0.1) 1rpx 1rpx 3rpx 3rpx"
			:head-border-bottom="false"
			:foot-border-top="false"
			border-radius="20"
			:foot-style="cardStyle"
			>
				<view slot="head" class="discuss-head">
					<u-icon name="https://hotschool.ltd/discuss.png" color="#1a56b4" size="35" style="margin-right: 10rpx;"></u-icon>
					<text style="margin-top: -48rpx;display: block;margin-left: 40rpx;">讨论</text>
					<view class="discuss-head-right" @click="jumpToAllDiscuss(food.id)">
						<text style="margin-top: -7rpx;">
							全部{{food.discuss_number}}
						</text>
						<u-icon name="arrow-right" color="#000000" size="20" style="margin-left: 5rpx;margin-right: -10rpx;"></u-icon>
					</view>
				</view>
				<view slot="body" class="discuss-body">
					<discuss :dissCussList="food.discuss" :hiddenBottom="false"></discuss>
				</view>
				<view slot="foot" class="discuss-foot" @click="jumpToAllDiscuss(food.id)">
					<text style="color: #000000;">查看全部{{food.discuss_number}}个讨论</text>
					<u-icon name="arrow-right" color="#000000" size="20" class="discuss-foot-arrow"></u-icon>
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
	import allShortComment from 'components/all-short-comment/all-short-comment.vue';
	import allDiscuss from '../../components/all-discuss/all-discuss.vue';

	export default {
		options: { styleIsolation: 'shared' },
		data() {
			return {
				photoNum:6,
				// 控制全部照片页面是否显示
				isShowAllPhoto: false,
				// 控制打分界面的弹出
				isShowShortCommentEdit:false,
				customStyle: {
					borderColor: '#EC9F3A',
					boxShadow:"rgba(0, 0, 0, 0.05) 1rpx 1rpx 0.5rpx 0.5rpx",
					color: '#000000',
				},
				cardStyle:{
					padding:"0 25rpx 30rpx 40rpx",
				},
				food :{
					id:1,
					lon:116.33193,
					lat:39.897255,
					first_image:"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
					foodName:"青椒肉丝",
					address:"田坝街天财路你家那就是不断进你你你嗯阿胶阿胶你焦恩俊呢就",
					add_time:"2020-12-11",
					vote_number:"3000",
					restaurant_name:"成都担担面",
					desc:"这个非常不错！炒鸡好吃哈哈碚的胡说八道还是不胡说八道好几遍世界的变化就是v大概就是v大家还是博大精深博大精深v不到v过山车时光和vv先公后私v",
					image:[
						"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"https://hotschool.ltd/011e9c909d72429e9318d7455080f523",
						"https://tse1-mm.cn.bing.net/th/id/R-C.bcffaa09e50785c20b2e04699c5937a7?rik=k8gIWLKXu1eoaw&riu=http%3a%2f%2ffile2.zhituad.com%2fthumb%2f201201%2f13%2f201201130300339473kNpfJ_priv.jpg&ehk=%2bX8g%2b%2f6sv9R2WnMImY2mueHfjqqFTgq6rq%2fv8rtPAjw%3d&risl=&pid=ImgRaw&r=0",
					],
					short_comment_number:962,
					discuss_number:100,
					rate_score:{
						score:5.9,
						rate:[10,20,30,10,30]
					},
					short_comment:[
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
			// 获得星星显示数量
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
			
			getDiscussNum(num){
				return "全部"+num+" >"
			},
			jumpToAllDiscuss(id) {
				uni.navigateTo({
					url: "/pages/all-discuss/all-discuss",
					animationDuration:700,
					animationType: 'slide-in-bottom',
				})
			},
			jumpToAllShortComment(id) {
				uni.navigateTo({
					url: "/pages/all-short-comment/all-short-comment",
					animationDuration:700,
					animationType: 'slide-in-bottom',
				})
			},
			jumpToMap() {
				const lat = parseFloat(this.food.lat)
				const log = parseFloat(this.food.lon)
				const locationName = this.food.address
				uni.authorize({
					scope: 'scope.userLocation',
					success(res) {
						uni.openLocation({
							latitude: lat,
							longitude: log,
							name:locationName,
							success: function() {}
						});
					},
					fail(err) {
						
					}
				})
			},
			
		},
		components:{
			shortComment,
			disCuss,
			shortCommentEdit,
			foodRate,
			allPhoto,
			allShortComment,
			allDiscuss,
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
			height: 230rpx;
			width: 184rpx;
		}
		
		.food-name{
			font-size: 36rpx;
		}
		
		.food-address {
			margin-top: 5rpx;
			color: #696a6c;
			font-size: 25rpx;
			width: 500rpx;
			text {
				margin-left: 5rpx;
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
		
		.food-want-eated{
			display: flex;
			margin-top: 20rpx;
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
		.score-head {
			position: relative;
			.score-head-right {
				position: absolute;
				right: 0;
				top: 0;
			}
		}
	}
	.desc{
		font-size: 30rpx;
		margin-left: -30rpx;
		.desc-body {
			font-size: 30rpx;
			margin-top: -40rpx;
		}
	}
	.food-photo{
		font-size: 25rpx;
		margin-left: -30rpx;
		.photo-head {
			position: relative;
			.photo-head-right {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				width: 200rpx;
				position: absolute;
				right: 0;
				top: 0;
				
			}
		}
		::v-deep .u-icon__icon {
			left:-15rpx;
		}
		
	}
	.food-address-photo-ing {
		display: flex;
	}
	.short-comment{
		margin-left: -30rpx;
		.comment-head {
			margin-bottom: -10rpx;
			position: relative;
			.comment-head-right {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				width: 200rpx;
				position: absolute;
				right: 0;
				top: 0;
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
	.discuss{
		margin-left: -30rpx;
		.discuss-head {
			margin-bottom: -30rpx;
			position: relative;
			.discuss-head-right {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				width: 200rpx;
				position: absolute;
				right: 0;
				top: 0;
			}
		}
	}
	.discuss-foot{
		margin-top: -20rpx;
		font-size: 30rpx;
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
</style>
