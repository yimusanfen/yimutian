<template>
    <div >
        <div  v-for="(v,i) in evalarr" :key="i">
            <div class="eval" v-if="i<isshow">
            <p class="item">
                <img :src="evalarr[i].userimg" alt="">
                <span>{{evalarr[i].username}}</span> 
            </p>
            <p class="pingjia">{{evalarr[i].pingjia}}</p>
            <p class="timeandother"><span>{{evalarr[i].time|fil}}</span><span>{{evalarr[i].buy.wd}}{{evalarr[i].buy.num}}</span><span>{{evalarr[i].address}}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['evalarr','isshow'],
    filters:{
        fil(val){
            return (''+val).slice(0,4)+'-'+(''+val).slice(4,6)+'-'+(''+val).slice(6,8)
        }
    },
    methods:{
        
    },
}
</script>

<style scoped>
    .eval{
        width: 95%;
        margin: 0 auto;
        border-bottom: 1px solid #ccc;
        padding: 0.3rem 0;
    }
    .item{
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 0.4rem;


    }
    .item img{
        width: 0.8rem;
        margin-right: 0.2rem;
    }
    .pingjia{
        font-size: 0.4rem;
        margin: 0.1rem 0;
    }
    .timeandother{
        color: #666;
    }
    .timeandother span{
        margin: 0 0.2rem;
    }
</style>