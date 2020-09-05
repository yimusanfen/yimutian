<template>
    <div>
        <div class="box">
            <p>芳缘苗木 ></p>
            <div class="box1">
                <img :src="ZZZ.img" alt="">
                <span><h3>{{ZZZ.name | filA}}</h3><p>鲜货{{ZZZ.price3}}{{ZZZ.txt2}}</p></span>
                <span class="box2"><h5>￥{{numc}}</h5><p>x{{ZZZ.price3}}</p></span>
            </div>
            <div class="box3">
                <p>采购数量</p>
                <div class="box5"><p>{{ZZZ.price3}}{{ZZZ.txt2}}</p><div class="box4"><span  @click=fun()>-</span><h2 ref="num">{{num}}</h2><span @click="funb()">+</span></div></div>
            </div>
            <div class="box6"><h4>配送方式</h4> <p>快递</p></div>
            <div class="box6"><h4>订单备注</h4> <input type="text" placeholder="选填，填写内容须与商家协商"></div>
            <div class="box7"><p>共计{{num}}件 小计：￥{{numB}}</p></div>
        </div>
        <div class="box8"><h3>积分</h3><p>本次交易预计可获得{{nume}}积分</p></div>
        <div class="box9">
            <h3>合计：<p>￥{{numB}}</p></h3>
            <h4>提交订单</h4>
        </div>
    </div>
</template>

<script>
export default {
props:["ZZZ","PPP"],
    data(){
        return{
            num:"",
            numB:"",
            numc:"",
            numd:"",
            nume:''
        }
    },
    created(){
        this.num = this.PPP,
        this.numc = this.ZZZ.price1
        this.numB = this.numc*this.num
        this.nume = this.numB/10
    },
    filters:{
        filA(val){
            return val.substr(0,15)
        },
        // filB(val){
        //     return val.substr(0,5)
        // },
        // filC(val){
        //     return val.substr(0,1)
        // },
        // filD(val){
        //     return val.substr(0,15)
        // },
    },
    methods:{
        fun(){
            console.log(this.$refs.num.innerHTML)
            if(this.$refs.num.innerHTML<this.ZZZ.price3-1+2){
            return;
        }
        this.num--
            this.numB=this.numc*this.num
            this.nume = this.numB/10
        },
        funb(){
            this.num++
            this.numB=this.numc*this.num
            this.nume = this.numB/10
        }
    }
}
</script>

<style scoped>
.box{width: 90%;background-color: #fff;margin:0.2rem auto;border-radius: 0.1rem;padding: 0.1rem;}
.box1{display: flex;margin-top:0.1rem;}
.box1 img{width: 1rem;height: 1rem;margin-right: 0.1rem;}
.box1 span h3{font-size: 0.16rem;font-weight: bold;line-height: 0.3rem;}
.box1 span p{font-size:0.14rem;color: #aaa;}
.box2{margin-left: 0.1rem;}
.box2 h5{font-size: 0.15rem;font-weight: bold;line-height: 0.3rem;}
.box2 p{margin-left: 0.3rem;}
.box3{display: flex;justify-content: space-between;margin-top: 0.1rem;}
.box5{display: flex;}
.box5 p{color:#aaa;}
.box4{font-size: 0.15rem;display: flex;width: 1rem;border:0.01rem solid #aaa;justify-content:space-around;border-radius: 0.05rem;text-align: center;line-height: 0.2rem;margin-left: 0.1rem;}
   .box4 span{font-size: 0.25rem;color:#a8a8a8;}
   .box4 h2{font-size:0.15rem;border-left: 0.01rem solid #aaa;border-right:0.01rem solid #aaa;width: 0.3rem;}
   .box6{display: flex;margin-top: 0.1rem;font-size: 0.15rem;}
   .box6 p{color: #686868;margin-left: 0.2rem;}
   .box6 input{border: none;margin-left: 0.1rem;}
   .box7{display: flex;color: #686868;margin-top: 0.1rem;padding-left: 1.2rem;}
   .box8{width:90%;display: flex;justify-content: space-between;background-color: #fff;border-radius: 0.1rem;padding:0.1rem;margin: 0 auto;}
   .box8 h3{font-size: 0.2rem;font-weight: bold;}
   .box8 p{color: #686868;}
   .box9{width:100%;background-color: #fff;display: flex;position: fixed;bottom: 0;line-height: 0.6rem;}
.box9 h3{display: flex; margin-left: 0.1rem;}
.box9 p{font-size: 0.2rem;font-weight: bold;color: #fe7000;}
.box9 h4{width: 1rem;height: 0.4rem;background-color: #fe7000;line-height: 0.4rem;text-align: center;color: #fff;
border-radius: 0.2rem;margin-top: 0.1rem;margin-left: 1rem;}
</style>