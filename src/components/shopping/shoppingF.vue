<template>
    <div class="box">
        
        <div class="box2"><h2></h2><h3>商家已加入买家保障计划</h3><p>优先选择在线交易，资金更安全，售后有保障</p></div>
        <div class="box3" @click="funb()"><h3>物流</h3><p>快递；包邮（部分地区除外）</p><i class="el-icon-arrow-right"></i></div>
        <div class='box4'>
            <div class="box5"><h3>交易评价</h3><p>全部（258）></p></div>
            <div class="box6">
                <span><p>好评率98%</p><p>订单价（￥58-14700）</p></span>
                
                <br>
                <span><p>最近发货（2020-08-30）</p><p>发货时间（17小时）</p></span>
                
            </div>
        </div>
        <van-popup v-model="show" closeable position="bottom" :style="{ height: '50%' }">
            <div class="box7">
                <h3>物流</h3>
                <p>快递，包邮（部分地区除外）</p> 
                <div>
                    <span>包邮地区：北京、天津、上海、重庆、河北、山西、内蒙古、辽宁、吉林、黑龙江、江苏、浙江、安徽、福建、江西、山东、河南、湖北、湖南、广东、广西、海南、四川、贵州、云南、陕西、甘肃、青海、宁夏、西藏、新疆、香港、澳门、台湾、</span>
                </div>
            </div>
            <h1 @click="fun()">知道了</h1>
        </van-popup>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show:false
        }
    },
    methods:{
        funb(){
            this.show =true 
        },
        fun(){
            this.show = false
        }
    }

}
</script>

<style scoped>


.box2{border-top:0.1rem solid #a8a8a8;border-bottom:0.1rem solid #aaa;padding: 0.05rem 0.2rem;}
.box2 h3{font-size: 0.14rem;}
.box2 p{font-size: 0.12rem;color:#aaa;}
.box3{padding:0.1rem;display: flex;border-bottom:0.1rem solid #aaa;}
.box3 h3{font-size: 0.15rem;color:#aaa;margin-right: 0.2rem;}
.box3 p{font-size: 0.15rem;margin-right: 0.8rem;}
.box4{padding: 0.1rem;}
.box5{display: flex;justify-content: space-between;}
.box5 p{font-size: 0.15rem;color:#aaa;}
.box6{margin-top: 0.1rem;margin-bottom: 1rem;}
.box6 span{display: flex;}
.box6 span p{line-height: 0.3rem;text-align: center;background-color: #ff9c6a;margin-right: 0.1rem;border-radius: 0.1rem;
font-size: 0.12rem;color: #717171;
}
.box7 h3{font-size: 0.3rem;text-align: center;line-height: 0.6rem;}
.box7 p{font-size: 0.2rem;line-height: 0.4rem;}
.box7 span{font-size: 0.18rem;line-height: 0.2rem;}
 h1{width: 90%;background-color: aquamarine;font-size: 0.25rem;line-height: 0.6rem;margin-left: 0.2rem;text-align: center;border-radius: 0.1rem;position: absolute;bottom: 0;color: #fff;}
</style>