<template>
	<div class="kuang">
		<input type="text" placeholder="搜索工厂好货">
		<i class="iconfont icon-sousuo"></i>
		<br/>
		<span>实力&nbsp;&nbsp;认证&nbsp;&nbsp;放心&nbsp;&nbsp;保障</span>
	</div>
</template>

<script>
</script>

<style>
	.kuang{
		width: 100%;
		height: 55px;
		margin-top: 49px;
		background-color: lightblue;
		position: relative;
	}
	input{
		border: none;
		outline: none;
		border-radius: 10px;
		height: 25px;
		width: 90%;
		margin-left: 16px;
		padding-left: 125px;
		box-sizing: border-box;
		margin-bottom: 4px;
	}
	.icon-sousuo{
		color: #CCCCCC;
		position: absolute;
		top: 0;
		left:117px;
		top: 5px;
	}
	input::-webkit-input-placeholder{
			color: #CCCCCC;
	}
	span{
		color: white;
		margin-left: 92px;
	}
</style>
