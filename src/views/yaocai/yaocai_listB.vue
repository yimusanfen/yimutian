<template>
    <div>
        <i class="el-icon-back" @click="funa()"></i>
        <div class="box">
            <h3>{{obj}}</h3>
        </div>
       
        <div class="box1" v-for="(v,i) in data" :key="i">
            <div><img :src="v.img" ></div>
            <div  class="box2">
                <span><h3>{{v.name | filA}}</h3><h4>{{v.price3}}{{v.txt2}} | {{v.dizhi}}</h4></span>
                <div  class="box3"><span><p>￥{{v.price1}}{{v.txt1}}</p></span><span class="span" @click="fun(v)">去购买</span></div>
                
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
    data(){
        return{
            data:"",
            obj:""
        }
    },
    created() {
        this.data=JSON.parse(this.$route.query.xixi);
        this.obj = this.$route.query.dahuang
        // this.data=this.$route.params.dahuang
    },
    filters:{
        filA(val){
            return val.substr(0,20)
        }
    },
    methods:{
        funa(){
            this.$router.go(-1)
        },
        fun(a){
            let data = JSON.stringify(a)
            this.$router.push({name:"shopping",query:{dahuang:data}})
        }
    }
}
</script>

<style scoped>
    .box{width:100%; line-height: 0.5rem;background-color: #f2f2f2;}
.el-icon-back{font-size: 0.4rem;margin-left: 0.1rem;margin-top: 0.05rem;position:absolute;}
.box h3{font-size: 0.25rem;text-align: center;}
.box1{width: 90%;margin: 0.2rem ;display: flex;}
.box1 img{width:1.2rem;height:1.2rem;margin-right: 0.2rem;}
.box2 h3{font-size: 0.15rem;font-weight: normal;line-height: 0.25rem;}
.box2 h4{font-size: 0.13rem;font-weight: normal;line-height: 0.2rem;color:#aaa;}
.box3{display: flex;margin-top:0.1rem;justify-content: space-between;}
.box3 p{font-size: 0.2rem;font-weight: bold;color:#f2260d;line-height: 0.3rem;}
.box3 .span{width: 0.6rem;height: 0.3rem;background-color: #ff5e30;font-size: 0.15rem;color:#fff;
text-align: center;line-height: 0.3rem;border-radius: 0.1rem;}
</style>