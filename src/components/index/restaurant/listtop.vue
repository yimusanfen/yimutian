<template>
    <div class="listtop">
            <salesitem class="item" v-for="(v,i) in listtop" :key="i" :obj="v"></salesitem>
    </div>
</template>

<script>
import salesitem from "./salesitem.vue"
export default {
    components:{
        salesitem
    },
    props:['listtop'],
}
</script>

<style scoped>
    .listtop{
        background-color: #f2f2f2;
        width: 96%;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        background-color: #f2f2f2;
    }
    .item{
        width: 30%;
        margin: 1%;
        margin: 0.2rem auto;
    }
</style>