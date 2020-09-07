<template>
	<div class="bt">
		<button @click="cur('Qb')">全部(17)</button>
		<button @click="cur('Yt')">有图(0)</button>
		<button @click="cur('Zhuiping')">追评(0)</button>
		<button @click="cur('Zhongping')">中评(0)</button>
		<button @click="cur('Cp')">差评(0)</button>
		<button @click="cur('Hp')">好评(8)</button>
		<component :is="current"></component>
		
	</div>
</template>

<script>
	import Qb from './quanbu.vue'
	import Yt from './youtu.vue'
	import Zhuiping from './zhuiping.vue'
	import Zhongping from './zhongping.vue'
	import Cp from './chaping.vue'
	import Hp from './haoping.vue'
	export default{
		name:"zongde",
		components:{
			Qb,Yt,Zhuiping,Zhongping,Cp,Hp
		},
		data(){
			return {
				current:'Qb'
			}
		},
		methods:{
			cur(s){
				this.current=s
			}
		},
		mounted(){
			this.$store.dispatch("jypjact")
		}
	}
</script>

<style scoped>
	.bt{
		margin-top: 10px;
	}
	button{
		background-color: white;
		border-radius: 10px;
		margin-left: 5px;
		margin-right: 3px;
		width: 70px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		margin-bottom: 5px;
	}
</style>
