<template>
	<div>
		
			<button @click="cur('Fs')">粉丝</button>
			<button @click="cur('Yc')">油菜</button>
			<button @click="cur('Ft')">粉条</button>
		
			<button @click="cur('Hme')">黑木耳</button>
			<button @click="cur('Bc')">白菜</button>
			<button @click="cur('Fp')">粉皮</button>
		
			<button>更多</button>
	
		
		<component :is="current"></component>
	</div>
</template>

<script>
	import Fs from './fs.vue'
	import Yc from './yc.vue'
	import Ft from './ft.vue'
	import Hme from './hme.vue'
	import Bc from './bc.vue'
	import Fp from './fp.vue'
	
	
	export default{
		name:"zong",
		components:{
			Fs,Yc,Ft,Hme,Bc,Fp
		},
		data(){
			return {
				current:'Fs',	
				
			}
		},
		methods:{
			cur(s){
				this.current=s
			}
		},
		mounted(){
			this.$store.dispatch("listact")
		}
	}
</script>

<style scoped>
	button{
		margin-left: 6px;
	}
</style>
