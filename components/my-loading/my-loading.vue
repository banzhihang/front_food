<template>
	<view>
		<view class="parent">
			<our-loading isFullScreen :active="active" text=" " background-color="#FFFFFF">
				<image class="img" src="../../static/gif/loading.gif" mode="aspectFit" />
			</our-loading>
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-loading",
		props: {
			active: {
				type: Boolean,
				default: false
			},
		},
	}
</script>

<style lang="scss" scoped>
.parent {
    width: 100vw;
    height: 100vh;
    position: relative;
    .img {
        max-width: 30vw;
        height: 150rpx;
    }
}
</style>
