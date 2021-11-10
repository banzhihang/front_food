<template>
	<view class="box">
		<view class="photo-num">
			<text>全部照片({{num}}张)</text>
		</view>
		<view class="photo-box"> 
			<view v-for="(item,index) in photoInfoList" :key="index" class="photoInfo uni-thumb">
				<u-lazy-load :image="item" img-mode="aspectFill" height="245rpx" @click="prePhoto(index)"></u-lazy-load>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['link','num'],
		name:"photo-list",
		data() {
			return {
				photoInfoList:[],
				// 需要改变的数组
				photoUrlList:[]
			}
		},
		methods:{
			prePhoto(index) {
				if (this.photoUrlList.length === 0){
					this.photoInfoList.forEach((element) =>{
						this.photoUrlList.push(element)
					})
				}
				uni.previewImage({
					urls:this.photoUrlList,
					current:this.photoUrlList[index],
					indicator:"number"
				})
			},
			async getAllPhoto(link){
				const {data:res} = await this.$http.get(link,{
					"baseURL":""
				})
				if (res.code !== "3"){
					this.photoInfoList = res.data.photo
				} else {
					uni.showToast({
						title:"暂无照片",
						icon:"none"
					})
				}
				
			}
		},
		onReady() {
			this.getAllPhoto(this.link)
		}
	}
</script>

<style lang="scss" scoped>
.box {
	position: relative;
	.photo-num {
		font-size: 30rpx;
		position: absolute;
		color: #757576;;
		left: 80rpx;
		top:25rpx
	}
	.photo-box {
		position: absolute;
		top:100rpx;
		display: flex;
		flex-wrap: wrap;
		.photoInfo {
			box-sizing: border-box;
			width: 250rpx;
			border: 0.5rpx solid #FFFFFF;
		}
	}
}

</style>
