<template>
	<view>
		<view class="top">
			<u-navbar :is-back="true" :border-bottom="false" 
			:back-text-style="navCustomStyle"
			back-icon-color="#000000"
			back-text="发讨论" >
				<view class="top-wrap">
					<view class="btn">
						<view class="btn-ok">
							<u-button :ripple="true"
								type="primary"
								:custom-style="customStyle1"
								ripple-bg-color="rgba(0,0,0,0.2)"
								>确定
							</u-button>
						</view>
					</view>
				</view>
			</u-navbar>
		</view>
		<view class="body">
			<view class="title">
				<u-input v-model="foodName" type="text"
				:clearable="false" placeholder="标题" height="80" 
				maxlength="20"
				:custom-style="titleCustomStyle"
				placeholder-style="font-size: 30rpx;color:#c8c5ca"/>
			</view>
			<view class="line-in">
				<u-line color="#e0dde3" length="690rpx"/>
			</view>
			<view class="editor">
				<jinEdit placeholder="内容" @editOk="editOk"
				uploadFileUrl="/#"
				:showImgResize="true"
				></jinEdit> 
			</view>
		</view>
	</view>
</template>

<script>
	import jinEdit from 'components/jin-edit/jin-edit.vue';
	export default {
		data() {
			return {
				customStyle1: {
					borderColor: '#f3eff6',
					backgroundColor:'#1a56b4',
					height:'120rpx',
					width: '120rpx',
					height: '50rpx',
				},
			};
		},
		components:{
			jinEdit,
		}
	}
</script>

<style lang="scss" scoped>
.top-wrap {
	width: 100%;
	.btn {
		display: flex;
		justify-content: flex-end;
		margin-right: 20rpx;
		.btn-ok {
			border-radius: 20rpx;
		}
	}
}
.body{
	padding-left: 30rpx;
	.editor{
		margin-top: 20rpx;
		margin-left: -35rpx;
	}
}
</style>
