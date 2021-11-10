<template>
	<view>
		<my-loading :active="showLoading" v-if="showLoading"></my-loading>
		<u-empty text="数据为空" mode="data" v-if="showEmpty" margin-top="100"></u-empty>
		<view v-if="!showLoading">
			<my-food :foodsInfo="foodDataList"></my-food>
		</view>
		<u-loadmore :status="status" is-dot v-show="isShowLoad" />
	</view>
</template>

<script>
	import myFoodList from 'components/my-food/my-food.vue';
	import myLoading from 'components/my-loading/my-loading.vue'

	export default {
		data() {
			return {
				showEmpty: false,
				showLoading: true,
				isShowLoad: false,
				status: "loadmore",
				foodDataList: [],
			};
		},
		components: {
			myFoodList,
			myLoading,
		},
		onLoad: function(option) {
			let data = JSON.parse(decodeURIComponent(option.item))
			uni.setNavigationBarTitle({
				title: data.title
			})
			if (data.link)
				this.firstSyncData(data.link)
		},
		onReachBottom() {
			if (this.nextUrl === null) {
				return
			}
			this.getNext()
		},
		methods: {
			async firstSyncData(pushlink) {
				const {
					data: res
				} = await this.$http.get(pushlink, {
					baseURL: ""
				})
				if (res.code !== "3") {
					this.foodDataList = res.data.results
					this.nextUrl = res.data.next

					if (this.nextUrl !== null) {
						this.isShowLoad = false
					} else {
						this.isShowLoad = true
						this.status = "nomore"
					}
					this.showLoading = false

				} else {
					this.showEmpty = true
					this.isShowLoad = false
					this.showLoading = false
				}
			},
			async getNext() {
				this.status = "loading"
				this.isShowLoad = true
				const {
					data: res
				} = await this.$http.get(this.nextUrl, {
					"baseURL": ""
				})

				this.foodDataList = [...this.foodDataList, ...res.data.results]
				this.nextUrl = res.data.next
				if (this.nextUrl !== null) {
					this.isShowLoad = false
				} else {
					this.isShowLoad = true
					this.status = "nomore"
				}
			},
		},
	}
</script>

<style lang="scss" scoped>

</style>
