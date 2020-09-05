<template>
	<div>
		<div class="dtzj">
			<div @click="cur('gcbd')" class="item">工厂榜单</div>
			<div @click="cur('slsj')" class="item">实力商家</div>
		</div>
		<component :is="current"></component>
	</div>
</template>

<script>
	import Gcbd from '&c/pingongchang/dtzj/gcbd'
	import Slsj from '&c/pingongchang/dtzj/slsj'
	export default{
		name:"chdt",
		components:{
			Gcbd,Slsj
		},
		data(){
			return {
				current:'Gcbd'
			}
		},
		methods:{
			cur(s){
				this.current=s
			}
		}
	}
</script>

<style>
	.dtzj{
		width: 100%;
		height: 40px;
		display: flex;
		text-align: center;
		align-items: center;
		position: sticky;
		top: 49px;
		background-color: white;
	}
	.item{
		flex: 1;
	}
	.active{
		color: #1989FA;
	}
</style>
