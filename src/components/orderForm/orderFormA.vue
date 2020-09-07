<template>
    <div>
        <div class="box">
            <i class="el-icon-back" @click="fun()"></i><h3>确认订单</h3>
        </div>
        <div class="box1">
           <h5 class="el-icon-location-outline">收货地址</h5><br>
           <span>
            <h5 class="el-icon-location-information"></h5> <p>选择地址</p>
           </span>
           
        </div>
    </div>
    
</template>

<script>
export default {
    methods:{
        fun(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    
.box{display: flex; line-height: 0.5rem;}
.el-icon-back{font-size: 0.4rem;margin-left: 0.1rem;margin-top: 0.05rem;}
.box h3{font-size: 0.25rem;margin-left: 0.9rem;}
.box1{width: 90%;background-color: #fff;margin:0 auto;border-radius: 0.1rem;padding: 0.1rem;}
.box1 span{display: flex;justify-content: space-between;margin-top: 0.1rem;}
.el-icon-location-information{font-size: 0.25rem;}
.box1 p{font-size: 0.16rem;color: #01ac8c;}
</style>