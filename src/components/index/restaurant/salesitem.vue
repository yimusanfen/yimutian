<template>
    <div class="itemzi">
        <img :src="obj.smallimg" alt="">
        <p class="title">{{obj.title|titlesl}}</p>
        <p class="price"><strong>{{obj.newprice|adddao}}</strong><span>{{obj.oldprice.toFixed(2)}}</span></p>
    </div>
</template>

<script>
export default {
    props:["obj"],
    filters:{
        titlesl(val){
            console.log(val)
            return val.length>13? val.slice(0,14)+'...':val
        },
        adddao(val){
            return "￥"+val.toFixed(2)+"/斤"
        }
    }
}
</script>

<style scoped>
    .itemzi{
        width: 100%;
        background-color: white;
        border-radius: 0.2rem;
        overflow: hidden;
    }
    img{
        width: 100%;
    }
    .title{
        font-size: 0.3rem;
    }
    .price strong{
        font-size: 0.3rem;
        color: #ff5001;
    }
    .price span{
        color: #999;
        text-decoration: line-through;
    }
</style>