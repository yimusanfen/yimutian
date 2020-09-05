<template>
	<div>
		<div v-for="(v,i) in this.$store.state.mtdmk.arr1" :key="i" class="item">
			<div>
				<img :src="v.img">
			</div>
			<div class="tit2">{{v.title}}</div>
			<div class="zt">{{v.num}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"fs"
	}
</script>

<style scoped>
	.item{
		width: 147px;
		height: 220px;
		float: left;
		margin-top: 5px;
		margin-left: 5px;
		margin-right: 5px;
		border: 1px solid #999999;
	}
	img{
		width: 147px;
		height: 130px;
	}
	.tit2{
		font-size: 10px;
		margin-top: 7px;
		margin-bottom: 10px;
	}
	.zt{
		color: #DF5000;
	}
</style>
