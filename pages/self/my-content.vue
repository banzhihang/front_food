<template>
	<view>
		<food-list :foodsInfo="foodDataList"></food-list>
	</view>
</template>

<script>
	import foodList from '../../components/food-list/food-list.vue'
	export default {
		data() {
			return {
				foodDataList:[
					{
						"id":18,
						"name":"青椒肉丝",
						"first_image":"https://tse1-mm.cn.bing.net/th/id/R-C.d24a44c17e185f0e1cc914af445140ba?rik=xrfhvAmLVuQWSA&riu=http%3a%2f%2fpic40.photophoto.cn%2f20160816%2f0042040257956376_b.jpg&ehk=2nbiodlGWhaSDo8CqK5FiZ1aNDv47p7ElifuLTtvUdk%3d&risl=&pid=ImgRaw&r=0",
						"desc":"这个不怎么辣，但徐爱您需不得不也不顶用成都必不得已你们顶焦度计顶焦度计姐姐斤斤计较你米你你你你",
						"score":8.2,
						"distance":"1.5km",
					},
					{
						"id":17,
						"name":"青椒肉丝",
						"first_image":"https://img.zcool.cn/community/019f7e5c061a3da80121ab5dd1990e.jpg@1280w_1l_2o_100sh.jpg",
						"desc":"这个不怎么你辣，但徐爱您需不得不也不顶用成都必不得已你们顶焦度计顶焦度计姐姐斤斤计较你米你你你",
						"score":8.2,
						"distance":"1.5km",
					},
					{
						"id":16,
						"name":"青椒肉丝",
						"first_image":"https://img.zcool.cn/community/018a4c56dfbcdb6ac72531cb07004c.jpg@1280w_1l_2o_100sh.jpg",
						"desc":"这个不怎么辣，但徐爱您需不得不也不顶用成都必不得已你们顶焦度计顶焦度计姐姐斤斤计较你米你你你",
						"score":8.2,
						"distance":"1.5km",
					},
					{
						"id":15,
						"name":"青椒肉丝",
						"first_image":"https://img.zcool.cn/community/019f7e5c061a3da80121ab5dd1990e.jpg@1280w_1l_2o_100sh.jpg",
						"desc":"这个不怎么辣，但徐爱您需不得不也不顶用成都必不得已你们顶焦度计顶焦度计姐姐斤斤计较你米你你你",
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
						"distance":"1.5km",
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
			};
		},
		onLoad: function(option){
			uni.setNavigationBarTitle({
				title:option.title
			})
		},
	}
</script>

<style lang="scss">

</style>
