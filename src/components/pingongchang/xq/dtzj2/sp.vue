<template>
	<div>
		<div class="cx">正在促销</div>
		<div class="sp" @click="fun()">
			<div class="l1">
				<img src="/images/mangguogan.jpg">
			</div>
			<div class="l2">
				<div class="tt1">红薯粉条产地直销 绿色A级品质 量大从优 农家手工粉丝</div>
				<div class="pc">￥139.00</div>
			</div>
		</div>
		
		<Zong></Zong>
	</div>
</template>

<script>
	import Zong from '../dtzj3/zong.vue'
	export default{
		name:"sp",
		components:{
			Zong
		},
		methods:{
			fun(){
				this.$router.push("/spyxq")
			}
		}
	}
</script>

<style scoped>
	.cx{
		font-weight: bolder;
		font-size: 10px;
		margin-bottom: 10px;
		margin-left: 10px;
	}
	.sp{
		width: 94%;
		height: 80px;
		border: 1px solid #999999;
		margin: 0 auto;
		
	}
	img{
		width: 80px;
		height: 80px;
	}
	.l1{
		float: left;
		width: 80px;
		height: 80px;
		margin-right: 10px;
	}
	.l2{
		float: left;
		width: 190px;
		height: 100px;
		font-size: 13px;
	}
	.tt1{
		margin-top: 8px;
		margin-bottom: 10px;
	}
	.pc{
		font-weight: bolder;
		font-size: 16px;
		color: red;
	}
</style>
