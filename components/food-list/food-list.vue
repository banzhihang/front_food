<template>
	<view class="wrap">
		<view class="food-info" v-for="food,index in foodsInfo" :key="food.id">
			<view class="left-wrap" @click="jumpFoodDetails(food.link)">
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
						<view class="score-text" style="color:#E69F3D ;" v-show="showScore(food.score)">{{food.score}}</view>
						<view class="score-text" style="color:#808080;font-size: 25rpx;" v-show="!showScore(food.score)">暂无评分</view>
					</view>
					<view class="middle-distance">
						<u-icon name="map" class="food-address-img" color="#6c7071" size="25"></u-icon>
						<text style="color:#6c7071;">{{food.distance}}</text>
						<text style="color:#6c7071;margin-left: 25rpx;font-size:">{{food.restaurant_name}}</text>
					</view>
					<view class="middle-desc">
						<text style="color:#6c7071;">{{getDesc(food.desc)}}</text>
					</view>
				</view>
			</view>
			<view class="right">
				<view v-if="food.is_want_eated === 0" @click="wantEat(index)">
					<u-icon name="http://hotschool.ltd/collection.png" size=40></u-icon>
					<view style="margin-left: -5rpx;color:#ee9000 ;">想吃</view>
				</view>
				<view v-if="food.is_want_eated === 2">
					<u-icon name="checkmark" size="39" color="#808080" style="margin-left: 10rpx;"></u-icon>
					<view style="margin-left: -5rpx;color:#808080;">已想吃</view>
				</view>
				<view v-if="food.is_want_eated === 1">
					<u-icon name="checkmark" size="39" color="#808080" style="margin-left: 10rpx;"></u-icon>
					<view style="margin-left: -5rpx;color:#808080;">已吃过</view>
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
			wantEat (index) {
				this.$emit('wantEta',index)
			},
			getScore(score) {
				if (score !== null) {
					return (score/2).toFixed(1)
				}else {	
					return -1
				}
			},
			showScore(score){
				if (score !== -1) {
					return true
				}else {	
					return false
				}
			},
			getDesc(desc) {
				if (desc.length > 30){
					return desc.substr(0,30) +"..."
				}
				return desc
			},
			jumpFoodDetails(link) {
				let data = {
					link:link
				}
				let item = encodeURIComponent(JSON.stringify(data))
				uni.navigateTo({
					url: "../index/food-details?data=" + item,
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
	margin: 10rpx 40rpx 30rpx 40rpx;
	display: flex;
	justify-content: space-between;
	.right {
		margin-top: 20rpx;
		font-size: 25rpx;
		
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
			margin-bottom: 7rpx;
			.food-address {
				color: #EC9F3A;
				font-size: 25rpx;
				width: 500rpx;
			}
		}
		.middle-rate {
			margin-top: -2px;
			margin-bottom: 5rpx;
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
