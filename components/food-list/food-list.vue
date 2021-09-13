<template>
	<view class="wrap">
		<view class="header">
			
		</view>
		<view class="food-info" v-for="food in foodsInfo" :key="food.id">
			<view class="left">
				<view class="food-picture uni-thumb">
					<image :src="food.first_image" mode="aspectFill"></image>
				</view>
			</view>
			<view class="middle">
				<view class="middle-title">
					<text>{{ food.name }}</text>
				</view>
				<view class="middle-rate">
					<uni-rate :value="getScore(food.score)" size="12" allowHalf readonly activeColor="#EC9F3A"/>
					<view class="score-text">{{food.score}}</view>
				</view>
				<view class="middle-distance">
					<text>{{food.distance}}</text>
				</view>
				<view class="middle-desc">
					<text>{{food.desc}}</text>
				</view>
			</view>
			<view class="right">
				<view>
					<u-icon></u-icon>
					<view>想吃</view>
				</view>
			</view>
		</view>
		<view class="bottom">
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
			}
		}
	}
</script>

<style lang='scss' scoped>
@import '../../common/uni-ui.scss';
.food-info {
	margin: 10rpx 40rpx 0 40rpx;
	display: flex;
	justify-content: space-between;
	.middle-desc {
		font-size: 18rpx;
		line-height: 50rpx;
		padding-bottom: 15rpx;
		padding-top: 10rpx;
	}
	
	.food-picture {
		height: 70px;
		width: 60px;
	}
	
	.want-eat {
		
		height: 30px;
		width: 60px;
		font-size: 5px;
		.want-eat-btn {
			position: absolute;
			right: 0;
			top: 20;
			background-color: #F7CC5B;
		}
	}
	.middle-rate {
		margin-top: 5px;
		display: flex;
		align-items: center;
		.score-text {
			margin-left: 10rpx;
			font-size: 20rpx;
			color:"#EC9F3A" ;
		}
	}
}
	
</style>
