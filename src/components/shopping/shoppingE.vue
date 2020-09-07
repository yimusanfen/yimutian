<template>
    <div class="box">
    <div class="box1"><p>{{FFF.price1}}{{FFF.txt1}}</p><span>{{FFF.price3}}{{FFF.txt2}}</span></div>
    <div class="box2"><h3>{{FFF.name}}</h3><span class="el-icon-share" @click="fun()">分享</span></div>
    <div class="box3"><span class="el-icon-location-outline">{{FFF.dizhi}}</span></div>
    <div class="box4"><p class="el-icon-view">{{FFF.num1}}人看过</p><p>订单数{{FFF.num2}}</p><p>成交{{FFF.num3}}万元</p></div>
    
    <div class="box5"><span><i class="el-icon-s-data"></i><p>查看{{FFF.text}}</p></span><span><i class="el-icon-arrow-right"></i></span></div>
    <van-popup v-model="show" closeable position="bottom" :style="{ height: '80%' }">
        <div class="box7">
            <h3>—— 分享出去 让更多人看到 ——</h3>
            <div class="box8">
                <span class="box12"><img src="../../../public/yaocai/fenxiang1.jpg" alt=""></span>
                <div class="box9">
                    <img :src="FFF.img">
                    <div class="box10">
                        <span>
                            <h4>{{FFF.name | filA}}</h4>
                            <h5>{{FFF.price1}}{{FFF.txt1}}</h5>
                        </span>
                        <span class="box11">
                            <img src="../../../public/yaocai/fenxiang2.jpg" alt=""><p>长按识别看货</p>
                        </span>
                        
                    </div>
                   
                </div>
            </div>
            <div class="box13">
                <span><img src="../../../public/yaocai/fenxiang3.jpg" alt=""><p>微信好友</p></span>
                <span><img src="../../../public/yaocai/fenxiang4.jpg" alt=""><p>朋友圈</p></span>
                <span><img src="../../../public/yaocai/fenxiang5.jpg" alt=""><p>保存图片</p></span>
            </div>
        </div>
        
    </van-popup>
</div>
</template>

<script>
export default {
props:["FFF"],
    data(){
        return{
            show:false
        }
    },
    filters:{
        filA(val){
            return val.substr(0,10)
        }
    },
    methods:{
        fun(){
            this.show = true
        },
    
    }
}
</script>

<style scoped>
.box{margin-top: 0.1rem;padding-left: 0.1rem;}
.box1{display: flex;line-height: 0.3rem;}
.box1 p{font-size: 0.2rem;color:#ff5001;}
.box1 span{width: 0.5rem;height: 0.2rem;background-color:#ff5001;margin-top: 0.05rem;margin-left: 0.1rem;
font-size: 0.15rem;color:#fff;line-height: 0.2rem;text-align: center;border-radius: 0.06rem;
}
.box2{display: flex;}
.box2 h3{width: 80%;font-size: 0.18rem;}
.box2 span{width: 16%;height:0.27rem;background-color: #f8f8f8;line-height: 0.27rem;text-align: center;
border-top-left-radius:0.1rem ;border-bottom-left-radius:0.1rem ;margin-left: 0.07rem;color:#aaa;
}
.box3{margin-top:0.1rem;margin-bottom: 0.1rem;}
.box3 span{font-size: 0.17rem;color:#aaa}
.box4{display: flex;margin-bottom: 0.2rem;}
.box4 p{color:#aaa;flex: 1;font-size: 0.15rem;line-height: 0.3rem;}
.box5{padding: 0.07rem;display: flex;border-top: 0.01rem solid #aaa;justify-content: space-between;}
.box5 span{display: flex;}
.el-icon-s-data{color:#ff4f04;font-size: 0.3rem;margin-right: 0.1rem;}
.box5 p{font-size: 0.16rem;}
.el-icon-arrow-right{color:#aaa;font-size: 0.3rem;}
.box7{padding: 0.1rem;background-color: #f7f7f7;}
.box7 h3{font-size: 0.15rem;color:#777;text-align: center;}
.box8{width: 65%;margin: 0 auto;background-color: #fff;padding: 0.1rem;border-radius: 0.1rem;margin-top: 0.1rem;}
.box12 img{margin-left: 0.7rem;}
.box9 img{width: 2.3rem;height: 2.3rem;}
.box10{display: flex;}
.box10 h4{font-size: 0.15rem;font-weight: normal;margin-bottom: 0.1rem;}
.box10 h5{color:red;}
.box11 img{width: 0.6rem;height:0.6rem;margin-left: 0.1rem;}
.box11 p{font-size: 0.1rem;margin-left: 0.1rem;}
.box13{display: flex;margin-top: 0.2rem;}
.box13 span{flex: 1;text-align: center;}
.box13 img{width: 0.5rem;margin-bottom: 0.1rem;margin-left: 0.35rem;}
/* .box13 p{line-height: 0.4rem;} */
</style>