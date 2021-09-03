<template>
	<view class="box">
		<view class="btn">
			<u-button type="warning">确定</u-button>
		</view>
		<view class="rate-text">
			<text>{{rateText}}</text>
		</view>
		<view class="rate">
			<u-rate size='70' active-color='#EC9F3A' inactive-color='#d7d5da' 
			gutter='15' min-count='1' v-model='rateNum' @change="rateChange"></u-rate>
		</view>
		<view class="short-comment" >
			<textarea placeholder="说说你吃过之后的感受吧..." style="height: 800rpx;color: #e4e4e4;" 
			placeholder-style="font-size: 30rpx;" :adjust-position="false"
			:disable-default-padding="true"></textarea>
		</view>
	</view>
</template>

<script>
	export default {
		name:"short-comment-rate",
		data() {
			return {
				rateText:'点击星星评分',
				rateNum:0
			};
		},
		methods: {
			rateChange(value){
				switch(value){
					case 1:
						this.rateText = '很差'
						break
					case 2:
						this.rateText = '较差'
						break
					case 3:
						this.rateText = '还行'
						break
					case 4:
						this.rateText = '推荐'
						break
					case 5:
						this.rateText = '力荐'
						break
				}
				this.rateNum = value
			}
		}
	}
</script>

<style lang="scss" scoped>
.box{
	position: relative;
	.btn {
		position: absolute;
		top:23rpx;
		right: 40rpx;
		width: 100rpx;
		height: 100rpx;
	}
	.rate {
		position: absolute;
		top:250rpx;
		right: 470rpx;
		width: 100rpx;
	}
	.rate-text {
		position: absolute;
		top:200rpx;
		right: 20rpx;
		width: 750rpx;
		text-align: center;
		color: #c4c6cb;
		font-size: 25rpx;
		padding-left: 55rpx;
	}
	.short-comment {
		color: #000000;
		padding: 20rpx;
		display: inline-block;
		left: 25rpx;
		border-style: solid;
		border-width: 1px;
		border-color: #f0f4ff;
		position: absolute;
		top:400rpx;
		width: 700rpx;
		
	}
}
</style>
