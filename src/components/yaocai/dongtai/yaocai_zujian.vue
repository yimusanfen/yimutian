<template>
    <div class="box">
		<van-tabs>
			<van-tab title="近期交易榜"><Yaocai1 :VVV="WWW"></Yaocai1></van-tab>
			<van-tab title="为你推荐"><Yaocai2 :VVV="arrB"></Yaocai2></van-tab>
			<van-tab title="上新药材"><Yaocai3 :VVV="arrC"></Yaocai3></van-tab>
			<van-tab title="销量排行"><Yaocai4 :VVV="arrD"></Yaocai4></van-tab>
		</van-tabs>
		<!-- {{WWW}} -->
		
    </div>
</template>

<script>
import Yaocai1 from "./yaocai1.vue"
import Yaocai2 from "./yaocai2.vue"
import Yaocai3 from "./yaocai3.vue"
import Yaocai4 from "./yaocai4.vue"
export default {
	components:{Yaocai1,Yaocai2,Yaocai3,Yaocai4},
	props:["WWW"],
    data() {
		return {
			active: 4,
			
		}
		
	},
	computed:{
		arrB(){
			return this.WWW.filter(item=>item.sign2=='B')
		},
		arrC(){
			return this.WWW.filter(item=>item.sign2=='C')
		},
		arrD(){
			return this.WWW.filter(item=>item.sign2=='D')
		},
	}
		
}
</script>

<style scoped>
   .van-tab__text--ellipsis{position:sticky;top:0;}
</style>