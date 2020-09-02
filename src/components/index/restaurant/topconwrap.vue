<template>
    <div class="wrap">
        <div class="topconwrap">
            <topcon class="item" v-for="(v,i) in arr" :key="i" :obj="v"></topcon>
        </div>
    </div>
</template>

<script>
import topcon from './topcon.vue'
export default {
    components:{
        topcon
    },
    props:['arr']

}
</script>

<style scoped>
    .wrap{
        width: 100%;
        height: 4.4rem;
        margin: 0 auto;
        background: linear-gradient(to bottom, #ff4135, #f2f2f2);
        /* background: linear-gradient(to left,#d3959b,#bfe6ba); */
        padding-bottom: 0.3rem;
       
    }
    .topconwrap{
        width: 95%;
        height: 4.4rem;
        display: flex;
        flex-flow: wrap;
        margin: 0 auto;
        background-color: white;
        border-radius: 0.3rem;
        padding-bottom: 0.2rem;
    }
    .item{
        padding: 2%;
        display: flex;
        flex-direction: column;
        width: 21%;
        text-align: center;
    }
</style>