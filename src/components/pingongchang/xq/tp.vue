<template>
	<div class="zt">
		<div class="lf">
			<i class="iconfont icon-flow"></i>
		</div>
		<div class="ri" @click="showShare = true">
			<i class="iconfont icon-weixin"></i>
			<span>分享</span>
		</div>
		<van-share-sheet v-model="showShare" :options="options" />
	</div>
</template>

<script>
	export default{
		name:"tp",
		data(){
			return {
				showShare: false,
				options: [
							{
								name: '微信好友',
								icon: 'wechat',
							},
							{
								name: 'QQ',
								icon: 'qq',
							}
						]
			}
		}
	}
</script>

<style scoped>
	.zt{
		width: 100%;
		height: 49px;
		
	}
	.lf{
		float: left;
		width: 16px;
		height: 16px;
		margin-top: 16px;
		margin-left: 10px;
	}
	.ri{
		float: left;
		width: 68px;
		height: 30px;
		margin-top: 13px;
		margin-left: 220px;
		line-height: 30px;
	}
	.iconfont{
		font-size: 23px;
		color: #55A532;
		margin-right: 6px;
	}
	span{
		margin-left: 0;
	}
</style>
