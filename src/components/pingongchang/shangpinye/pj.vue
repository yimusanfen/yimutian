<template>
	<div class="jypj" @click="fun()">
		
		<div class="ztt">
			<span class="s1">交易评价</span>
			<span class="qb">全部(16)</span>
			<i class="iconfont icon-youjiantou"></i>
		</div>
		
		<div class="fx">
			<span class="hpl">好评率100%</span>
			<span class="dd">订单价(￥25-8400)</span>
			<span class="fh">最近发货(2020-08-30)</span>
			<span class="sj">发货时间(25小时)</span>
		</div>
		
		<div class="xx">
			<div class="h1">
				<i class="iconfont icon-mu1"></i>
				<span class="nm">匿名</span>
			</div>
			<div class="pl">交易完成，还未填写评价</div>
			<div class="fsdz">2020-09-02 50斤（共一袋）物流...1袋 发往江苏省南京市</div>
		</div>
		
		<div class="xx">
			<div class="h1">
				<i class="iconfont icon-mu1"></i>
				<span class="nm">匿名</span>
				<span class="hp2">好评</span>
			</div>
			<div class="pl">我这里是农贸市场批发干货的,拿了样品试用,餐馆老板反映质量还不错，下面继续合作！</div>
			<div class="fsdz">2020-08-19 50斤（共一袋）物流...1袋 发往江苏省南京市</div>
		</div>
		
		<div class="xx">
			<div class="h1">
				<i class="iconfont icon-mu1"></i>
				<span class="nm">左**</span>
				<span class="hp2">好评</span>
			</div>
			<div class="pl">还没开试。不知道是哪个品种红薯做的。包装最好在将就一些吧，毕竟是食品</div>
			<div class="fsdz">2020-08-11 50斤（共一袋）物流...1袋 发往广东省佛山市</div>
		</div>
		
		
		
		
		
	</div>
</template>

<script>
	export default{
		name:"pj",
		methods:{
			fun(){
				this.$router.push("/jypjxqym")
			}
		}
	}
</script>

<style scoped>
	.jypj{
		margin-top: 20px;
	}
	.ztt{
		margin-bottom: 10px;
		margin-left: 12px;
	}
	.s1{
		margin-right: 155px;
	}
	.qb{
		color: #999999;
		margin-right: 5px;
	}
	.fx{
		width: 100%;
		
	}
	.hpl{
		display: inline-block;
		background-color: antiquewhite;
		width: 110px;
		height: 25px;
		text-align: center;
		line-height: 25px;
		border-radius: 20px;
		margin-left: 10px;
		margin-top: 5px;
	}
	.dd{
		display: inline-block;
		background-color: antiquewhite;
		width: 165px;
		height: 25px;
		text-align: center;
		line-height: 25px;
		border-radius: 20px;
		margin-left: 10px;
		margin-right: 10px;
	}
	.fh{
		display: inline-block;
		background-color: antiquewhite;
		width: 165px;
		height: 25px;
		text-align: center;
		line-height: 25px;
		border-radius: 20px;
		margin-left: 10px;
		margin-top: 10px;
	}
	.sj{
		display: inline-block;
		background-color: antiquewhite;
		width: 140px;
		height: 25px;
		text-align: center;
		line-height: 25px;
		border-radius: 20px;
		margin-left: 3px;
	}
	.icon-mu1{
		display: inline-block;
		background-color: #CCCCCC;
		font-size: 10px;
		width: 20px;
		height: 20px;
		text-align: center;
		line-height: 20px;
		border-radius: 50%;
		margin-left: 10px;
		margin-right: 5px;
		vertical-align: middle;
	}
	.xx{
		margin-top: 20px;
		border-bottom: 1px solid #E7E1CD;
	}
	.nm{
		color: #999999;
		margin-right: 10px;
	}
	.hp2{
		background-color: antiquewhite;
		font-size: 10px;
		width: 30px;
		display: inline-block;
		text-align: center;
	}
	.h1{
		margin-bottom: 5px;
	}
	.pl{
		margin-left: 10px;
		margin-bottom: 5px;
	}
	.fsdz{
		margin-left: 10px;
		font-size: 10px;
		color: #999999;
		margin-bottom: 10px;
	}
</style>
