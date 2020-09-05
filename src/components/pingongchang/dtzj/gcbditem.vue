<template>
	<div class="item">
		<div class="left">
			<img :src="im">
		</div>
		<div class="right">
			<div class="r1">{{ti}}</div>
			<div class="r2">
				<div class="r21">{{by}}</div>
				<div class="r22">{{bz}}</div>
			</div>
			<div class="r3">
				<div class="r31">{{dm}}</div>
				<div class="r32">{{cj}}</div>
			</div>
			<div class="r4">
				<div class="r41">{{nu | nutj}}</div>
				<div class="r42">立马抢</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"gcbditem",
		props:["im","ti","by","bz","dm","cj","nu"],
		filters:{
			nutj(val){
				return "￥"+val
			}
		}
	}
</script>

<style scoped>
	.item{
		width: 94%;
		height: 166px;
		background-color: white;
		margin-top: 10px;
		margin-left: 10px;
		border-radius: 5px;
	}
	.left{
		width: 118px;
		height: 146px;
		float: left;
		margin-top: 10px;
		margin-left: 10px;
	}
	img{
		width: 118px;
		height: 146px;
		border-radius: 5px;
	}
	.right{
		width: 160px;
		height: 150px;
		float: left;
		margin-top: 12px;
		margin-left: 10px;
	}
	.r1{
		font-size: 10px;
		margin-bottom: 4px;
	}
	.r2{
		font-size: 10px;
		color: red;
		width: 100%;
		height: 20px;
		margin-bottom: 5px;
	}
	.r21{
		float: left;
		height: 20px;
		background-color:#55A532;
		opacity: .3;
		font-weight: bolder;
		margin-right: 5px;
	}
	.r22{
		float: left;
		height: 20px;
		background-color:#55A532;
		opacity: .3;
		font-weight: bolder;
		margin-right: 5px;
	}
	.r3{
		font-size: 10px;
		color: gray;
		height: 35px;
	}
	.r31{
		height: 35px;
		float: left;
		margin-right: 2px;
	}
	.r32{
		height: 35px;
		float: left;
	}
	.r4{
		height: 46px;
	}
	.r41{
		float: left;
		height: 20px;
		width: 50px;
		margin-top: 5px;
		color: red;
		font-weight: bolder;
	}
	.r42{
		float: left;
		height: 30px;
		width: 70px;
		background-color: #FF0000;
		color: white;
		border-radius: 15px;
		text-align: center;
		line-height: 30px;
		margin-left: 34px;
	}
</style>
