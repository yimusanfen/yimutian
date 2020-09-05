<template>
	<div class="item">
		<img :src="img">
		<div class="wz">{{title}}</div>
	</div>
</template>

<script>
	export default{
		name:"navbaritem",
		props:["img","title"]
	}
</script>

<style scoped>
	img{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin-top: 13px;
		margin-left: 10px;
	}
	.item{
		float: left;
	}
	.wz{
		margin-left: 16px;
		font-size: 10px;
		margin-top: 5px;
	}
</style>
