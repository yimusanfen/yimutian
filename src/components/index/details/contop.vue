<template>
    <div class="top">
        <div class="top-top">
            <p class="price">
                <span>{{obj.newprice|adddao}}{{obj.unit}}</span>
                <i>{{obj.least}}{{obj.unit}}起</i>
            </p>
            <div class="title">
                <h2>{{obj.title}}</h2>
                <p class="tit-rig" @click="change(true)">
                    <span><i class="iconfont icon-fenxiang"></i>分享</span>
                </p>
            </div>
            <div class="add">
            <p class="address"><i class="iconfont icon-location"></i>{{obj.address}}</p>
            <p class="msg"><span><i class="iconfont icon-kanguo"></i>{{obj.views}}万人看过</span><em>订单数{{obj.orders}}</em><strong>成交{{obj.bargain}}万元</strong></p>
            </div>
            <p class="check">
                <span class="iconfont icon-zhubangdan"></span>
                <strong>查看「牛肉干畅销榜」</strong>
                <i class="iconfont icon-iconfontjiantou5"></i>
            </p>
        </div>
        <div class="deal">
            <div class="deal-main">
                <p class="deal-top">
                    <span>请选择一亩田在线交易</span>
                    <em>查看详情</em>
                    <i class="iconfont icon-iconfontjiantou5"></i>
                </p>
                <p class="deal-bot"><i class="iconfont icon-duihao"></i>资金更安全<i class="iconfont icon-duihao"></i>售后有保障</p>
            </div>
            
        </div>
        <div class="specification">
            <p class="left">规格</p>
            <div class="right">
                <p v-for="(v,i) in obj.specification" :key="i">
                    <span>{{obj.title.slice(0,4)}}{{v.num}}{{obj.unit}}</span><span>{{v.price}}元/{{obj.unit}}</span>
                </p>
            </div>
        </div>
        <div class="logistics">
            <p class="left">物流</p>
            <div class="right" @click="showPopup">
                <span>快递；包邮(部分地区除外)</span>
                <i class="iconfont icon-iconfontjiantou5"></i>
            </div>
        </div>
        
        <!--底部弹出层  物流信息-->
        <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
        <van-popup class="tanchu" v-model="show" position="bottom" :style="{ height: '45%' }">
            <h2>物流</h2>
            <p>快递；包邮(部分地区除外)</p>
            <p>包邮地区：包邮地区：北京、天津、上海、重庆、河北、山西、内蒙古、辽宁、吉林、黑龙江、江苏、浙江、安徽、福建、江西、山东、河南、湖北、湖南、广东、广西、海南、四川、贵州、云南、陕西、甘肃、青海、宁夏</p>
            <p>不包邮地区：</p>
            <p>内蒙古、西藏、新疆、香港、澳门、台湾</p>
            <p class="iknow"  @click="close()">知道了</p>
        </van-popup>
        <!-- 分享弹出框开始 -->
        <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        />
        <!-- 分享弹出框结束 -->
    </div>
    
</template>

<script>
import {mixin} from '&mi/index.js'
export default {
    mixins:[mixin],
    props:['obj'],
    data() {
        return {
            show: false,
        };
    },
    methods:{
        showPopup() {
            this.show = true;
        },
        close(){
            
            this.show = false;
        }
    },
    computed:{

    },
    filters:{
        adddao(val){
            return '￥'+val.toFixed(2)+'/'
        }
    }
}

</script>

<style scoped>
    .top{
        width: 100%;
        
    }
    .top-top{
        width: 100%;
        margin: 0 auto;
        border-bottom: 0.3rem solid #f2f2f2;
    }
    .add{
        width: 95%;
        margin: 0 auto;
        border-bottom: 2px solid #f2f2f2;
    }
    .price span{
        font-size: .6rem;
        color: #fe4f00;
    }
    .price i{
        font-size: .3rem;
        background-color: #fe4f00;
        color: white;
        font-style: normal;
        padding: 0.05rem;
        border-radius: 0.1rem;
        margin-bottom: 0.1rem;
        margin-left: 0.2rem;

    }
    .title{
        width: 100%;
        display: flex;
        margin: 0.2rem 0;
    }
    .title h2{
        flex:3;
        font-size: 0.5rem;
        font-weight: bolder;
        margin-left: 0.2rem;
    }
    .title p{
        text-align: center;
        flex:1;
        font-size: 0.3rem;
        
    }
    .tit-rig span{
        padding: 0.2rem 0.4rem;
        font-size: 0.4rem;   
        background-color: #f8f8f8;
        color: #737373;
        border-radius: 0.3rem 0 0 0.3rem;
    }
    .tit-rig i{
        font-size: 0.4rem; 
    }
    .address{
        font-size: 0.4rem;
        margin: 0.1rem 0;
        color: #999999;

    }
    .address i{
        font-size: 0.4rem;
        color: #999999;
        margin-right: 0.1rem;
    }
    .msg{
        font-size: 0.4rem;
        margin: 0.1rem 0;
        color: #999999;
        display: flex;
        justify-content: space-between;
    }
    .msg i{
        font-size: 0.4rem;
        color: #999999;
        margin-right: 0.1rem;

    }
    .msg em,strong{
        font-style: normal;
        font-weight: normal;
    }
    .check{
        width: 95%;
        margin: 0 auto;
        font-size: 0.4rem;
        padding: 0.3rem 0;
    }
    .check span{
        font-size: 0.4rem;
        color: #fe4f00;
        margin-right: 0.2rem;
    }
    .check i{
        font-size: 0.4rem;
        margin-right: 0.2rem;
        color: #999999;
        margin-left: 4rem;
    }
    .deal{
        width: 100%;
        border-bottom: 0.3rem solid #f2f2f2;
    }
    .deal-main{
        width: 95%;
        margin: 0 auto;
    }
    .deal-top{
        font-size: 0.4rem;
        margin: 0.1rem 0;
    }
    .deal-top em,i{
        font-style: normal;
        font-size: 0.35rem;
        color: #999999;
    }
    .deal-top em{
        margin: 0 0.2rem 0 3rem;
    }
    .deal-bot{
        font-size: 0.35rem;
        color: #999999;
        margin: 0.2rem 0;
    }
    .deal-bot i{
        font-size: 0.4rem;
        color: #fe4f00;
    }
    .specification{
        width: 100%;
        display: flex;
        border-bottom: 0.3rem solid #f2f2f2;
        font-size: 0.35rem;
    }
    .left{
        flex: 1;
        text-align: center;
        padding: 0.2rem 0;
        color: #666;
    }
    .right{
        flex: 3;
        
    }
    .right p{
        padding: 0.2rem 0;
        display: flex;
        justify-content: space-around;
    }
    .logistics{
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 0.3rem solid #f2f2f2;
        font-size: 0.35rem;
    }
    .right i{
        font-size: 0.4rem;
        color: #999999;
        margin: 0.2rem 0 0 2.5rem;
    }
    .tanchu h2{
        width: 100%;
        font-size: 0.4rem;
        font-weight: bolder;
        text-align: center;
        padding: 0.2rem 0;
    }
    .tanchu p{
        width: 95%;
        margin: 0 auto;
        font-size: 0.3rem;
    }
    .tanchu .iknow{
        background-color: greenyellow;
        width: 30%;
        margin: 0 auto;
        padding: 0.4rem 0.6rem;
        font-size: 0.4rem;
        font-weight: bolder;
        text-align: center;
        margin-top: 0.3rem;
    }
</style>