<template>
    <div class="box"> 
        <div class="box1">
            <i @click="fun()" class="el-icon-back"></i>
            <h2 style="color: white;">滋补药材</h2>
            <strong class="el-icon-share"></strong>
        </div>
        <div class="box2">
            <Yaocai_input :KKK="OOO"></Yaocai_input>
        </div>
        <div class="box3">
            <router-link :to="v.url"  v-for="(v,i) in arr" :key="i"><span><img :src="v.img"><p>{{v.text}}</p></span></router-link>
            
        </div>
        
    </div>
</template>

<script>
    import Yaocai_input from "./yaocai_input.vue"
export default {
    components:{Yaocai_input},
    props:["OOO"],
    data(){
        return{
            arr:[
                {id:1,url:"/yaocai_newsA",text:"药店",img:"yaodian.jpg"},
                {id:2,url:"/yaocai_newsB",text:"餐馆",img:"canguan.jpg"},
                {id:3,url:"/yaocai_newsC",text:"批发",img:"pifa.jpg"},
                {id:4,url:"/yaocai_newsC",text:"特产店",img:"techan.jpg"},
                {id:5,url:"/yaocai_newsD",text:"滋补馆",img:"zibug.jpg"}
            ]
        }
    },
    methods:{
        fun(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.box{width: 100%;height: 2rem;background-image: url(../../../public/yaocai/1.jpg);background-repeat: no-repeat;background-size: 100%;}
.box1{width: 100%;display: flex;line-height: 0.6rem;justify-content: space-around;}
i{font-size: 0.4rem;text-align: center;color:#fff;font-weight: bold;margin-left: 0.1rem;margin-top:0.1rem};

.box1 span{font-size: 0.3rem;text-align: center;color:white;font-weight: bold;margin-left: 0.8rem;}
strong{font-size: 0.4rem;text-align: center;color:#fff;font-weight: bold;margin-left: 0.3rem;margin-top:0.1rem;}
.box2{width: 100%;}
.box2 input{width: 90%;height: 0.4rem;margin-left: 0.15rem;border-radius: 0.2rem;text-align: center;}
.box3{width: 90%;display: flex;margin-left: 0.2rem;background-color: #fff;border-radius: 0.15rem;margin-top: 0.25rem;position: absolute;padding-top:0.05rem;padding-bottom: 0.05rem;}
.box3 span{width:20%;flex: 1;text-align: center;}
.box3 img{width: 0.6rem;margin-left: 0.06rem;}
</style>