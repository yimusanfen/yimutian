<template>
    <div class="box">
        <div class="box1">
            <span class="el-icon-chat-dot-round"><p>聊一聊</p></span> 
            <span class="el-icon-phone-outline"><p>打电话</p></span> 
            <span class="el-icon-star-off"><p>收藏</p></span>
            <span class="box2">
                <h6 @click="fun()">加入购物车</h6>
                <h5  @click="funb()">立即购买</h5>
            </span>
        </div>
        <van-popup v-model="show" closeable position="bottom" :style="{ height: '30%' }">
            <div class="box4">
                <span ><img :src="XXX.img" alt=""></span> 
                <div>
                    <span class="box3"><h4>{{XXX.price1}}{{XXX.txt1}}</h4><h3>{{XXX.price3}}{{XXX.txt2}}</h3></span>
                    <h2>{{XXX.name}}</h2>
                </div>
            </div>
            <h1>确定</h1>
        </van-popup>
        <van-popup v-model="bool" closeable position="bottom" :style="{ height: '40%' }">
            <div class="box4">
                <span ><img :src="XXX.img" alt=""></span> 
                <div>
                    <span class="box3"><h4>{{XXX.price1}}{{XXX.txt1}}</h4><h3>{{XXX.price3}}{{XXX.txt2}}</h3></span>

                    <h2>{{XXX.name}}</h2>
                </div>
            </div>
            <div class="box5">
                <p>数量</p>
                <div class="box6"><span @click="fund()">-</span><h2 ref="num">{{num}}</h2><span @click="fune()">+</span></div>
            </div>

            <h1 @click="func()">确定</h1>
            
        </van-popup>
        
    </div>
</template>

<script>
export default {
    props:["XXX"],
    data() {
        return {
        show: false,
        bool: false,
        num:""
        };
    },
    created(){
        this.num=this.XXX.price3
    },
    mounted(){
      
    },

  methods: {
    fun() {
      this.show = true;
    },
    funb() {
      this.bool= true;
    },
    func(){
        let data= JSON.stringify(this.XXX)
        this.$router.push({name:"orderForm",query:{xixi:data,saisai:this.num}})
       
        // this.$router.push({name:"orderForm",params:{xixi:data}})
        
        
    },
    fund(){
        console.log(this.$refs.num.innerHTML)
        if(this.$refs.num.innerHTML<this.XXX.price3-1+2){
            return;
        }
        this.num--
        console.log(this.$refs.num) 
       
    },
    fune(){
        this.num++
    }
  },
}
</script>

<style scoped>

.box1{
    width: 100%;
    display: flex;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    
    
    border-top:0.01rem solid #aaa;
    border-bottom: 0.01rem solid #aaa;
    position: fixed;
    bottom: 0;
    background-color: #fff;
}
.el-icon-chat-dot-round{
    font-size: 0.3rem;
    color: #aaa;
    text-align: center;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    border-right: 0.01rem solid #e2e2e2;
}
.el-icon-chat-dot-round p{
    font-size: 0.15rem;
    color: #aaa;
    text-align: center;
}
.el-icon-phone-outline{
    font-size: 0.3rem;
    color: #aaa;
    text-align: center;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    border-right: 0.01rem solid #e2e2e2;
}
.el-icon-phone-outline p{
    font-size: 0.15rem;
    color: #aaa;
    text-align: center;
}
.el-icon-star-off{
    font-size: 0.3rem;
    color: #aaa;
    text-align: center;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    border-right: 0.01rem solid #e2e2e2;
}
.el-icon-star-off p{
    font-size: 0.15rem;
    color: #aaa;
    text-align: center;
}
.box2{
    width: 1.5rem;
   
    margin-left: 0.2rem;
    display: flex;
    /* background-color: red; */
}
.box2 h6{
    width: 50%;
    font-size: 0.15rem;
    color: #fff;
    line-height: 0.4rem;
    text-align: center;
    background-color: #fd9800;
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
}
.box2 h5{
    width: 50%;
    font-size: 0.15rem;
    color: #fff;
    text-align: center;
    line-height: 0.4rem;
    background-color: #ff6501;
    border-top-right-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
}

   .box4{width:100%;display: flex;padding-top:0.1rem;}
   .box4 div{margin-top: 0.3rem;}
   .box3{display: flex;line-height: 0.3rem;}
   h4{font-size: 0.2rem;color:#ff5102;margin-right: 0.1rem;}
   h3{width:0.5rem;height:0.25rem;font-size: 0.15rem;font-weight: normal;color:#fff;background-color: #ff5102;text-align: center;border-radius: 0.1rem;line-height: 0.25rem;}
   img{width: 1rem; margin-right: 0.1rem;}
   h2{font-size: 0.15rem;font-weight: normal;}
   h1{background-color: #ff5102;width: 80%;margin:0 auto;margin-top: 0.3rem;border-radius: 0.3rem;
      font-weight: normal;font-size: 0.3rem;text-align: center;line-height: 0.5rem;color:#fff;
   }
   .box5{display: flex;justify-content: space-between;padding: 0.1rem;}
   .box6{font-size: 0.15rem;display: flex;width: 1rem;border:0.01rem solid #aaa;justify-content:space-around;border-radius: 0.05rem;text-align: center;line-height: 0.2rem;}
   .box6 span{font-size: 0.25rem;color:#a8a8a8;}
   .box6 h2{border-left: 0.01rem solid #aaa;border-right:0.01rem solid #aaa;width: 0.3rem;}
</style>