<template>
	<view class="box">
		<my-loading :active="showLoading" v-if="showLoading"></my-loading>
		<view class="header"  v-if="!showLoading">
			<view class="header-wrap">
				<text>全部短评({{short_comment_num}})</text>
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
		<view class="body" v-if="!showLoading">
			<short-comment :shortCommentList="short_comment_list" @approval="approvalShortCommentHandle"></short-comment>
		</view>
		<u-loadmore :status="status" is-dot v-show="isShowLoad" :load-text="loadText"/>
		<u-empty text="数据为空" mode="data" v-if="showEmpty"></u-empty>
	</view>
</template>

<script>
	import shortComment from 'components/short-comment/short-comment.vue';
	export default {
		name:"all-short-comment",
		data() {
			return {
				loadText:{
					loadmore: '加载更多',
					loading: '',
					nomore: ''
				},
				baseUrl:"",
				showEmpty:false,
				showLoading:true,
				isShowLoad:false,
				status:"loadmore",
				short_comment_num:50,
				short_comment_list:[],
				nextUrl:null,
				selectList:[
					"热门",
					"最新",
				]
			};
		},
		components:{
			shortComment,
		},
		methods:{
			async getAllShortComment(link){
				
				const {data:res} = await this.$http.get(link,{
					"baseURL":""
				})
				if (res.code !== "3") {
					this.short_comment_list = res.data.results
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
				
				this.short_comment_list = [...this.short_comment_list,...res.data.results]
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
				this.getAllShortComment(link)
			},
			// 处理短评点赞事件
			approvalShortCommentHandle(data){
				let index = data.index
				let obj = this.short_comment_list[index]
				let kind = data.kind
				let approval_number = obj.approval_number
				if (kind == "add") {
					obj.is_approval = true
					obj.approval_number ++
				} else {
					obj.is_approval = false
					obj.approval_number --
				}
			},
		},
		onLoad(options) {
			let data = JSON.parse(decodeURIComponent(options.item))
			this.short_comment_num = data.num
			this.baseUrl = data.link
			this.getAllShortComment(data.link)
			
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
				margin-right: 40rpx;
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
		width: 695rpx;
		margin-left: 30rpx;
		padding-right: 20rpx;
	}
	
}

</style>
