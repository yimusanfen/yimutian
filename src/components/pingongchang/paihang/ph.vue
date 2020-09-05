<template>
	<div class="ph">
		<div class="xl">销量排行榜</div>
		<Phitem v-for="(v,i) in arr1" :tupian="v.img" :biaoti="v.title" :shuliang="v.num" :key="i"
		:xing="v.lei"></Phitem>
	</div>
</template>

<script>
	import Phitem from './phitem.vue'
	export default{
		name:"ph",
		components:{
			Phitem
		},
		data(){
			return {
				arr1:[
					{
						img:"./images/paihang/dazao.jpg",
						title:"【限量清仓】源头直销香甜未洗新疆灰枣带土整箱26斤",
						num:3.99,
						lei:"斤"
					},
					{
						img:"./images/paihang/fenjiu.jpg",
						title:"山西杏花村纯高粱清香型汾酒原浆64度，2.5升全国包邮",
						num:90.00,
						lei:"件"
					},
					{
						img:"./images/paihang/haiyadan.jpg",
						title:"海鸭蛋北部湾红树林五香海鸭红心流油熟海鸭咸蛋批",
						num:1.20,
						lei:"个"
					},
					{
						img:"./images/paihang/feiliao.jpg",
						title:"耕田育苗基质 老百姓放心的肥料 30斤一袋",
						num:8.50,
						lei:"件"
					},
					{
						img:"./images/paihang/dapeng.jpg",
						title:"养猪大棚 养鸡鸭牛羊鹅5-20米宽 包塑管 包工包料",
						num:50.00,
						lei:"平方米"
					},
					{
						img:"./images/paihang/chouzhi.jpg",
						title:"家庭餐厅抽纸厂家面向全球招代理电商专供",
						num:1.10,
						lei:"件"
					}
				]
			}
		}
	}
</script>

<style scoped>
	.ph{
		width: 100%;
		height: 365px;
	}
	.xl{
		width: 80px;
		height: 50px;
		line-height: 50px;
		color: mediumpurple;	
		margin: 0 auto;
		font-weight: bolder;
	}
	.ph>div:nth-of-type(2){
		margin-left: 6px;
	}
	.ph>div:nth-of-type(5){
		margin-left: 6px;
	}
</style>
