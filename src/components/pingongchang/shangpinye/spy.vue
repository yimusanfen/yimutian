<template>
	<div class="xq">
		
		<!-- 粘性定位 -->
		
			<div class="gd">
				<i class="iconfont icon-fanhui"></i>
				<i class="iconfont icon-gouwuche"></i>
				<i class="iconfont icon-gengduo3"></i>
			</div>
		
		
		<!-- 轮播图 -->
		<div class="lb">
			<van-swipe @change="onChange">
				<van-swipe-item>
					<img src="/images/xqylbt/1.png">
				</van-swipe-item>
				<van-swipe-item>
					<img src="/images/xqylbt/2.png">
				</van-swipe-item>
				<van-swipe-item>
					<img src="/images/xqylbt/3.png">
				</van-swipe-item>
				<van-swipe-item>
					<img src="/images/xqylbt/4.png">
				</van-swipe-item>
				<template #indicator>
					<div class="custom-indicator">
					{{ current + 1 }}/4
					</div>
				</template>
			</van-swipe>
		</div>
		
		
		<!-- 倒计时 -->
		<div class="d">
			<div class="l">
				<div class="pn">
					<span class="p">￥139.00/件</span>
					<span class="n">2件起</span>
				</div>
				<div class="y">原价￥180.00</div>
			</div>
			<div class="r">
				<div class="c">促销</div>
				<div class="end">
					<span class="e1">距结束</span>
					<van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" class="e2"/>
				</div>
			</div>
		</div>
		
		<!-- 具体介绍 -->
		<Jshao></Jshao>
		
		<!-- 交易评价 -->
		<Pj></Pj>
		
		<!-- 公司详细介绍 -->
		
		
		
		
		
		
		
		
		
		<!-- 底部bar -->
		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
			<van-goods-action-icon icon="cart-o" text="购物车" />
			<van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
			<van-goods-action-button type="warning" text="加入购物车" />
			<van-goods-action-button type="danger" text="立即购买" />
		</van-goods-action>
		
	</div>
</template>

<script>
	
	import Jshao from './jshao.vue'
	import Pj from './pj.vue'
	
	
	export default{
		name:"spy",
		components:{
			Jshao,Pj
		},
		data(){
			return {
				current: 0,
				time: 100 * 60 * 60 * 1000
			}
		},
		methods:{
			onChange(index) {
				this.current = index;
				}
		}
	}
</script>

<style scoped>
	.xq{
		height: 3000px;
	}
	.gd{
		width: 100%;
		height: 40px;
		position: fixed;
		opacity: .3;
		z-index: 2;
	}
	.iconfont{
		font-size: 35px;
	}
	.icon-gouwuche{
		margin-left: 190px;
		margin-right: 20px;
	}
	
	
	/* 轮播图样式 */
	img{
		width: 100%;
		height: 300px;
	}
	.custom-indicator {
		position: absolute;
		right: 5px;
		bottom: 5px;
		padding: 2px 5px;
		font-size: 12px;
		background: rgba(0, 0, 0, 0.1);
	}
	
	/* 倒计时 */
	.d{
		width: 100%;
		height: 65px;
		background: url("/images/jianbian.jpg");
	}
	.l{
		float: left;
		margin-right: 15px;
	}
	.r{
		float: left;
	}
	.pn{
		margin-top: 10px;
		margin-left: 10px;
	}
	.p{
		font-weight: bolder;
		color: white;
		font-size: 20px;
	}
	.n{
		background-color: white;
		color: red;
		font-size: 10px;
		border-radius: 5px;
		margin-left: 5px;
	}
	.y{
		color: #808080;
		font-size: 10px;
		margin-left: 15px;
	}
	.c{
		margin-left: 105px;
		margin-top: 10px;
		color: white;
		font-weight: bolder;
		font-size: 15px;
	}
	.end{
		font-size: 10px;
		color: white;
		margin-left: 15px;
	}
	.e2{
		font-size: 10px;
		color: white;
	}
</style>
