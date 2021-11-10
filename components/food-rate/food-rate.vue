<template>
	<view>
		<view class="score-body">
			<view class="score-text">
				<text >{{foodRate.score}}</text>
				<uni-rate :value="getScore(foodRate.score)" size="17" allowHalf readonly color="#d7d5da" activeColor="#EC9F3A"/>
			</view> 
			<view class="score-rate">
				<uni-rate value="0" size="13" max="5" allowHalf readonly color="#d7d5da"/>
				<uni-rate value="0" size="13" max="4" allowHalf readonly color="#d7d5da"/>				
				<uni-rate value="0" size="13" max="3" allowHalf readonly color="#d7d5da"/>				
				<uni-rate value="0" size="13" max="2" allowHalf readonly color="#d7d5da"/>				
				<uni-rate value="0" size="13" max="1" allowHalf readonly color="#d7d5da"/>					
			</view>
			<view class="score-progress">
				<view style="height: 28rpx;">
					<u-line-progress active-color="#EC9F3A" :percent="foodRate.rate[0]" :show-percent="false" height="6"
						class="progress" ></u-line-progress>
				</view>
				<view style="height: 25rpx;">
					<u-line-progress active-color="#EC9F3A" :percent="foodRate.rate[1]" :show-percent="false" height="6"
						class="progress" ></u-line-progress>
				</view>
				<view style="height: 28rpx;">
					<u-line-progress active-color="#EC9F3A" :percent="foodRate.rate[2]" :show-percent="false" height="6"
						class="progress" ></u-line-progress>
				</view>
				<view style="height: 25rpx;">
					<u-line-progress active-color="#EC9F3A" :percent="foodRate.rate[3]" :show-percent="false" height="6"
						class="progress" ></u-line-progress>
				</view>
				<view style="height: 28rpx;">
					<u-line-progress active-color="#EC9F3A" :percent="foodRate.rate[4]" :show-percent="false" height="6"
						class="progress" ></u-line-progress>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['foodRate'],
		name:"food-rate",
		options: { styleIsolation: 'shared' },
		data(){
			return {
				
			}
		},
		methods:{
			getScore(score) {
				if (score !== -1) {
					return (score/2).toFixed(1)
				}else {
					return 'zaneu'
				}
			},
		},
	}
</script>

<style style lang='scss' scoped>	
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
		::v-deep .uni-rate {
			justify-content: flex-end !important;
		 }
	}
	.score-progress {
		margin-top: -17rpx;
		margin-left: 20rpx;
		width: 200rpx;
		
	}
}
</style>
