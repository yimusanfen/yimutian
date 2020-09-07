<template>
    <div class="dis-item" @click="go(obj.to)">
        <img :src="obj.imgsrc" alt="">
        <span>{{obj.title}}</span>
        <!-- <img src="images/discover/index/dis1.jpg" alt="">
        <span>生意圈</span> -->
        <i class="iconfont icon-iconfontjiantou5"></i>
    </div>
</template>

<script>
export default {
    props:{
        obj:{
            type:Object,
            required:true
        }
    },
    methods: {
        go(path){
            this.$router.push(path)
        }
    },
}
</script>

<style scoped>
    .dis-item{
        display: flex;
        width: 92%;
        height: 1rem;
        background-color:white;
        align-items: center;
        justify-content: space-between;
        margin-bottom: .1rem;
        margin: 0.2rem auto;
        border-radius: .2rem;
    }
    img{
        width: .78rem;
        height: .78rem;
        margin-left: 0.2rem;
    }
    span{
        font-size: .3rem;
    }
    i{
        font-size: .3rem;
        margin-right: 0.3rem;
    }
</style>