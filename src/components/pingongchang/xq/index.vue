<template>
	<div>
		<Tp></Tp>
		<Tit></Tit>
		<Intro></Intro>
		<He></He>
		
	</div>
</template>

<script>
	import Tp from './tp.vue'
	import Tit from './tit.vue'
	import Intro from './intro.vue'
	import He from './dtzj2/he.vue'
	
	export default{
		name:"index",
		components:{
			Tp,Tit,Intro,He
		}
	}
</script>

<style scoped>
</style>
