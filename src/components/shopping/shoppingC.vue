<template>
    <div class="box" >
        <div class="box1">
            <span  class="el-icon-back" @click="fun()"></span>
            <span><p>详情</p></span>
            <span class="el-icon-shopping-cart-2"></span>
            <span class="el-icon-more" @click="funb()"></span>
            <div class="box3" v-show="bool">{{num}}</div>
        </div>
       
        <div class="box2" v-show="show">
            <p>回到首页</p>
            <p>消息</p>
            <p>分享供应</p>
            <p>举报供应</p>
        </div>
        
    </div>
</template>

<script>
export default {
   data(){
       return{
           show:false,
           bool:"true",
           num:'2'
       }
   },
   created(){
       if(this.num<1){
           this.bool=false
       }
   },
    methods:{
        fun(){
            this.$router.go(-1)
        },
        funb(){
            this.show=!this.show
        },
        
    }
}
</script>

<style scoped>

.box1{display: flex;background-color: black;  z-index: 50;}
.box1 span{color:#fff;font-size: 0.25rem;font-weight: bold;line-height: 0.4rem;}
.el-icon-back{color:#fff; margin-left: 0.1rem;}
.box1 p{margin-left: 1.3rem;}
.el-icon-shopping-cart-2{color:#fff;margin-left: 0.8rem;}
.el-icon-more{color:#fff;font-size: 0.2rem;font-weight: bold;line-height: 0.4rem;margin-left: 0.2rem;}
.box2{width: 1rem;background-color: #fff;position: absolute;top: 0.3rem;left: 2.7rem;border-radius: 0.1rem;}
.box2 p{font-size: 0.15rem;line-height: 0.3rem;border-bottom: 0.01rem solid #aaa;text-align: center;}
.box3{width: 0.15rem;height: 0.15rem;position: absolute;top:0.06rem;left:3.1rem;background-color: red;
border-radius: 0.3rem;font-size: 0.13rem;color: #fff;text-align: center;line-height: 0.15rem;
}
</style>