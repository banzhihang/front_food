<template>
	<view class="box-x" @click="chooseLocation">
		<u-toast ref="uToast" />
		<view>
			<u-icon name="map" size="40" color="#1a5abf"></u-icon>
		</view>
		<view class="location-name">
			<text>{{getLocationShowName(locationName)}}</text>
			<u-icon name="arrow-down" size="20" color="#1a5abf" style="margin-left: 2rpx;"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			locationStr:{
				type:String
			}
		},
		name:"locationUi",
		data() {
			return {
				locationName:"惠水",
				needGetNameFromBackend:true
			}
		},
		methods: {
			getLocationShowName(name) {
				if (name.length > 8) {
					return name.slice(0,8) + "..."
				}else {
					return name
				}
			},
			// 获取用户当前的定位地点
			getUserLocation(){
				const that = this
				uni.authorize({
						scope: 'scope.userLocation',
						success() {
							uni.getLocation({
								success: async function (r){
									that.location = r.latitude.toString() + "," + r.longitude.toString()
									that.getLocationName()
								},
								fail:async function() {
									that.getLocationName()
									console.log("获取定位失败失败")
								}
							})
						},
						fail(){
							that.$refs.uToast.show({
								title: '获取位置信息失败',
								type: 'fail',
							})
						}
						
					}
				)
			},
			async getLocationName() {
				const url = "/location"
				const {data:res} = await this.$http.get(url,{ params:{
						"location":this.locationStr
					}
				})
				this.locationName = res.data.address_name
			},
			
			// 用户选择当前定位
			chooseLocation(){
				const that = this
				uni.authorize({
					scope: 'scope.userLocation',
					success(res) {
						uni.chooseLocation({
							success: function (res) {
								console.log(res)
								 if (res.name) {
									 that.needGetNameFromBackend = false
									 that.locationName = res.name
								 } else {
									 that.needGetNameFromBackend = true
									 that.locationName = "."
								 }
								 
								 that.$emit("chooseLocation",res)
							 }
						});
					},
					fail(err) {
						that.$refs.uToast.show({
							title: '获取位置信息失败',
							type: 'fail',
						})
					}
				})
			}
		},
		watch:{
			locationStr:{
				immediate: true,
				handler:function(newVal,oldVal){
					if (newVal === ""){
						return
					}
					if (this.needGetNameFromBackend) {
						this.getLocationName()
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.box-x{
	width: 100%;
	display: flex;
	align-items: center;
	.location-name {
		font-size: 32rpx;
		margin-bottom: 7rpx;
		display: flex;
		align-items: center;
	}
}
</style>
