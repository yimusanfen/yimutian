<template>
    <div class="sales">
        <h1>{{title}}</h1>
        <div class="con">
            <salesitem class="item" v-for="(v,i) in newsales" :key="i" :obj="v"></salesitem>
        </div>
    </div>
</template>

<script>
import salesitem from "./salesitem.vue"
export default {
    components:{
        salesitem
    },
    props:['title'],
    computed:{
        newsales(){
            return this.$store.state.resmodule.resindex.filter(item=>item.categoryid==1)
        }
    }
}
</script>

<style scoped>
    .sales{
        background-color: #f2f2f2;
    }
    h1{
        height: 1.2rem;
        line-height: 1.2rem;
        font-size: 0.4rem;
        font-weight: bolder;
        text-align: center;
        
    }
    .con{
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