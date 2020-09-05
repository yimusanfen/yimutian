<template>
	<div class="zt">
		<div class="zt1">
			<img src="/images/logo.png">
		</div>
		<div class="zt2">
			<div class="num">3227</div>
			<div class="xr">粉丝</div>
		</div>
		<div class="zt3">
			<div class="num">3.3万</div>
			<div class="xr">访客</div>
		</div>
		<div class="zt4">
			<div class="num">1120</div>
			<div class="xr">沟通</div>
		</div>
		<div class="zt5">
			<div class="num">156万元</div>
			<div class="xr">累计销售</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"tit"
	}
</script>

<style scoped>
	.zt{
		width: 100%;
		height: 50px;
		margin-top: 15px;
		
	}
	img{
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	.zt1{
		width: 50px;
		height: 50px;
		float: left;
		margin-left: 10px;
		margin-left: 10px;
	}
	.zt2{
		float: left;
		width: 50px;
		height: 50px;
		padding-top: 3px;
		margin-left: 25px;
	}
	.zt3{
		float: left;
		width: 50px;
		height: 50px;
	}
	.zt4{
		float: left;
		width: 50px;
		height: 50px;
		padding-top: 3px;
	}
	.zt5{
		float: left;
		width: 65px;
		height: 65px;
	}
	.num{
		font-weight: bolder;
	}
	.xr{
		color: #CCCCCC;
		font-size: 10px;
	}
</style>
