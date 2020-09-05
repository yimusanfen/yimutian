<template>
	<div class="item">
		<img :src="tupian">
		<div>{{biaoti | btsub}}</div>
		<div class="shuzi">{{shuliang | yjf}}{{xing | xg}}</div>
	</div>
</template>

<script>
	export default{
		name:"phitem",
		props:["tupian","biaoti","shuliang","xing"],
		filters:{
			btsub(val){
				return val.substr(0,14)+"..."
			},
			yjf(s){
				return "￥"+s
			},
			xg(x){
				return "/"+x
			}
		}
	}
</script>

<style scoped>
	img{
		width: 100px;
		height: 100px;
		border-radius: 5px;
	}
	.item{
		width: 31%;
		float: left;
		font-size: 10px;
		margin-right: 5px;
		margin-bottom: 5px;
		background-color: white;
		border-radius: 5px;
	}
	.shuzi{
		font-size: 10px;
		font-weight: bolder;
		color: #EE0A24;
	}
</style>
