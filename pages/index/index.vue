<template>
	<view class="content">
		<view class="top-select">
			<view class="top">
				<u-navbar :is-back="false" :border-bottom="false"  >
					<view class="search-wrap">
						<view @click="jumpFoodPush">
							<u-icon name="plus-circle" size="45" color="#1a5abf"></u-icon>
						</view>
						
						<u-search shape="round" v-model="keyword"
							bg-color="#F7F7F7"
							placeholder="请输入美食名" height="60"
							:show-action="false">
						</u-search>
					</view>
				</u-navbar>
			</view>
			<view class="search-select">
				<u-dropdown height="80" title-size="25" border-radius="10" ref="dropDown" 
				duration="400" active-color="#1a56b4">
					<u-dropdown-item  :title="distanceText" v-model="distanceValue">
						<view class="slot-content">
							<view class="distance-select">
								<view class="distance-select-btn" v-for="value,index in distance" :key="index">
									<u-button 
										size="mini"
										type="default"
										:plain="true"
										:hair-line="false"
										@click="changeSelectDistance(value)"
										:custom-style="customStyle">
										{{value.name}}
									</u-button>
								</view>
							</view>
						</view>
					</u-dropdown-item>
					<u-dropdown-item  :title="sortText" v-model="sortValue">
						<view class="slot-content">
							<view class="sort-select">
								<view class="sort-select-btn" v-for="value,index in sort" :key="index">
									<u-button 
										size="mini"
										type="default"
										:plain="true"
										:hair-line="false"
										@click="changeSelectSort(value)"
										:custom-style="customStyle">
										{{value.name}}
									</u-button>
								</view>
							</view>
						</view>
					</u-dropdown-item>
				</u-dropdown>
			</view>
			<view class="select-blank">
				
			</view>
		</view>
		<view class="middle">
			<food-list :foodsInfo="foods"></food-list>
		</view>
		<u-divider half-width="500" margin-bottom="200rpx">没有更多了</u-divider>
		<view>
			<image></image>
		</view>
	</view>
</template>

<script>
	import foodList from '../../components/food-list/food-list.vue'
	export default {
		data() {
			return {
				customStyle:{
					borderStyle:"none" ,
					backgroundColor: "#F6F6F6",
					fontSize:"25rpx",
					
				},
				keyword:"",
				distanceValue:0,
				distanceText:"附近",
				sortValue:0,
				sortText:"最高评分",
				distance:[
					{
						"name":"附近",
						"value":0
					},
					{
						"name":"< 1km",
						"value":1
					},
					{
						"name":"< 3km",
						"value":2
					},
					{
						"name":"< 5km",
						"value":3
					},
					{
						"name":"< 7km",
						"value":4
					},
				],
				sort:[
					{
						"name":"最高评分",
						"value":0
					},
					{
						"name":"最多评分",
						"value":1
					},
					{
						"name":"最新发布",
						"value":2
					},
				],
				foods:[
					{
						"id":18,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个不怎么辣，但徐爱您需不得不也不顶用成都必不得已你们顶焦度计顶焦度计姐姐斤斤计较你米你你你你",
						"score":8.2,
						"distance":"1.5km",
						"restaurant":"成都担担面",
					},
					{
						"id":17,
						"name":"青椒肉丝",
						"first_image":"https://img.zcool.cn/community/019f7e5c061a3da80121ab5dd1990e.jpg@1280w_1l_2o_100sh.jpg",
						"desc":"这个不怎么你辣，但徐爱您需不得不也不顶用成都必不得已你们顶焦度计顶焦度计姐姐斤斤计较你米你你你",
						"score":8.2,
						"distance":"1.5km",
						"restaurant":"成都担担面",
					},
					{
						"id":16,
						"name":"青椒肉丝",
						"first_image":"https://img.zcool.cn/community/018a4c56dfbcdb6ac72531cb07004c.jpg@1280w_1l_2o_100sh.jpg",
						"desc":"这个不怎么辣，但徐爱您需不得不也不顶用成都必不得已你们顶焦度计顶焦度计姐姐斤斤计较你米你你你",
						"score":8.2,
						"distance":"1.5km",
						"restaurant":"成都担担面",
					},
					{
						"id":15,
						"name":"青椒肉丝",
						"first_image":"https://img.zcool.cn/community/019f7e5c061a3da80121ab5dd1990e.jpg@1280w_1l_2o_100sh.jpg",
						"desc":"这个不怎么辣，但徐爱您需不得不也不顶用成都必不得已你们顶焦度计顶焦度计姐姐斤斤计较你米你你你",
						"score":8.2,
						"distance":"1.5km",
						"restaurant":"成都担担面",
					},
					{
						"id":14,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
						"distance":"1.5km",
						"restaurant":"成都担担面",
					},
					{
						"id":13,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
						"distance":"1.5km",
						"restaurant":"成都担担面",
					},
					{
						"id":112,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
						"distance":"1.5km",
						"restaurant":"成都担担面",
					},
					{
						"id":111,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
						"distance":"1.5km",
						"restaurant":"成都担担面",
					},
					{
						"id":12,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
						"distance":"1.5km",
						"restaurant":"成都担担面",
					},
					{
						"id":11,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
						"distance":"1.5km",
						"restaurant":"成都担担面",
					},
				],
				nextUrl:"",
			}
		},
		components:{
			foodList
		},
		methods:{
			async getFoodsList (){
				const {data:res} = await this.$myRuquest({url:"/eat/food_rank"})
				if (res.code !== 0) {
					return uni.showTabBar({
						"title":"请求数据失败"
					})
				}
				this.foods = res.data.results
				this.nextUrl = res.results.next
			},
			changeSelectDistance(obj){
				this.distanceText = obj.name
				this.distanceValue = obj.value
				this.$refs.dropDown.close()
			},
			changeSelectSort(obj){
				this.sortText = obj.name
				this.sortValue = obj.value
				this.$refs.dropDown.close()
			},
			jumpFoodPush(){
				uni.navigateTo({
					url: "/pages/food-push/food-push",
					animationDuration:700,
					animationType: 'slide-in-bottom',
				})
			}
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
			display: flex;
			justify-content: space-around;
			.distance-select-btn {
				margin: 20rpx 0rpx 20rpx 0rpx;
			}
		}
		.sort-select{
			background-color: #FFFFFF;
			display: flex;
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
		display: flex;
		padding: 0 30rpx;
		align-items: center;
		flex: 1;
		u-search{
			flex: 1;
		}
		view{
			margin-right: 25rpx;
			margin-left: 10rpx;
		}
	}
}

</style>
