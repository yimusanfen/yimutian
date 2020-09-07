<template>
    <div class="evaluate" @click="toevalpage()">
        <div class="top">
            <p>交易评价</p>
            <span>全部({{evalobj[0].evaluate.eval.length}})</span>
            <i class="iconfont icon-iconfontjiantou5"></i>
        </div>
        <div class="haoping">
            <p v-if="evalobj[0]"><span>好评率{{evalobj[0].evaluate.haopinglv}}%</span><span>订单价(￥{{evalobj[0].evaluate.dingdanjia[0]}}-{{evalobj[0].evaluate.dingdanjia[1]}})</span></p>
            <p v-if="evalobj[0]"><span>最近发货({{evalobj[0].evaluate.zuijinfahuo|fil}})</span><span>发货时间({{evalobj[0].evaluate.fahuoshijian}})小时</span></p>
        </div>
        <evacon :evalarr="evalobj[0].evaluate.eval" :isshow="isshow" ></evacon>
        <!-- {{evalobj[0].evaluate.eval}} -->
        
    </div>
</template>

<script>
import evacon from './evacon.vue'
export default {
    components:{
        evacon
    },
    props:['evalobj','isshow'],
    
    filters:{
        fil(val){
            return (''+val).slice(0,4)+'-'+(''+val).slice(4,6)+'-'+(''+val).slice(6,8)
        }
    },
    methods: {
        toevalpage(){
            this.$router.push({name:'evalpage',params:{evalobj:this.evalobj[0].evaluate.eval,isshow:this.evalobj[0].evaluate.eval.length}})

        },
        
    },
    
    
}
</script>

<style scoped>
    .evaluate{
        border-bottom: 0.3rem solid #f2f2f2;

    }
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

    
</style>