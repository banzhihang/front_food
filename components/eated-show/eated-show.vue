<template>
		<view class="box">
			<view class="rate-time">
				<text>{{rateInfo.add_time}}</text>
			</view>
			<view class="rate">
				<u-rate size='70' active-color='#EC9F3A' inactive-color='#b4b7c1'  :disabled="true"
				gutter='15' min-count='1' v-model='rateInfo.score'></u-rate>
			</view>
			<view class="short-comment" >
				<u-input type="textarea"
				:custom-style="customStyle"
				:disabled="true" :clearable="false" :auto-height="true" placeholder="你没有对该美食进行短评哦~"
				maxlength='10000' :border="true" height="250" border-color="#e9ecf0" v-model="rateInfo.content"/>
			</view>
		</view>
	
</template>

<script>
	export default {
		props: ['link'],
		name:"eated-show",
		data() {
			return {
				customStyle:{
					fontSize:"32rpx"
				},
				rateInfo:{}
			};
		},
		methods:{
			async getRateInfo(link){
				const {data:res} = await this.$http.get(link,{
					"baseURL":""
				})
				if (res.code !== "3"){
					this.rateInfo = res.data
				} else {
					uni.showToast({
						title:"暂无数据",
						icon:"error"
					})
				}
				
			}
		},
		onReady() {
			console.log(111,this.link)
			this.getRateInfo(this.link)
		}
	}
</script>

<style lang="scss" scoped>
.box{
	position: relative;
	.rate {
		position: absolute;
		top:250rpx;
		right: 480rpx;
		width: 100rpx;
	}
	.rate-time {
		position: absolute;
		top:200rpx;
		right: 20rpx;
		width: 750rpx;
		text-align: center;
		color: #b4b7c1;
		font-size: 25rpx;
		padding-left: 55rpx;
	}
	.short-comment {
		color: #000000;
		display: inline-block;
		left: 50rpx;
		position: absolute;
		top:400rpx;
		width: 650rpx;
		color:#bfbac2 ;
	}
}
</style>
