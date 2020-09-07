<template>
    <div class="box">
        <div class="box1"><p>药材畅销榜</p></div>
        <div class="box2">
            <!-- <router-link to="/shopping" v-for="(v,i) in AAA" :key="i"><img :src="v.img"><h4>{{v.name | filA}}</h4><p>￥{{v.price1}}</p></router-link> -->
            <span v-for="(v,i) in AAA" :key="i" @click="fun(v)"><img :src="v.img"><h4>{{v.name | filA}}</h4><p>￥{{v.price1}}{{v.txt1}}</p></span>
        </div>
    </div>
</template>

<script>
export default {
    props:["AAA"],
    data(){
        return{
            arr:[]
        }
    },
    filters:{
        filA(val){
            return val.substr(0,13)+" ..."
        }
    },
    methods:{
        fun(a){
            console.log(a)
            let data=JSON.stringify(a);
            this.$router.push({name:"shopping",query:{dahuang:data}})
        }
        
    }

}
</script>

<style scoped>
.box{width: 100%;}
.box1{width: 100%;background-color: #aaa;margin-bottom:0.1rem;}
.box1 p{font-size: 0.26rem;font-weight: bold;line-height: 0.64rem;text-align: center;}
.box2{width: 95%;margin: 0 auto;display: flex;flex-flow:row wrap;}
.box2 span{width: 1.1rem;flex:1;margin-bottom: 0.25rem;}
.box2 img{width:1.1rem;}
.box2 h4{width:1.1rem;font-size: 0.13rem;font-weight: bold;}
.box2 p{font-size: 0.15rem;font-weight: bold;color:#ff4f01}

</style>