<template>
	<view class="content">
		<view>
			<food-list :foods="foods"></food-list>
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
						"id":1,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
					},
					{
						"id":1,
						"name":"狗屎肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.bcffaa09e50785c20b2e04699c5937a7?rik=k8gIWLKXu1eoaw&riu=http%3a%2f%2ffile2.zhituad.com%2fthumb%2f201201%2f13%2f201201130300339473kNpfJ_priv.jpg&ehk=%2bX8g%2b%2f6sv9R2WnMImY2mueHfjqqFTgq6rq%2fv8rtPAjw%3d&risl=&pid=ImgRaw&r=0",
						"score":3.2,
						"desc":"这个超级你能吃！"
					},
					{
						"id":1,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
					},
					{
						"id":1,
						"name":"狗屎肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.bcffaa09e50785c20b2e04699c5937a7?rik=k8gIWLKXu1eoaw&riu=http%3a%2f%2ffile2.zhituad.com%2fthumb%2f201201%2f13%2f201201130300339473kNpfJ_priv.jpg&ehk=%2bX8g%2b%2f6sv9R2WnMImY2mueHfjqqFTgq6rq%2fv8rtPAjw%3d&risl=&pid=ImgRaw&r=0",
						"score":3.2,
						"desc":"这个超级你能吃！"
					},
					{
						"id":1,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
					},
					{
						"id":1,
						"name":"狗屎肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.bcffaa09e50785c20b2e04699c5937a7?rik=k8gIWLKXu1eoaw&riu=http%3a%2f%2ffile2.zhituad.com%2fthumb%2f201201%2f13%2f201201130300339473kNpfJ_priv.jpg&ehk=%2bX8g%2b%2f6sv9R2WnMImY2mueHfjqqFTgq6rq%2fv8rtPAjw%3d&risl=&pid=ImgRaw&r=0",
						"score":3.2,
						"desc":"这个超级你能吃！"
					},
					{
						"id":1,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
					},
					{
						"id":1,
						"name":"狗屎肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.bcffaa09e50785c20b2e04699c5937a7?rik=k8gIWLKXu1eoaw&riu=http%3a%2f%2ffile2.zhituad.com%2fthumb%2f201201%2f13%2f201201130300339473kNpfJ_priv.jpg&ehk=%2bX8g%2b%2f6sv9R2WnMImY2mueHfjqqFTgq6rq%2fv8rtPAjw%3d&risl=&pid=ImgRaw&r=0",
						"score":3.2,
						"desc":"这个超级你能吃！"
					},
					{
						"id":1,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个真的不错哦ggbvghvh hb vh ！",
						"score":8.2,
					},
					{
						"id":1,
						"name":"狗屎肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.bcffaa09e50785c20b2e04699c5937a7?rik=k8gIWLKXu1eoaw&riu=http%3a%2f%2ffile2.zhituad.com%2fthumb%2f201201%2f13%2f201201130300339473kNpfJ_priv.jpg&ehk=%2bX8g%2b%2f6sv9R2WnMImY2mueHfjqqFTgq6rq%2fv8rtPAjw%3d&risl=&pid=ImgRaw&r=0",
						"score":3.2,
						"desc":"这个超级你能吃！"
					},
				],
				nextUrl:"",
			}
		},
		components:{"food-list":foodList},
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

<style>
	
</style>
