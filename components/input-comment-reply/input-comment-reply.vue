<template>
	<view>
		<u-mask :show="showMask" @click="blurInput" v-if="showMask" :custom-style="{background: 'rgba(0, 0, 0, 0.1)'}"></u-mask>
		<view class="box-x" @tap.stop>
			<view class="btn1" >
				<view v-if="showStatus">
					<text>正在{{kindIn}}:&nbsp;&nbsp;&nbsp;{{targetUserNameIn}}</text>
				</view>
				
				<textarea placeholder-style="font-size: 32rpx;color: #afaeb0;" 
				:placeholder="content"
				maxlength="200"
				ref="textare"
				cursor-spacing="15"
				@click="clickInput"
				@blur="blurInput"
				:show-confirm-bar="false"
				:adjust-position="false"
				style="height: 40rpx;font-size: 32rpx;color: #000000;margin-top: 7rpx;width: 100%;background-color: #EFF3F2;"
				:auto-height="true"
				:disable-default-padding="true"
				:fixed="true"
				:focus="focus"
				v-model="inputValue"
				/>
				
			</view>
			<view class="btn2" @click="throwData">
				<text :style="{color:(inputValue ? '#2B63F3' : '#B9D0F9')}">确定</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			content:{
				type: String,
				default: "评论千万条，友善第一条"
			},
			kind:{
				type:String,
				default:"回复"
			},
			targetUserName:{
				type:String,
				default:""
			},
			
			targetUserId:{
				type:Number,
				default:-1
			},
			// 讨论id 或者评论id
		
		},
		name:"input-comment-reply",
		data() {
			return {
				customStyle:{
					fontSize:"32rpx"
				},
				inputValue:"",
				showStatus:false,
				initUserId:-1,
				initUserName:"",
				initKind:this.kind,
				focus:false,
				targetUserIdIn:-1,
				targetUserNameIn:"",
				kindIn:this.kind,
				// 是否显示遮罩层
				showMask:false,
				extra:null
			};
		},
		methods:{
			// 点击输入框
			clickInput(){
				this.showMask = true
				this.showStatus = true
				this.focus = true
			},
			blurInput(){
				// 注意此此处必须先this.focus = false 否则下次键盘无法弹出
				this.focus = false
				this.showMask = false
				
				if (this.inputValue === ""){
					this.recoveryInit()
					this.showStatus = false
				}
				
			},
			editStart(kind,targetUserName,targetUserId,extra) {
				this.kindIn = kind
				this.targetUserIdIn = targetUserId
				this.targetUserNameIn = targetUserName
				this.extra = extra
				this.focus = true
				this.clickInput()
			},
			
			// 抛出数据给上一层处理
			throwData(){
				let data = {
					"targetUserId":this.targetUserIdIn,
					"targetUserName":this.targetUserNameIn,
					"kind":this.kindIn,
					"content":this.inputValue,
					"extra":this.extra
				}
				this.$emit("throwData",data)
			},
			// 恢复状态
			editEnd(){
				this.inputValue = ""
				this.focus = false
				this.recoveryInit()
				this.showStatus = false
				
			},
			
			// 恢复状态到初始状态
			recoveryInit(){
				this.targetUserIdIn = this.initUserId
				this.targetUserNameIn = this.initUserName
				this.kindIn = this.initKind
			}
		},
		watch:{
			targetUserId(newval,oldval){
				this.targetUserIdIn = newval
				this.initUserId = newval
			},
			targetUserName(newval,oldval){
				this.targetUserNameIn = newval
				this.initUserName = newval
			},
			kind(newval,oldval){
				this.kindIn = newval
			}
		}
	}
</script>

<style lang="scss" scoped>
.box-x {
	z-index: 10079;
	width: 100%;
	position: relative;
	display: flex;
	box-sizing: border-box;
	padding-bottom: 28rpx;
	background-color: #FFFFFF;
	border-top:thin solid #eeeeef;;
	.btn1 {
		margin-left: 30rpx;
		color: #bab9bc;
		position: relative;
		top: 15rpx;
		left: 0;
		width: 75%;
		background-color:#EFF3F2 ;
		border-radius: 30rpx;
		padding-left: 30rpx;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-right: 20rpx;
	}
	.btn2{
		flex: 1;
		font-size: 30rpx;
		position: relative;
		bottom: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 30rpx;
		background-color: #FFFFFF;
	}
}
</style>
