<template>
	<div>
		<div class="ztzj">
			<div @click="cur('Sp')" class="s1">商品</div>
			<div @click="cur('Dt')" class="d1">动态</div>
		</div>
		<component :is="current"></component>
	</div>
</template>

<script>
	import Sp from './sp.vue'
	import Dt from './dt.vue'
	export default{
		name:"he",
		components:{
			Sp,Dt
		},
		data(){
			return {
				current:'Sp'
			}
		},
		methods:{
			cur(s){
				this.current=s
			}
		}
	}
</script>

<style scoped>
	.ztzj{
		width: 100%;
		height: 50px;
		
		display: flex;
		align-items: center;
		text-align: center;
	}
	.s1{
		flex:1 ;
	}
	.d1{
		flex:1;
	}
</style>
