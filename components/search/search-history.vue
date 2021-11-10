<template>
	<view>
		<view class="top" v-if="searchHistoryList.length !== 0 ">
			<view>
				<text style="color: #616162;font-size: 27rpx;">历史搜索</text>
			</view>
			<view @click="clean">
				<u-icon name="trash" color="#616162" size="30"></u-icon>
			</view>
		</view>
		<view class="search-item">
			<view v-for="(item,index) in searchHistoryList" :key="index">
				<view class="key-item" @click="clickKeyword(item)">{{item}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "search-history",
		data() {
			return {
				searchHistoryList: [],
			};
		},
		methods: {
			addKey(key) {
				let vaildKey = key.replace(/\s+/g, "");
				if (vaildKey === "") {
					return
				}

				let index = this.searchHistoryList.indexOf(vaildKey)
				if (index === -1) {
					this.searchHistoryList.unshift(vaildKey)
				} else {
					this.searchHistoryList.splice(index, 1)
					this.searchHistoryList.unshift(vaildKey)

				}
				uni.setStorage({
					key: 'searchHistoryList',
					data: this.searchHistoryList,
				});
			},
			clean() {
				this.searchHistoryList = []
				uni.setStorage({
					key: 'searchHistoryList',
					data: this.searchHistoryList
				});
			},
			clickKeyword(key) {
				this.$emit("clickkey", key)
			}
		},
		created() {
			let data = uni.getStorageSync('searchHistoryList')
			if (!data) {
				this.searchHistoryList = []
			} else {
				this.searchHistoryList = data
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		display: flex;
		margin-left: 30rpx;
		margin-right: 30rpx;
		margin-top: 50rpx;
		justify-content: space-between;
	}

	.search-item {
		margin-top: 20rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;

		.key-item {
			background-color: #EFF3F2;
			border-radius: 30rpx;
			margin: 10rpx 10rpx 10rpx 10rpx;
			padding: 10rpx 20rpx 10rpx 20rpx;
			font-size: 27rpx;
			color: #616162;
		}
	}
</style>
