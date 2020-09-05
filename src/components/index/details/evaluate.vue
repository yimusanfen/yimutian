<template>
    <div>
        <div class="top">
            <p>交易评价</p>
            <span>全部({{evalobj[0].evaluate.eval.length}})</span>
            <i class="iconfont icon-iconfontjiantou5"></i>
        </div>
        <div class="haoping">
            <p v-if="evalobj[0]"><span>好评率{{evalobj[0].evaluate.haopinglv}}%</span><span>订单价(￥{{evalobj[0].evaluate.dingdanjia[0]}}-{{evalobj[0].evaluate.dingdanjia[1]}})</span></p>
            <p v-if="evalobj[0]"><span>最近发货({{evalobj[0].evaluate.zuijinfahuo|fil}})</span><span>发货时间({{evalobj[0].evaluate.fahuoshijian}})小时</span></p>
        </div>
        <div  v-for="(v,i) in evalobj[0].evaluate.eval" :key="i">
            <div class="eval" v-if="i<isshow">
            <p class="item">
                <img :src="evalobj[0].evaluate.eval[i].userimg" alt="">
                <span>{{evalobj[0].evaluate.eval[i].username}}</span> 
            </p>
            <p class="pingjia">{{evalobj[0].evaluate.eval[i].pingjia}}</p>
            <p class="timeandother"><span>{{evalobj[0].evaluate.eval[i].time|fil}}</span><span>{{evalobj[0].evaluate.eval[i].buy.wd}}{{evalobj[0].evaluate.eval[i].buy.num}}</span><span>{{evalobj[0].evaluate.eval[i].address}}</span></p>
            </div>
        </div>
        <!-- {{evalobj.evaluate.eval.length}} -->
    </div>
</template>

<script>
export default {
    props:['evalobj','isshow'],
    filters:{
        fil(val){
            return (''+val).slice(0,4)+'-'+(''+val).slice(4,6)+'-'+(''+val).slice(6,8)
        }
    },
    created(){
        
    },
    
}
</script>

<style scoped>
    .top{
        width: 95%;
        display: flex;
        align-items: center;
        font-size: 0.45rem;
        margin: 0 auto;
        padding: 0.2rem 0 0 0;
    }
    .top span{
        margin-left: 5.4rem;
        color: #555;
    }
    .top i{
        font-size: 0.4rem;
        margin-left: 0.1rem;
        margin-top: 0.1rem;
        color: #555;
    }
    .haoping{
        width: 95%;
        margin: 0 auto;
        padding: 0.2rem 0 0.1rem 0;
    }
    .haoping p{
        margin: 0.6rem 0;
    }
    .haoping span{
        padding: 0.2rem 0.2rem;
        background-color: #fef6eb;
        margin: 0.1rem 0.2rem;
        border-radius: 0.3rem;
    }

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