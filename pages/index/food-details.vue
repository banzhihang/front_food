<template>
	<view class="content">
		<view class="header">
			<view class="food-picture uni-thumb">
				<image :src="food.first_image" mode="aspectFill"></image>
			</view>
			<view>
				<text class="food-name">{{food.foodName}}</text>
				<view class="food-time">
					<image src="../../static/img/time.png" class="food-time-img"></image>
					<text>{{food.add_time}}</text>
				</view>
				<view class="food-address">
					<image src="../../static/img/address.png" class="food-address-img"></image>
					<text>{{food.address}}</text>
				</view>
				<view class="food-want-eated">
					<button type="primary" class="food-want" size="mini">想吃</button>
					<button type="primary" class="food-eated" size="mini">吃过</button>
				</view>
			</view>
			
		</view>
		<view class="score">
			<uni-card is-full="false" title="吃小猪评分" 
			thumbnail="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png" 
			:extra="food.vote_number" isShadow>
				<view class="score-text">
					<text >{{food.score}}</text>
					<uni-rate :value="getScore(food.score)" size="0.5" allowHalf readonly/>
				</view>
			</uni-card>
		</view>
		<view class="desc">
			<uni-card title="简介" 
			thumbnail="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
			 isShadow >
			   <text>{{food.desc}}</text>
			</uni-card>
		</view>
		<view class="food-photo">
			<uni-card title="图片"
			thumbnail="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
			 isShadow >
			 <view class="food-address-photo-ing">
				 <u-image height="200rpx" width="200rpx" src="https://hotschool.ltd/011e9c909d72429e9318d7455080f523"></u-image>
				 <u-image height="200rpx" width="200rpx" src="https://hotschool.ltd/011e9c909d72429e9318d7455080f523"></u-image>
				 <u-image height="200rpx" width="200rpx" src="https://hotschool.ltd/011e9c909d72429e9318d7455080f523"></u-image>
				 <u-image height="200rpx" width="200rpx" src="https://hotschool.ltd/011e9c909d72429e9318d7455080f523"></u-image>
				 <u-image height="200rpx" width="200rpx" src="https://hotschool.ltd/011e9c909d72429e9318d7455080f523"></u-image>
				 <u-image height="200rpx" width="200rpx" src="https://hotschool.ltd/011e9c909d72429e9318d7455080f523"></u-image>
			 </view>
			  
			</uni-card>
		</view>
	</view>
</template>

<script>
	import previewImage from '@/components/kxj-previewImage/kxj-previewImage.vue';
	export default {
		data() {
			return {
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
						"https://tse1-mm.cn.bing.net/th/id/R-C.bcffaa09e50785c20b2e04699c5937a7?rik=k8gIWLKXu1eoaw&riu=http%3a%2f%2ffile2.zhituad.com%2fthumb%2f201201%2f13%2f201201130300339473kNpfJ_priv.jpg&ehk=%2bX8g%2b%2f6sv9R2WnMImY2mueHfjqqFTgq6rq%2fv8rtPAjw%3d&risl=&pid=ImgRaw&r=0",
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
			}
		},
		components:{
			previewImage
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
			height: 112px;
			width: 94px;
		}
		.food-name{
			font-size: 38rpx;
		}
		.food-address {
			width: 500rpx;
			.food-address-img {
				height: 23rpx;
				width: 26rpx;
			}
			margin-top: 5rpx;
			color: #696a6c;
			font-size: 5rpx;
		}
		.food-time {
			.food-time-img {
				margin-right: 5rpx;
				height: 23rpx;
				width: 26rpx;
			}
			margin-top: 10rpx;
			color: #696a6c;
			font-size: 18rpx;
		}
		
		.food-want-eated{
			margin-top: 20rpx;
			.food-want {
				background-color: #FFFFFF;
				font-size: 10rpx;
				color: #F7CC5B;
				height: 60rpx;
				width: 120rpx;
				margin-right: 30rpx;
			}
			.food-eated{
				background-color: #FFFFFF;
				color: #F7CC5B;
				font-size: 10rpx;
				height: 60rpx;
				width: 120rpx;
			}
		}
	}
	.score {
		font-size: 25rpx;
		margin-left: -30rpx;
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
	
</style>
