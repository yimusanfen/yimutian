<template>
    <div class="merch">
        <!-- {{mer}} -->
        <div class="top">
            <img :src="mer[0].img" alt="">
            <div>
                <p class="title">{{mer[0].name}}</p>
                <p class="lev">店铺等级:{{mer[0].grade[0]}}级</p>
            </div>
            <span>进店看看</span>
        </div>
        <p class="pingjia"><span>货品达标:{{mer[0].grade[1]}}<strong>{{mer[0].grade[1]|pingjia}}</strong></span><span>卖家服务:{{mer[0].grade[2]}}<strong>{{mer[0].grade[2]|pingjia}}</strong></span><span>物流服务:{{mer[0].grade[3]}}<strong>{{mer[0].grade[3]|pingjia}}</strong></span></p>
        <p class="disc">{{mer[0].presentation}}</p>
        <p class="zizhi">
            <span :style="{backgroundColor: newcol()}" v-for="(v,i) in mer[0].label" :key="i">{{v}}</span>
        </p>
    </div>
</template>

<script>
export default {
    props:['mer'],
    filters:{
        pingjia(val){
            if(val>4){
                return '高'
            }else if(val>3){
                return '中'
            }else if(val>1){
                return '低'
            }else{
                return '--'
            }
        }
    },
    data() {
        return {
            color:'green'
        }
    },
    methods: {
        newcol(){
            let str = "0123456789abcdef";
            let color = '#';
            for(var i =0;i<6;i++){
                color += str.charAt(Math.floor(Math.random()*12+4))
            }
            console.log(color)
            return color;
        }
    },
}
</script>

<style scoped>
    .merch{
        width: 95%;
        margin: 0 auto;
        padding-bottom: 1.2rem;
    }
    .top{
        width: 100%;
        /* background-color: aqua; */
        display: flex;
        align-items: top;
        padding: 0.3rem 0;
    }
    .top img{
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.2rem;
    }
    .top div{
        width: 5.5rem;
        margin-left: 0.2rem;
    }
    .title{
        font-size: 0.5rem;
        height: 0.8rem;
        line-height: 0.8rem;
    }
    .lev{
        font-size: 0.35rem;
    }
    .top span{
        width: 1.4rem;
        height: 0.4rem;
        display: inline-block;
        padding: 0.1rem 0.3rem;
        border: 1px solid green;
        border-radius: 0.4rem;
        color: green;
    }
    .pingjia{
        font-size: 0.38rem;
        display: flex;
        justify-content: space-between;
        color: #666;
        height: 1rem;
        line-height: 1rem;
    }
    .pingjia strong{
        background-color: #ccc;
        margin: 0 0.1rem;
    }
    .disc{
        font-size: 0.35rem;
        color: #999;
        line-height: 0.6rem;
        padding: 0.3rem 0;
        border-bottom: 1px solid #ccc;
    }
    .zizhi{
        padding: 0.3rem 0 0.5rem 0;
    }
    .zizhi span{
        font-size: 0.38rem;
        margin: 0 0.2rem;
    }
</style>