<template>
	<div class="item">
		<div class="top">
			<div class="t1"><img :src="lo"></div>
			<div class="t2">{{g}}</div>
			<div class="t3" @click="fun()">
				<span>进店</span>
				<i class="iconfont icon-arrow-right"></i>
			</div>
		</div>
		<div class="bottom">
			<Slsjbotitem v-for="(v,i) in arr" :im="v.img" :ti="v.title" :pr="v.price" :key="i"></Slsjbotitem>
		</div>
	</div>
</template>

<script>
	import Slsjbotitem from './slsjitembotitem.vue'
	export default{
		name:"slisjitem",
		props:["lo","g"],
		components:{
			Slsjbotitem
		},
		methods:{
			fun(){
				this.$router.push("/shouyexq")
			}
		},
		data(){
			return {
				arr:[
					{
						img:"./images/mangguogan.jpg",
						title:"红薯粉条酸辣粉纯手工水晶地瓜山芋番薯鸭血粉丝牛肉汤火锅店",
						price:2.60
					},
					{
						img:"./images/mangguogan.jpg",
						title:"红薯粉条酸辣粉纯手工水晶地瓜山芋番薯鸭血粉丝牛肉汤火锅店",
						price:2.60
					},
					{
						img:"./images/mangguogan.jpg",
						title:"红薯粉条酸辣粉纯手工水晶地瓜山芋番薯鸭血粉丝牛肉汤火锅店",
						price:2.60
					}
				]
			}
		}
	}
</script>

<style scoped>
	.item{
		width: 93%;
		background-color: white;
		margin: 10px auto;
		height: 220px;
		border-radius: 5px;
	}
	img{
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	.top{
		height: 70px;
		background-color: #ADD8E6;
		border-radius: 5px;
	}
	.t1{
		float: left;
		margin-top: 10px;
		margin-left: 10px;
	}
	.t2{
		float: left;
		color: white;
		font-size: 14px;
		margin-left: 10px;
		margin-top: 10px;
	}
	.t3{
		float: left;
		background-color: white;
		margin-top: 33px;
		margin-left: 25px;
		width: 55px;
		height: 20px;
		text-align: center;
		line-height: 20px;
		color: blue;
		font-size: 13px;
		border-radius: 15px;
	}
	.t3 span{
		color: #000000;
		margin-left: 0px;
		color: blue;
	}
	.iconfont{
		font-size: 13px;
	}
</style>
