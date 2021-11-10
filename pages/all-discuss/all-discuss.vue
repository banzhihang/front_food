<template>
	<view class="box">
		<my-loading :active="showLoading" v-if="showLoading"></my-loading>
		<view class="header" v-if="!showLoading && !showEmpty">
			<view class="header-wrap">
				<text>全部讨论({{discuss_num}})</text>
				<view class="slider">
					<uni-segmented-control
							:values="selectList" @clickItem="onClickItem" 
							styleType="button" 
							activeColor="#1d65d8">
					</uni-segmented-control>
				</view>
			</view>
			<view class="header-empty">
			</view>
		</view>
		
		<view class="body" v-if="!showLoading && !showEmpty">
			<discuss :dissCussList="discuss_list"></discuss>
		</view>
		<view class="write" @click="jumpToDiscussPush" v-if="!showLoading && !showEmpty">
			<u-image width="80rpx" height="80rpx" src="https://hotschool.ltd/write.png"></u-image>
		</view>
		<u-loadmore :status="status" is-dot v-show="isShowLoad" :load-text="loadText"/>
		<u-empty text="数据为空" mode="data" v-if="showEmpty"></u-empty>
	</view>
</template>

<script>
	import disCuss from 'components/discuss/discuss.vue';
	import disCussEdit from 'components/edit-discuss/edit-discuss.vue';
	export default {
		name:"all-discuss",
		options: { styleIsolation: 'shared' },
		data() {
			return {
				loadText:{
					loadmore: '加载更多',
					loading: '',
					nomore: ''
				},
				baseUrl:"",
				status:"loadmore",
				showLoading:true,
				isShowLoad:true,
				showEmpty:false,
				isShowDisscussEdit:false,
				selectList:[
					"热门",
					"最新",
				],
				discuss_num:30,
				discuss_list:[],
				food:-1,
			};
		},
		components:{
			disCuss,
			disCussEdit,
		},
		methods:{
			jumpToDiscussPush(){
				let data = {
					food:this.food
				}
				let item = encodeURIComponent(JSON.stringify(data))
				uni.navigateTo({
					url: "/pages/discuss-push/discuss-push?item="+item,
					animationDuration:700,
					animationType: 'slide-in-bottom',
				})
			},
			async getAllDiscuss(link){
				const {data:res} = await this.$http.get(link,{
					"baseURL":""
				})
				if (res.code !== "3"){
					this.discuss_list = res.data.results
					this.nextUrl = res.data.next
					if (this.nextUrl !== null) {
						this.isShowLoad = false
					} else {
						this.isShowLoad = true
						this.status = "nomore"
					}
					this.showLoading = false
				}else {
					this.showEmpty = true
					this.isShowLoad = false
					this.showLoading = false
				}
			},
			async getNext() {
				this.status = "loading"
				this.isShowLoad = true
				const {data:res} = await this.$http.get(this.nextUrl,{
					"baseURL":""
				})
				
				this.discuss_list = [...this.discuss_list,...res.data.results]
				this.nextUrl = res.data.next
				if (this.nextUrl !== null) {
					this.isShowLoad = false
				} else {
					this.isShowLoad = true
					this.status = "nomore"
				}
			},
			onClickItem(index){
				if (this.showEmpty !== false) {
					return
				}
				let link = ""
				if (index.currentIndex === 0){
					link = this.baseUrl
				}else {
					let tmp = this.baseUrl
					link = tmp.replace("sort=0","sort=1")
				}
				this.getAllDiscuss(link)
			}
		},
		onLoad(options) {
			let data = JSON.parse(decodeURIComponent(options.item))
			this.discuss_num = data.num
			this.baseUrl = data.link
			this.food = data.food
			this.getAllDiscuss(data.link)
			
		},
		onReachBottom() {
			if (this.nextUrl === null){
				return
			} 
			this.getNext()
		}
	}
</script>

<style lang="scss" scoped>
@import '../../common/uni-ui.scss';
.box {
	.header {
		position: relative;
		background-color: "#FFFFFF";
		.header-empty {
			width: 100%;
			height: 90rpx;
			background-color: #FFFFFF;
		}
		.header-wrap{
			z-index: 10;
			position: fixed;
			width: 100%;
			height: 90rpx;
			background-color: #FFFFFF;
			display: flex;
			justify-content: space-between;
			text{
				margin-top: 15rpx;
				margin-left: 30rpx;
				font-size: 30rpx;
			}
			.slider{
				padding-top: 10rpx;
				margin-right: 50rpx;
				width: 200rpx;
				/deep/ .segmented-control__text {
					font-size: 25rpx;
				}
				/deep/ .segmented-control {
					height: 50rpx;
				}
			}
		}
	}
	
	
	.body {
		width: 700rpx;
		margin-left: 30rpx;
		
	}
	.write {
		width: 80rpx;
		height: 80rpx;
		position: fixed;
		bottom: 150rpx;
		right: 30rpx;
		z-index: 1000;
	}
	
	::v-deep .u-icon__icon {
		left:-25rpx;
	}
}
</style>
