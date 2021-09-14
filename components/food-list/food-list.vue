<template>
	<view class="wrap">
		<view class="food-info" v-for="food in foodsInfo" :key="food.id">
			<view class="left-wrap" @click="jumpFoodDetails(food)">
				<view class="left">
					<view class="food-picture uni-thumb">
						<image :src="food.first_image" mode="aspectFill"></image>
					</view>
				</view>
				<view class="middle">
					<view class="middle-title">
						<text style="color:#3b3b3c;">{{ food.name }}</text>
					</view>
					<view class="middle-rate">
						<uni-rate :value="getScore(food.score)" size="12" allowHalf readonly activeColor="#EC9F3A"/>
						<view class="score-text" style="color:#E69F3D ;">{{food.score}}</view>
					</view>
					<view class="middle-distance">
						<u-icon name="map" class="food-address-img" color="#6c7071" size="25"></u-icon>
						<text style="color:#6c7071;">{{food.distance}}</text>
					</view>
					<view class="middle-desc">
						<text style="color:#6c7071;">{{getDesc(food.desc)}}</text>
					</view>
				</view>
			</view>
			<view class="right">
				<view>
					<u-icon name="http://hotschool.ltd/collection.png" size=40></u-icon>
					<view style="margin-left: -5rpx;">想吃</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['foodsInfo'],
		name:"food-list",
		methods:{
			navigator (id) {
				this.$emit('foodsItemClick',id)
			},
			getScore(score) {
				if (score !== null) {
					return (score/2).toFixed(1)
				}else {	
					return 'zaneu'
				}
			},
			getDesc(desc) {
				if (desc.length > 30){
					return desc.substr(0,30) +"..."
				}
				return desc
			},
			jumpFoodDetails(id) {
				uni.navigateTo({
					url: "../index/food-details?id=" + id,
					animationDuration:700,
				})
			},
		}
	}
</script>

<style lang='scss' scoped>
@import '../../common/uni-ui.scss';
.food-info {
	font-size: 33rpx;
	margin: 10rpx 40rpx 0 40rpx;
	display: flex;
	justify-content: space-between;
	.right {
		margin-top: 20rpx;
		font-size: 25rpx;
		color:#ee9000 ;
	}
	.left-wrap {
		margin-bottom: 30rpx;
		display: flex;
		.middle-desc {
			font-size: 25rpx;
			padding-top: 0;
			width: 400rpx;
		}
		
		.food-picture {
			margin-top: 1rpx;
			height: 95px;
			width: 80px;
		}
		.middle-distance{
			font-size: 25rpx;
			margin-bottom: 5rpx;
			.food-address {
				color: #EC9F3A;
				font-size: 25rpx;
				width: 500rpx;
			}
		}
		.middle-rate {
			margin-top: -2px;
			display: flex;
			align-items: center;
			.score-text {
				margin-left: 10rpx;
				font-size: 25rpx;
				margin-top: 3rpx;
				margin-bottom: 3rpx;
			}
		}
	}
}
	
</style>
