<template>
	<view class="box">
		<view class="photo-num">
			<text>全部照片({{photoNum}}张)</text>
		</view>
		<view class="photo-box"> 
			<view v-for="(item,index) in photoInfoList" :key="item.id" class="photoInfo uni-thumb">
				<u-lazy-load :image="item.url" img-mode="aspectFill" height="245rpx" @click="prePhoto(index)"></u-lazy-load>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['foodId'],
		name:"photo-list",
		data() {
			return {
				photoInfoList:[
					{
						url:"https://hotschool.ltd/1.jpg",
						id:1
					},
					{
						url:"https://hotschool.ltd/1.jpg",
						id:2
					},
					{
						url:"https://tse1-mm.cn.bing.net/th/id/R-C.f6ab0fcf3cbdb45dd653420d7dd058aa?rik=pqWDMH4fmaZIQw&riu=http%3a%2f%2ffile06.16sucai.com%2f2016%2f0520%2fa87bedcd667ded2e2db7414453e1da17.jpg&ehk=fWetYKOGewWrlX0vYneo7movooJRaV6UrURSTXbK84Y%3d&risl=&pid=ImgRaw&r=0",
						id:3
					},
					{
						url:"https://tse1-mm.cn.bing.net/th/id/R-C.f6ab0fcf3cbdb45dd653420d7dd058aa?rik=pqWDMH4fmaZIQw&riu=http%3a%2f%2ffile06.16sucai.com%2f2016%2f0520%2fa87bedcd667ded2e2db7414453e1da17.jpg&ehk=fWetYKOGewWrlX0vYneo7movooJRaV6UrURSTXbK84Y%3d&risl=&pid=ImgRaw&r=0",
						id:4
					},
					{
						url:"https://hotschool.ltd/1.jpg",
						id:5
					},
					{
						url:"https://tse1-mm.cn.bing.net/th/id/R-C.f6ab0fcf3cbdb45dd653420d7dd058aa?rik=pqWDMH4fmaZIQw&riu=http%3a%2f%2ffile06.16sucai.com%2f2016%2f0520%2fa87bedcd667ded2e2db7414453e1da17.jpg&ehk=fWetYKOGewWrlX0vYneo7movooJRaV6UrURSTXbK84Y%3d&risl=&pid=ImgRaw&r=0",
						id:6
					},
					{
						url:"https://hotschool.ltd/1.jpg",
						id:1
					},
					{
						url:"https://hotschool.ltd/1.jpg",
						id:2
					},
					{
						url:"https://tse1-mm.cn.bing.net/th/id/R-C.f6ab0fcf3cbdb45dd653420d7dd058aa?rik=pqWDMH4fmaZIQw&riu=http%3a%2f%2ffile06.16sucai.com%2f2016%2f0520%2fa87bedcd667ded2e2db7414453e1da17.jpg&ehk=fWetYKOGewWrlX0vYneo7movooJRaV6UrURSTXbK84Y%3d&risl=&pid=ImgRaw&r=0",
						id:3
					},
					{
						url:"https://tse1-mm.cn.bing.net/th/id/R-C.f6ab0fcf3cbdb45dd653420d7dd058aa?rik=pqWDMH4fmaZIQw&riu=http%3a%2f%2ffile06.16sucai.com%2f2016%2f0520%2fa87bedcd667ded2e2db7414453e1da17.jpg&ehk=fWetYKOGewWrlX0vYneo7movooJRaV6UrURSTXbK84Y%3d&risl=&pid=ImgRaw&r=0",
						id:4
					},
					{
						url:"https://hotschool.ltd/1.jpg",
						id:5
					},
					{
						url:"https://tse1-mm.cn.bing.net/th/id/R-C.f6ab0fcf3cbdb45dd653420d7dd058aa?rik=pqWDMH4fmaZIQw&riu=http%3a%2f%2ffile06.16sucai.com%2f2016%2f0520%2fa87bedcd667ded2e2db7414453e1da17.jpg&ehk=fWetYKOGewWrlX0vYneo7movooJRaV6UrURSTXbK84Y%3d&risl=&pid=ImgRaw&r=0",
						id:6
					},
					{
						url:"https://hotschool.ltd/1.jpg",
						id:1
					},
					{
						url:"https://hotschool.ltd/1.jpg",
						id:2
					},
					{
						url:"https://tse1-mm.cn.bing.net/th/id/R-C.f6ab0fcf3cbdb45dd653420d7dd058aa?rik=pqWDMH4fmaZIQw&riu=http%3a%2f%2ffile06.16sucai.com%2f2016%2f0520%2fa87bedcd667ded2e2db7414453e1da17.jpg&ehk=fWetYKOGewWrlX0vYneo7movooJRaV6UrURSTXbK84Y%3d&risl=&pid=ImgRaw&r=0",
						id:3
					},
					{
						url:"https://tse1-mm.cn.bing.net/th/id/R-C.f6ab0fcf3cbdb45dd653420d7dd058aa?rik=pqWDMH4fmaZIQw&riu=http%3a%2f%2ffile06.16sucai.com%2f2016%2f0520%2fa87bedcd667ded2e2db7414453e1da17.jpg&ehk=fWetYKOGewWrlX0vYneo7movooJRaV6UrURSTXbK84Y%3d&risl=&pid=ImgRaw&r=0",
						id:4
					},
					{
						url:"https://hotschool.ltd/1.jpg",
						id:5
					},
					{
						url:"https://tse1-mm.cn.bing.net/th/id/R-C.f6ab0fcf3cbdb45dd653420d7dd058aa?rik=pqWDMH4fmaZIQw&riu=http%3a%2f%2ffile06.16sucai.com%2f2016%2f0520%2fa87bedcd667ded2e2db7414453e1da17.jpg&ehk=fWetYKOGewWrlX0vYneo7movooJRaV6UrURSTXbK84Y%3d&risl=&pid=ImgRaw&r=0",
						id:6
					},
					{
						url:"https://hotschool.ltd/1.jpg",
						id:1
					},
					{
						url:"https://hotschool.ltd/1.jpg",
						id:2
					},
					{
						url:"https://tse1-mm.cn.bing.net/th/id/R-C.f6ab0fcf3cbdb45dd653420d7dd058aa?rik=pqWDMH4fmaZIQw&riu=http%3a%2f%2ffile06.16sucai.com%2f2016%2f0520%2fa87bedcd667ded2e2db7414453e1da17.jpg&ehk=fWetYKOGewWrlX0vYneo7movooJRaV6UrURSTXbK84Y%3d&risl=&pid=ImgRaw&r=0",
						id:3
					},
					{
						url:"https://tse1-mm.cn.bing.net/th/id/R-C.f6ab0fcf3cbdb45dd653420d7dd058aa?rik=pqWDMH4fmaZIQw&riu=http%3a%2f%2ffile06.16sucai.com%2f2016%2f0520%2fa87bedcd667ded2e2db7414453e1da17.jpg&ehk=fWetYKOGewWrlX0vYneo7movooJRaV6UrURSTXbK84Y%3d&risl=&pid=ImgRaw&r=0",
						id:4
					},
					{
						url:"https://hotschool.ltd/1.jpg",
						id:5
					},
					{
						url:"https://tse1-mm.cn.bing.net/th/id/R-C.f6ab0fcf3cbdb45dd653420d7dd058aa?rik=pqWDMH4fmaZIQw&riu=http%3a%2f%2ffile06.16sucai.com%2f2016%2f0520%2fa87bedcd667ded2e2db7414453e1da17.jpg&ehk=fWetYKOGewWrlX0vYneo7movooJRaV6UrURSTXbK84Y%3d&risl=&pid=ImgRaw&r=0",
						id:6
					},
					{
						url:"https://hotschool.ltd/1.jpg",
						id:1
					},
					{
						url:"https://hotschool.ltd/1.jpg",
						id:2
					},
					{
						url:"https://tse1-mm.cn.bing.net/th/id/R-C.f6ab0fcf3cbdb45dd653420d7dd058aa?rik=pqWDMH4fmaZIQw&riu=http%3a%2f%2ffile06.16sucai.com%2f2016%2f0520%2fa87bedcd667ded2e2db7414453e1da17.jpg&ehk=fWetYKOGewWrlX0vYneo7movooJRaV6UrURSTXbK84Y%3d&risl=&pid=ImgRaw&r=0",
						id:3
					},
					{
						url:"https://tse1-mm.cn.bing.net/th/id/R-C.f6ab0fcf3cbdb45dd653420d7dd058aa?rik=pqWDMH4fmaZIQw&riu=http%3a%2f%2ffile06.16sucai.com%2f2016%2f0520%2fa87bedcd667ded2e2db7414453e1da17.jpg&ehk=fWetYKOGewWrlX0vYneo7movooJRaV6UrURSTXbK84Y%3d&risl=&pid=ImgRaw&r=0",
						id:4
					},
					{
						url:"https://hotschool.ltd/1.jpg",
						id:5
					},
					{
						url:"https://tse1-mm.cn.bing.net/th/id/R-C.f6ab0fcf3cbdb45dd653420d7dd058aa?rik=pqWDMH4fmaZIQw&riu=http%3a%2f%2ffile06.16sucai.com%2f2016%2f0520%2fa87bedcd667ded2e2db7414453e1da17.jpg&ehk=fWetYKOGewWrlX0vYneo7movooJRaV6UrURSTXbK84Y%3d&risl=&pid=ImgRaw&r=0",
						id:6
					},
				],
				photoNum:3,
				photoUrlList:[]
			}
		},
		methods:{
			prePhoto(index) {
				if (this.photoUrlList.length === 0){
					this.photoInfoList.forEach((element) =>{
						this.photoUrlList.push(element.url)
					})
				}
				uni.previewImage({
					urls:this.photoUrlList,
					current:this.photoUrlList[index],
					indicator:"number"
				})
			}
		},
		
	}
</script>

<style lang="scss" scoped>
.box {
	position: relative;
	.photo-num {
		position: absolute;
		left: 60rpx;
		top:29rpx
	}
	.photo-box {
		position: absolute;
		top:100rpx;
		display: flex;
		flex-wrap: wrap;
		.photoInfo {
			box-sizing: border-box;
			width: 250rpx;
			border: 0.5rpx solid #FFFFFF;
		}
	}
}

</style>
