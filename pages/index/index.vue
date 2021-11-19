<template>
	<view class="content">
		<view class="top-select">
			<view class="top">
				<u-navbar :is-back="false" :border-bottom="false"  >
					<view class="search-wrap">
						<view class="location">
							<locationUi :locationStr="location" @chooseLocation="changeLocation"></locationUi>
						</view>
						<view @click="jumpToSearch">
							<u-icon name="search" size="38" color="#1a5abf"></u-icon>
						</view>
						
					</view>
				</u-navbar>
			</view>
			<view class="search-select">
				<u-dropdown height="80" title-size="25" border-radius="10" ref="dropDown"
				duration="400" active-color="#1a56b4">
					<u-dropdown-item  :title="distanceText" v-model="distanceValue" :options="distance" @change="changeSelectDistance">
					</u-dropdown-item>
					<u-dropdown-item  :title="sortText" v-model="sortValue" :options="sort" @change="changeSelectSort">
					</u-dropdown-item>
				</u-dropdown>
			</view>
			<view class="select-blank">
				
			</view>
		</view>
		<!-- 下拉刷新 -->
		<mescroll-uni ref="mescrollRef" @down="firstSyncData" top=250 @up="getNext" 
		:up="upOption" :down="downOption" @init="init" >
			<view class="middle">
				<food-list :foodsInfo="foods" @wantEta="wantEatHandle"></food-list>
			</view>
			<u-empty text="附近没有美食,扩大一下筛选范围吧" mode="data" margin-top="100" v-show="showEmpty === true && showNoAuth===false"></u-empty>
			<u-empty text="授权之后下拉刷新" mode="data" margin-top="100" v-show="showNoAuth === true && showEmpty === false"></u-empty>
		</mescroll-uni>
		<!-- 右下角发布按钮 -->
		<view class="write" @click="jumpFoodPush" v-if="!showLoading">
			<u-image width="70rpx" height="70rpx" src="https://hotschool.ltd/add_food.png"></u-image>
		</view>
	</view>
</template>

<script>
	import foodList from '../../components/food-list/food-list.vue';
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	import locationUi from 'components/search/location.vue'
	import {
		wantEatUrl
	} from '@/util/api.js';
	import {
		encrypt
	} from '@/util/encrypt/encrypt.js'
	import {
		checkLogin
	} from '@/util/checkLogin.js'
	import {getLocationFail,getUserInfoFail} from '@/util/checkAuth.js'
	export default {
		mixins: [MescrollMixin],
		data() {
			return {
				upOption:{
					use: true,
					auto:false,
					page:{
						num : 0 ,
						size : 6 ,
						time : null
					},
					empty:{
						  use : true ,
						  icon : null ,
						  tip : "暂无相关数据",
						  btnText : "",
						  fixed: false,
						  top: "100rpx",
						  zIndex: 99
					}
				},
				downOption:{
					auto:true,
					autoShowLoading:true,
					offset:120,
					outOffsetRate:0.5
				},
				customStyle:{
					borderStyle:"none" ,
					backgroundColor: "#F6F6F6",
					fontSize:"25rpx",
					
				},
				keyword:"",
				distanceValue:"默认",
				distanceText:"默认",
				sortValue:"score",
				sortText:"最高评分",
				distance:[
					{
						label:"默认",
						value:"默认"
					},
					{
						label:"< 500m",
						value:"0.5km"
					},
					{
						label:"< 1km",
						value:"1km"
					},
					{
						label:"< 3km",
						value:"3km"
					},
					{
						label:"< 5km",
						value:"5km"
					},
					{
						label:"< 10km",
						value:"10km"
					},
				],
				sort:[
					{
						label:"最高评分",
						value:"score"
					},
					{
						label:"最多评分",
						value:"vote_number"
					},
					{
						label:"最新发布",
						value:"add_time"
					},
				],
				distanceDict:{
					"默认":"默认",
					"1km":"< 1km",
					"3km":"< 3km",
					"5km":"< 5km",
					"10km":"< 10km",
					"0.5km":"< 500m"
				},
				sortDict:{
					"score":"最高评分",
					"vote_number":"最多评分",
					"add_time":"最新发布",
				},
				foods:[],
				nextUrl:"",
				haveNext:false,
				// 用户当前的定位坐标
				location:"",
				showEmpty:false,
				showNoAuth:false,
			}
		},
		components:{
			foodList,
			locationUi,
		},
		methods:{
			init(mescroll) {
				this.mescroll = mescroll;
			},
			// 获得美食数据
			async getFoodData() {
				this.showNoAuth = false
				const sort = this.sortValue
				const distance = this.distanceValue
				const from_point = 0
				const size = 15
				
				const {data:res} = await this.$http.get("/search/filter",{ params:{
					"location":this.location,
					"sort":sort,
					"distance":distance,
					"from_point":from_point,
					"size":size
				}})
			
				this.foods = res.data.filter_res
				if (this.foods.length === 0){
					this.showEmptyUi()
				}else {
					this.showResultUi()
				}
				this.nextUrl = res.data.next
				this.haveNext = res.data.has_next
			},
			// 首次同步数据，下拉刷新同步数据
			firstSyncData() {
				const that = this
				if (that.location === ""){
					uni.authorize({
							scope: 'scope.userLocation',
							success(res) {
								uni.getLocation({
									success: async function (r){
										that.location = r.latitude.toString() + "," + r.longitude.toString()
										that.dumpUpStart()
									},
									fail:async function() {
										that.showNoAuth = true
										getLocationFail()
										that.mescroll.endErr();
									}
								})
							},
							fail: function(){
								getUserInfoFail()
								that.showNoAuth = true
								that.mescroll.endErr();
							}
						}
					)
				}else {
					that.dumpUpStart()
				}
			},
			async getNext(page) {
				const {data:res} = await this.$http.get(this.nextUrl,{
					"baseURL":""
				})
				
				this.foods = [...this.foods,...res.data.filter_res]
				this.nextUrl = res.data.next
				this.haveNext = res.data.has_next
				let curDataLen = res.data.filter_res.length
				this.mescroll.endSuccess(100,this.haveNext)
			},
			
			// 地理位置子组件触发的事件
			async changeLocation(locationInfo) {
				this.location = locationInfo.latitude.toString() + "," + locationInfo.longitude.toString()
				this.mescroll.triggerDownScroll()
			},
			// 下拉刷新
			async dumpUpStart(){
				await this.getFoodData()
				this.mescroll.endSuccess(100,this.haveNext)
			},
			changeSelectDistance(value){
				this.distanceText = this.distanceDict[value]
				this.dumpUpStart()
			},
			changeSelectSort(value){
				this.sortText = this.sortDict[value]
				this.dumpUpStart()
			},
			// 跳转到美食发布页面
			jumpFoodPush(){
				let data = {
					location:this.location
				}
				let item = encodeURIComponent(JSON.stringify(data))
				uni.navigateTo({
					url: "/pages/food-push/food-push?item="+item,
					animationDuration:700,
					animationType: 'slide-in-bottom',
				})
			},
			jumpToSearch(){
				let data = {
					location:this.location
				}
				let item = encodeURIComponent(JSON.stringify(data))
				uni.navigateTo({
					url: "/pages/index/search?item="+item,
					animationDuration:700,
					animationType: 'slide-in-bottom',
				})
			},
			showEmptyUi(){
				this.showEmpty = true
				this.mescroll.optUp.use = false
			},
			showResultUi(){
				this.showEmpty = false,
				this.mescroll.optUp.use = true
			},
			
			// 想吃
			wantEatHandle(index) {
				// 先检查用户是否登录
				const canContinue = checkLogin()
				if (!canContinue) {
					return
				}
				
				let obj = this.foods[index]
				let data = {
					"food": obj.id
				}
				this.subPostData(data, wantEatUrl,index)
			},
			
			// 真正发起数据请求
			async subPostData(data, push_url,index) {
				uni.showLoading({
					title: "标记中",
					mask: true
				})
				const url = push_url
				const enData = encrypt(data)
				const {
					data: res
				} = await this.$http.post(url, enData)
				uni.hideLoading()
				let that = this
				uni.showToast({
					title: "标记成功",
					success() {
						let obj = that.foods[index]
						obj.is_want_eated = 2
					}
				})
			
			},
		},
}
</script>

<style lang='scss' scoped>
@import '../../common/uni-ui.scss';
.top-select {
	position: relative;
	background-color: "#FFFFFF";
	.select-blank{
		height: 80rpx;
	}
	.search-select {
		position: fixed;
		z-index: 10;
		background-color: #FFFFFF;
		width: 100%;
		margin-bottom: 20rpx;
		.distance-select {
			background-color: #FFFFFF;
			/* display: flex; */
			justify-content: space-around;
			.distance-select-btn {
				margin: 20rpx 0rpx 20rpx 0rpx;
			}
		}
		.sort-select{
			background-color: #FFFFFF;
			/* display: flex; */
			flex-wrap: wrap;
			justify-content: space-around;
			.sort-select-btn {
				margin: 20rpx 0rpx 20rpx 0rpx;
			}
		}
	}
}
.top{
	.search-wrap {
		width: 100%;
		display: flex;
		padding: 0 30rpx 0 20rpx;
		align-items: center;
		justify-content: space-between;
		
	}
}

.write {
		width: 73rpx;
		height: 70rpx;
		position: fixed;
		bottom: 120rpx;
		right: 30rpx;
		background-color: #FFFFFF;
		z-index: 1000;
		border-radius: 50%;
	}

</style>
