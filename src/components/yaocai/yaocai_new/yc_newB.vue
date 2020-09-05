<template>
    <div>
        <div class="box1"><span class="el-icon-back" @click="fun()"></span><span>餐馆</span></div>
        <div class="box2">
        <span @click="funa()">优选人参</span>
		<span @click="funb()">优选枸杞</span>
        <span @click="func()">优选燕窝</span>
        <span @click="fund()">其他推荐</span>
        <component :is="com"></component>
        </div>
        {{CCC}}
    </div>
</template>

<script>
import Yc_newB1 from "./yc_newB1.vue"
   import Yc_newB2 from "./yc_newB2.vue"
   import Yc_newB3 from "./yc_newB3.vue"
   import Yc_newB4 from "./yc_newB4.vue"
export default {
    props:["CCC"],
    components:{
        Yc_newB1,Yc_newB2,Yc_newB3,Yc_newB4
    },
    data() {
			return {
				com:Yc_newB1,
			}
		},
		methods:{
			funa(){
				this.com=Yc_newB1
			},
			funb(){
				this.com=Yc_newB2
			},
			func(){
				this.com=Yc_newB3
            },
            fund(){
				this.com=Yc_newB4
			},
            fun(){
                this.$router.go(-1)
            }
            
		},
       
}
</script>

<style scoped>
.box1{ width:100%;display: flex;background-color: black;padding-left: 0.1rem;position: fixed;top: 0;}
.box1 span{flex: 1; font-size: 0.3rem;font-weight: bold;color: #fff;line-height: 0.5rem;}
.box2{width:100%;margin-top: 0.1rem;margin-top:0.5rem;}
.box2 span{margin: 0.12rem ;}

</style>