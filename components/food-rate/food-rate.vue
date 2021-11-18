<template>
	<view>
		<view class="score-body">
			<view class="score-text">
				<text >{{foodRate.score}}</text>
				<uni-rate :value="getScore(foodRate.score)" size="17" allowHalf readonly color="#d7d5da" activeColor="#EC9F3A"/>
			</view> 
			<view class="start-progress">
				<view class="start-progress-in">
					<uni-rate value="0" size="10" max="5" allowHalf readonly color="#d7d5da" style="width: 25%;"/>
					<view class="progress">
						<u-line-progress active-color="#EC9F3A" :percent="foodRate.rate[4]" :show-percent="false" height="13"
							class="progress" ></u-line-progress>
					</view>
				</view>
				<view class="start-progress-in">
					<uni-rate value="0" size="10" max="4" allowHalf readonly color="#d7d5da" style="width: 25%;"/>
					<view class="progress">
						<u-line-progress active-color="#EC9F3A" :percent="foodRate.rate[3]" :show-percent="false" height="13"
							class="progress" ></u-line-progress>
					</view>
				</view>
				<view class="start-progress-in">
					<uni-rate value="0" size="10" max="3" allowHalf readonly color="#d7d5da" style="width: 25%;"/>
					<view class="progress">
						<u-line-progress active-color="#EC9F3A" :percent="foodRate.rate[2]" :show-percent="false" height="13"
							class="progress" ></u-line-progress>
					</view>
				</view>
				<view class="start-progress-in">
					<uni-rate value="0" size="10" max="2" allowHalf readonly color="#d7d5da" style="width: 25%;"/>
					<view class="progress">
						<u-line-progress active-color="#EC9F3A" :percent="foodRate.rate[1]" :show-percent="false" height="13"
							class="progress" ></u-line-progress>
					</view>
				</view>
				<view class="start-progress-in">
					<uni-rate value="0" size="10" max="1" allowHalf readonly color="#d7d5da" style="width: 25%;"/>
					<view class="progress">
						<u-line-progress active-color="#EC9F3A" :percent="foodRate.rate[0]" :show-percent="false" height="13"
							class="progress" ></u-line-progress>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getScore
	} from '@/util/getScore.js';
	export default {
		props: ['foodRate'],
		name:"food-rate",
		options: { styleIsolation: 'shared' },
		data(){
			return {
			}
		},
		methods:{
			getScore,
		},
	}
</script>

<style style lang='scss' scoped>	
.score-body {
	display: flex;
	margin-bottom: 30rpx;
	align-items: center;
	.score-text {
		text-align: center;
		font-size: 40rpx;
		margin-top: 10rpx;
		margin-left: 60rpx;
	}
	.start-progress {
		margin-top: 15rpx;
		flex: 1;
		::v-deep .uni-rate {
			justify-content: flex-end !important;
		 }
		.start-progress-in {
			display: flex;
			width: 100%;
			justify-content: center;
			.progress {
				margin-left: 7rpx;
				line-height: 35%;
				width: 60%;
				
			}
			
		}
	}
}
</style>
