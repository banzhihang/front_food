<template>
	<view>
		<view class="comment" v-for="res,index in commentList" :key="res.id">
			<view class="left"><image :src="res.user_head_portrait" mode="aspectFill"></image></view>
			<view class="right">
				<view class="top">
					<view class="name">{{ res.user_nick_name }}</view>
				</view>
				<view class="content" style="color: #454545;margin-bottom: 20rpx;">{{ res.content }}</view>
				<view class="bottom">
					<text style="color: #808080;">{{res.add_time}}</text>
					<view class="bottom-right">
						<view class="reply-icon" @click="replyThis({targetUser:res.user,targetUserName:res.user_nick_name,commentId:res.id,index:index})">
							<uni-icons type="chat" size="17" color="#737373"></uni-icons>
						</view>
						<view class="like-num" @click="approvalComment(index)">
							<u-icon 
							:name="res.is_approval ? 'thumb-up-fill' : 'thumb-up'" 
							class="like" size="35" 
							:color="res.is_approval ? '#1a56b4': '#808080'"></u-icon>
							<view class="num" 
							:style="{color:(res.is_approval ? '#1a56b4' : '#808080')}">{{ res.approval_number }}</view>
						</view>
					</view>
				</view>
				<view class="reply-box">
					<view>
						<discuss-reply :replyList="res.revert" @reply="replyChild" 
						:commentId="res.id" :commentIndex="index" ref="replyRef" @approval="approvalHandle"></discuss-reply>
					</view>
					<view class="all-reply"  v-if="res.revert_number >2">
						<u-button size="mini"
							type="default"
							:plain="true"
							:hair-line="false"
							shape="circle"
							:custom-style="customStyle"
							class="btn"
							@click="jumpReplyInfo(res)"
							>
								查看全部 {{ res.revert_number }} 条回复
							<u-icon class="more" name="arrow-right" size="20"></u-icon>
						</u-button>
					</view>
				</view>
				
			</view>
		</view>
		<u-loadmore :status="status" is-dot v-show="isShowLoad" :load-text="loadText"/>
		<u-empty text="暂无评论" v-if="showEmpty" margin-top="100"></u-empty>
		<view style="height: 100rpx;"></view>
	</view>
</template>

<script>
	import reply from '@/components/discuss-reply/discuss-reply.vue'
	import {
		approvalUrl,
	} from '@/util/api.js';
	import {
		encrypt
	} from '@/util/encrypt/encrypt.js'
	import {
		checkLogin
	} from '@/util/checkLogin.js'
	
	export default {
		props:["link"],
		name:"discuss-comment",
		components: {
			reply,
		},
		data() {
			return {
				loadText:{
					loadmore: '',
					loading: '',
					nomore: ''
				},
				status:"loading",
				isShowLoad:true,
				showEmpty:false,
				customStyle:{
					borderStyle:"none" ,
					backgroundColor: "#F6F6F6",
					fontSize:"25rpx",
					padding:"30rpx 40rpx 30rpx 40rpx",
				},
				hoverStyle:{
					backgroundColor:"#1a56b4",
					color:"1a56b4",
				},
				commentList:[],
				nextUrl:null
			};
		},
		methods:{
			// 处理子组件的回复事件，直接重新抛出
			replyChild(e){
				this.$emit('reply',e)
			},
			// 回复该层楼主
			replyThis(data) {
				const extra = {
					"commentId":data.commentId,
					"index":data.index
				}
				const edata = {
					kind:"回复",
					targetUserName:data.targetUserName,
					targetUserId:data.targetUser,
					extra:extra
				}
				this.$emit('reply',edata)
			},
			
			// 处理子组件的回复事件
			approvalHandle(data) {
				let kind = data.kind
				let revertIndex = data.revertIndex
				let index = data.index
				let obj = this.commentList[index].revert[revertIndex]
				let approval_number = obj.approval_number
				if (kind == "add") {
					obj.is_approval = true
					obj.approval_number ++
				} else {
					obj.is_approval = false
					obj.approval_number --
				}
			},
			jumpReplyInfo(res){
				const d = {
					"id": res.id,
					"user": res.user,
					"user_nick_name": res.user_nick_name,
					"user_head_portrait": res.user_head_portrait,
					"content": res.content,
					"is_approval": res.is_approval,
					"revert_number": res.revert_number,
					"approval_number": res.approval_number,
					"add_time": res.add_time,
					"is_author": res.is_author,
					"all_revert_link":res.all_revert_link,
					"approval_link":res.approval_link
				}
				
				uni.navigateTo({
					url: "../../pages/discuss-info/disscuss-reply-page/disscuss-reply-page?data=" + encodeURIComponent(JSON.stringify(d)),
					animationDuration:700,
				})
			},
			async getAllComment(link){
				const {data:res} = await this.$http.get(link,{
					"baseURL":""
				})
				if (res.code == "3"){
					this.showEmpty = true
				} else {
					this.commentList = res.data.results
					this.nextUrl = res.data.next
				}
				
				if (this.nextUrl !== null) {
					this.isShowLoad = false
				} else {
					if (this.showEmpty) {
						this.isShowLoad = false
					} else {
						this.isShowLoad = true
					}
					this.status = "nomore"
				}
			},
			async getNext() {
				this.status = "loading"
				this.isShowLoad = true
				const {data:res} = await this.$http.get(this.nextUrl,{
					"baseURL":""
				})
				
				this.commentList = [...this.commentList,...res.data.results]
				this.nextUrl = res.data.next
				if (this.nextUrl !== null) {
					this.isShowLoad = false
				} else {
					this.isShowLoad = true
					this.status = "nomore"
				}
			},
			// 下一页
			pullUp() {
				if (this.nextUrl === null){
					return
				} 
				this.getNext()
			},
			
			// 发布完评论向评论列表尾部插入新评论,只有评论到达底部才向评论列表底部插入新的评论
			insertComment(data){
				if (this.nextUrl === null) {
					this.showEmpty = false
					this.commentList.push(data)
					this.isShowLoad = true
				}
			},
			// 发布完回复向回复列表插入新回复，只有回复列表小于2才即时插入
			insertReply(data,extra){
				const index = extra.index
				let comment = this.commentList[index]
				comment.revert_number ++
				if (comment.revert.length < 2) {
					comment.revert.push(data)
				}
			},
			
			// 评论点赞
			async approvalComment(index) {
				// 先检查用户是否登录
				const canContinue = checkLogin()
				if (!canContinue) {
					return
				}
				
				uni.vibrateShort({})
				let obj = this.commentList[index]
				let data = {
					"comment":obj.id
				}
				
				const url = approvalUrl
				const enData = encrypt(data)
				const {
					data: res
				} = await this.$http.post(url, enData)
				
				if (res.code !== "0") {
					uni.showToast({
						title:"操作失败",
						icon:"error"
					})
				} else {
					this.alterApprovalStatus(index)
				}
			},
			
			// 点赞改变状态
			alterApprovalStatus(index){
				let obj = this.commentList[index]
				const is_approval = obj.is_approval
				this.commentList[index].is_approval = !is_approval
				if (is_approval) {
					this.commentList[index].approval_number --
				} else {
					this.commentList[index].approval_number ++
				}
			}
		},
		created() {
			this.getAllComment(this.link)
		},
		
}	
</script>

<style lang="scss" scoped>
.comment {
	display: flex;
	padding: 30rpx 15rpx 0rpx 10rpx;
	.left {
		image {
			width: 64rpx;
			height: 64rpx;
			border-radius: 50%;
			background-color: #f2f2f2;
		}
	}
	.right {
		flex: 1;
		padding-left: 20rpx;
		font-size: 27rpx;
		.top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 10rpx;
			.name {
				color: #0b0f1b;
				font-size: 30rpx;
			}
			.like {
				display: flex;
				align-items: center;
				color: #9a9a9a;
				font-size: 26rpx;
				.num {
					margin-right: 4rpx;
					color: #9a9a9a;
				}
			}
			.highlight {
				color: #5677fc;
				.num {
					color: #5677fc;
				}
			}
		}
		.content {
			margin-bottom: -10rpx;
			font-size: 30rpx;
		}
		.bottom {
			align-items: center;
			margin-bottom: 20rpx;
			justify-content: space-between;
			display: flex;
			text {
				font-size: 25rpx;
				color: #b3b4b6;
			}
			.bottom-right {
				margin-right: 20rpx;
				display: flex;
				.reply-icon {
					margin-top: 5rpx;
					margin-right: 40rpx;
				}
				.like-num{
					flex: 1;
					display: flex;
					align-items: center;
					color: #9a9a9a;
					font-size: 26rpx;
					.num {
						margin-right: 4rpx;
						margin-left: 10rpx;
						color: #9a9a9a;
					}
				}
			}
		}
		
		.reply-box {
			border-radius: 20rpx;
			.item {
				padding: 20rpx;
				border-bottom: solid 2rpx $u-border-color;
				.username {
					font-size: 24rpx;
					color: #999999;
				}
			}
			.all-reply {
				padding-left: 44rpx;
				margin-top: 20rpx;
				padding-bottom: 20rpx;
				.more {
					margin-left: 10rpx;
				}
			}
		}
		.bottom{
			margin-top: 20rpx;
		}
	}
}
</style>
