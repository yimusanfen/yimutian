<template>
    <div class="box">
        <div class="box1">
            <span  @click="fun()" class="el-icon-back"></span>
            <span>药店</span>
            <span class="el-icon-share"></span>
         </div>
        <div  class="box2">
            <span @click="funa(v)" v-for="(v,i) in BBB" :key="i">
                <img :src="v.img" >
                <h4>{{v.name | filA}}</h4>
                <p>￥{{v.price1}}</p>
            </span>
            
            
        </div>
    </div>
</template>

<script>
export default {
    props:["BBB"],
    data(){
        return{
            arr:[]
        }
    },
    methods:{
        fun(){
            this.$router.go(-1)
        },
        funa(a){
            let data = JSON.stringify(a); 
            this.$router.push({name:"shopping",query:{dahuang:data}})
        }
    },
    filters:{
        filA(val){
            return val.substr(0,13)+"..."
        }
    }
}
</script>

<style scoped>

.box1{
    width: 100%;
    background: #160c03;
    display: flex;
    margin-bottom: 0.1rem;
    position: fixed;
    top:0;
}
.box1 span{
    flex: 1;
    text-align: center;
    font-size: 0.3rem;
    color:white;
    font-weight: bold;
    line-height: 0.5rem;
}
.box2{
    width: 90%;
    padding-left: 0.2rem;
    padding-right: 0.1rem;
    margin-top:0.7rem;
    display: flex;
    flex-flow:row wrap;
}
.box2 span{
    margin: 0.05rem;
    /* margin-right: 0.05rem; */
}
.box2 span img{
    width: 1rem;
    height: 1rem;
}
.box2 span h4{
    width: 1rem;
    font-size: 0.13rem;
}
.box2 span p{
    font-size: 0.15rem;
    font-weight: bold;
    color:#ff5809;
}
</style>