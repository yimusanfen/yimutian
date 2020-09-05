<template>
	<div class="zt">
		<div><img :src="im"></div>
		<div class="tit">{{ti | titsub}}</div>
		<div class="price">{{pr | prsub}}</div>
	</div>
</template>

<script>
	export default{
		name:"slsjitembotitem",
		props:["im","ti","pr"],
		filters:{
			titsub(val){
				return val.substr(0,12)+"..."
			},
			prsub(s){
				return "￥"+s
			}
		}
	}
</script>

<style scoped>
	.zt{
		width: 30%;
		float: left;
		border: 1px solid #E9E9E9;
		border-radius: 5px;
		margin-left: 6px;
	}
	img{
		width: 100%;
		border-radius: 5px;
	}
	.tit{
		font-size: 10px;
	}
	.price{
		color: red;
	}
</style>
