<template>
	<div>
		<Slsjitem v-for="(v,i) in arr" :lo="v.logo" :g="v.gs" :key="i"></Slsjitem>
	</div>
</template>

<script>
	import Slsjitem from './slisjitem.vue'
	export default{
		name:"slsj",
		components:{
			Slsjitem
		},
		data(){
			return {
				arr:[
					{
						logo:"./images/logo.png",
						gs:"妙叹现代农业科技公司",
					},
					{
						logo:"./images/logo.png",
						"gs":"妙叹现代农业科技公司",
					},
					{
						logo:"./images/logo.png",
						gs:"妙叹现代农业科技公司",
					},
					{
						logo:"./images/logo.png",
						gs:"妙叹现代农业科技公司",
					}
				]
			}
		}
	}
</script>

<style scoped>
</style>
