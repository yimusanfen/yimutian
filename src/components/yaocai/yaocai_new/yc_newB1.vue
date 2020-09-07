<template>
    <div class="box">
        <div class="box1" v-for="(v,i) in VVV" :key="i">
            <img :src="v.img">
            <div>
                <h3>{{v.name}}</h3>
                <span  class="box2"><p>￥{{v.price1}}</p><h4>立马抢</h4></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["VVV"],
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
/* .box{width: 100%;} */
.box1{display: flex;margin-top: 0.1rem;padding-bottom: 0.1rem;border-bottom: 0.01rem solid #aaa;}
.box1 img{width: 1rem;margin-left: 0.1rem;margin-right: 0.05rem;}
.box2{display: flex;margin-top:0.3rem}
.box2 p{font-weight: bold;color: red;}
.box2 h4{width:0.7rem;background-color: #ff617f;line-height: 0.3rem;border-radius: 0.15rem;
text-align: center;color:#fff;margin-left: 1.2rem;
}
</style>