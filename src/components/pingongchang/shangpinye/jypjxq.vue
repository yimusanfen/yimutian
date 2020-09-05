<template>
	<div class="xqy">
		
		<div class="to">
			<i class="iconfont icon-flow"></i>
			<span>交易评价</span>
		</div>
		
		<!-- 下拉刷新 -->
		<div class="sx">
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="fresh">
				<p></p>
			</van-pull-refresh>
		</div>
		
		
		
	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default{
		name:"jypjxq",
		data(){
			return {
				count: 0,
				isLoading: false,
			}
		},
		methods:{
			onRefresh(){
				setTimeout(()=>{
					Toast('刷新成功');
					this.isLoading = false;
					this.count++;
				},1000)
			}
		}
	}
</script>

<style scoped>
	.xqy{
		height: 1000px;
	}
	.to{
		width: 100%;
		height: 49px;
		background-color: pink;
		line-height: 49px;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		
	}
	.icon-flow{
		margin-left: 10px;
		margin-right: 100px;
	}
	.sx{
		margin-top: 49px;
	}
	.fresh{
		height: 100px;
	}
</style>
