<template>
	<view class="box">
		<view class="search-top">
			<view class="search-imput">
				<u-search shape="round" v-model="inputValue"
					bg-color="#EFF3F2"
					@click="jumpSearch"
					@search="searchStart"
					style="width: 100%;"
					placeholder="请输入美食名或餐厅名" height="70"
					:show-action="false">
				</u-search>
			</view>
			<view class="search-text">
				<text :style="{color:(inputValue ? '#1a5abf' : '#B9D0F9')}" @click=" searchStart">搜索</text>
			</view>
			<view class="search-line">
				<u-line color="#f4f4f5" :hair-line="false"/>
			</view>
		</view>
		<view v-show="showHistory===true && showResult === false && showEmpty === false && showLoading === false">
			<history ref="historyRef" @clickkey="clickKey"></history>
		</view>
		<mescroll-uni ref="mescrollRef" top=110 @up="getNext" :down="downOption"
			:up="upOption"  @init="init" v-show="showResult ===true && showEmpty===false&&showHistory===false&& showLoading === false">
				<view >
					<food-list :foodsInfo="foodList" @wantEta="wantEatHandle"></food-list>
				</view>
		</mescroll-uni>
		<u-empty text="没有相关内容" mode="data" margin-top="100"
		v-show="showEmpty===true && showHistory===false && showResult===false&& showLoading === false"></u-empty> 
		<view v-show="showEmpty===false && showHistory===false && showResult===false&& showLoading === true" class="load-ui">
			<u-loading mode="circle"
			:show="showEmpty===false && showHistory===false && showResult===false&& showLoading === true"></u-loading>
		</view>

	</view>
</template>

<script>
	import history from 'components/search/search-history.vue';
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	import foodList from '../../components/food-list/food-list.vue';
	import {
		encrypt
	} from '@/util/encrypt/encrypt.js'
	import {
		checkLogin
	} from '@/util/checkLogin.js'
	import {
		wantEatUrl
	} from '@/util/api.js';
	export default {
		data() {
			return {
				upOption:{
					use: true,
					auto:false,
					page:{
						num : 0 ,
						size : 6 ,
						time : null
					}
				},
				
				downOption:{
					use: false,
				},
				inputValue:"",
				foodList:[],
				showResult:false,
				showEmpty:false,
				showHistory:true,
				location:"",
				showLoading:false,
				nextUrl:"",
				haveNext:false
			};
		},
		components:{
			history,
			foodList
		},
		methods:{
			init(mescroll) {
				this.mescroll = mescroll;
			},
			searchStart(){
				let vaildKey = this.inputValue.replace(/\s+/g,"");
				if (vaildKey === ""){
					return
				}
				this.showLoadingUi()
				this.$refs.historyRef.addKey(vaildKey)
				this.searchData()
			},
			// 获得美食
			async getFoodData() {
				const sort = "score"
				const distance = "1000000km"
				const from_point = 0
				const size = 15
				const {data:res} = await this.$http.get("/search/keyword",{ params:{
					"location":this.location,
					"q":this.inputValue,
					"from_point":from_point,
					"size":size
				}})
				this.foodList = res.data.search_res
				if (this.foodList.length === 0){
					this.showEmptyUi()
				}else {
					this.showResultUi()
				}
				this.nextUrl = res.data.next
				this.haveNext = res.data.has_next
			},
			async searchData() {
				await this.getFoodData()
				this.mescroll.endSuccess(100,this.haveNext)
			},
			async getNext(page) {
				const {data:res} = await this.$http.get(this.nextUrl,{
					"baseURL":""
				})
				
				this.foodList = [...this.foodList,...res.data.search_res]
				this.nextUrl = res.data.next
				this.haveNext = res.data.has_next
				console.log(res.data.search_res.length)
				let curDataLen = res.data.search_res.length
				this.mescroll.endSuccess(100,this.haveNext)
			},
			showHistoryUi(){
				this.showHistory = true
				this.showEmpty = false
				this.showResult = false
				this.showLoading = false
			},
			showResultUi(){
				this.showHistory = false
				this.showEmpty = false
				this.showResult = true
				this.showLoading = false
			},
			showEmptyUi(){
				this.showHistory = false
				this.showEmpty = true
				this.showResult = false
				this.showLoading = false
			},
			showLoadingUi(){
				this.showHistory = false
				this.showEmpty = false
				this.showResult = false
				this.showLoading = true
			},
			clickKey(key) {
				this.inputValue = key
				this.searchStart()
			},
			// 想吃
			wantEatHandle(index) {
				// 先检查用户是否登录
				const canContinue = checkLogin()
				if (!canContinue) {
					return
				}
				
				let obj = this.foodList[index]
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
						let obj = that.foodList[index]
						obj.is_want_eated = 2
					}
				})
			
			},
		},
		watch:{
			inputValue(newVal,oldVal){
				let vaildKey = newVal.replace(/\s+/g,"");
				if (vaildKey === ""){
					this.showHistoryUi()
				}
			}
		},
		onLoad(options) {
			let data = JSON.parse(decodeURIComponent(options.item))
			this.location = data.location
		}
	}
</script>

<style lang="scss" scoped>
.box {
	.search-top{
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-left: 30rpx;
		margin-right: 30rpx;
		margin-top: 10rpx;
		.search-imput {
			flex:1;
			margin-right: 20rpx;
		}
		.search-line {
			width: 900rpx;
			position: absolute;
			bottom: -10rpx;
			margin-left: -100rpx;
		}
	}
	.load-ui {
		text-align: center;
		margin-top: 50rpx;
	}
	
}
</style>
