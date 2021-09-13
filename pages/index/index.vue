<template>
	<view class="content">
		<view>
			<u-navbar back-text="" title="" :is-back="false">
				<view class="slot-wrap">
					<view>
						<u-search shape="round"></u-search>
					</view>
					<view>
						
					</view>
				</view>
			</u-navbar>
		</view>
		<view>
			<food-list :foodsInfo="foods"></food-list>
		</view>
	</view>
</template>

<script>
	import foodList from '../../components/food-list/food-list.vue'
	export default {
		data() {
			return {
				foods:[
					{
						"id":18,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
						"distance":"1.5km",
					},
					{
						"id":17,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
						"distance":"1.5km",
						
					},
					{
						"id":16,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
						"distance":"1.5km",
						
					},
					{
						"id":15,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
						"distance":"1.5km",
						
					},
					{
						"id":14,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
						"distance":"1.5km",
						
					},
					{
						"id":13,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
						"distance":"1.5km",
						
					},
					{
						"id":112,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
						"distance":"1.5km",
						
					},
					{
						"id":111,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
						
						
					},
					{
						"id":12,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
						"distance":"1.5km",
						
					},
					{
						"id":11,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
						"distance":"1.5km",
						
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
			}
		}
	}
</script>

<style lang='scss' scoped>
@import '../../common/uni-ui.scss';
.slot-wrap {
		display: flex;
		align-items: center;
		/* 如果您想让slot内容占满整个导航栏的宽度 */
		/* flex: 1; */
		/* 如果您想让slot内容与导航栏左右有空隙 */
		/* padding: 0 30rpx; */
	}
</style>
