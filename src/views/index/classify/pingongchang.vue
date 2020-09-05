<template>
    <div class="pgc">
        <Topbar></Topbar>
		<Search></Search>
		<Navbar></Navbar>
		<Ph></Ph>
		<Chdt></Chdt>
    </div>
</template>

<script>
	import Topbar from '&c/pingongchang/top/topbar.vue'
	import Search from '&c/pingongchang/search.vue'
	import Navbar from '&c/pingongchang/nav/navbar'
	import Ph from '&c/pingongchang/paihang/ph.vue'
	
	//动态组件
	import Chdt from '&c/pingongchang/dtzj/chdt'
export default {
	name:"pingongchang",
	components:{
		Topbar,Search,Navbar,Ph,Chdt
	}
}
</script>

<style scoped>
  .pgc{
	background-color: #E7E1CD;
  }
</style>