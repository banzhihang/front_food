<template>
	<view class="food-list">
		<uni-list >
			<uni-list-item :title="food.name" :thumb="food.first_image" v-for="food in foods" :key="food.id" 
			to="../../pages/index/food-details">
			 <template v-slot:header>
				 <view class="uni-thumb food-picture">
				 	<image :src="food.first_image" mode="aspectFill"></image>
				 </view>
			 </template>
			 <template v-slot:body>
			 	<view class="middle">
					<view class="middle-title">
						<text>{{ food.name }}</text>
					</view>
					<view class="middle-rate">
						<uni-rate :value="getScore(food.score)" size="0.5" allowHalf readonly/>
						<text class="score-text">{{food.score}}</text>
					</view>
			 		<view class="middle-desc">
			 			<text>{{food.desc}}</text>
			 		</view>
			 	</view>
			 </template>
			 <template v-slot:footer>
				 <view class="want-eat">
					 <uni-tag text="想吃" type="warning" class="want-eat-btn" circle></uni-tag>
				 </view>
			 </template>
			 </uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		props: ['foods'],
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

<style lang="scss">
	@import '../../common/uni-ui.scss';
	.food-list {
		padding: 0 5rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.food-items {
			background: #fff;
			width: 355rpx;
			box-sizing: border-box;
		}
	}
	
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
		.score-text {
			margin-top: -6rpx;
			margin-left: 7rpx;
			font-size: 4rpx;
			color: #F7CC5B;
		}
	}
</style>
