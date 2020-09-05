<template>
	<div class="nav">
		<Navbaritem v-for="(v,i) in arr" :img="v.img" :title="v.title" :key="i"></Navbaritem>
	</div>
</template>

<script>
	import Navbaritem from './navbaritem.vue'
	export default{
		name:"navbar",
		components:{
			Navbaritem
		},
		data(){
			return {
				arr:[
					{img:"./images/nav/rou.jpg",title:"肉禽厂"},
					{img:"./images/nav/egg.jpg",title:"蛋类厂"},
					{img:"./images/nav/medicine.jpg",title:"药材厂"},
					{img:"./images/nav/jianguo.jpg",title:"坚果厂"},
					{img:"./images/nav/tea.jpg",title:"茶叶厂"},
					{img:"./images/nav/wine.jpg",title:"酒水厂"},
					{img:"./images/nav/oil.jpg",title:"粮油厂"},
					{img:"./images/nav/huajiao.jpg",title:"农副厂"},
					{img:"./images/nav/huafei.jpg",title:"农资厂"},
					{img:"./images/nav/track.jpg",title:"农机厂"},
				]
			}
		}
	}
</script>

<style scoped>
	.nav{
		width: 95%;
		height: 178px;
		background-color: white;
		border-radius: 17px;
		margin: 0 auto;
	}
</style>
