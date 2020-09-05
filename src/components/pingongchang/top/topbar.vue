<template>
	<div class="top">
		<i class="iconfont icon-flow"></i>
		<span>一起拼工厂</span>
		<i class="iconfont icon-59fenxiang"></i>
	</div>
</template>

<script>
	export default{
		name:"topbar"
	}
</script>

<style scoped>
	.top{
		width: 100%;
		height: 49px;
		background-color: lightblue;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
	.iconfont{
		font-size: 16px;
		color: white;
		line-height: 49px;
	}
	.icon-flow{
		margin-left: 8px;
	}
	.icon-59fenxiang{
		margin-left: 80px;
	}
	span{
		color: white;
		line-height: 49px;
		font-weight: bolder;
		font-size: 20px;
		margin-left: 88px;
	}
</style>
