<template>
    <div class="discover">
        <h1>发现</h1>
        <disindex v-for="(v) in listarr" :key="v.id" :obj="v"></disindex>
        <bottomBar class="botbar"></bottomBar>
        
    </div>
    
</template>

<script>
import bottomBar from '&c/index/bottomBar.vue'
import disindex from '&c/discover/disindex.vue';
export default {
    components:{
        bottomBar,
        disindex
    },
    data(){
        return {
            listarr:[
                {id:1,title:"生意圈",imgsrc:"images/discover/index/dis1.jpg"},
                {id:2,title:"广场",imgsrc:"images/discover/index/dis2.jpg"},
                {id:3,title:"新农视频",imgsrc:"images/discover/index/dis3.jpg"},
                {id:4,title:"直播",imgsrc:"images/discover/index/dis4.jpg"},
                {id:5,title:"全国行情",imgsrc:"images/discover/index/dis5.jpg"},
                {id:6,title:"市场代卖",imgsrc:"images/discover/index/dis6.jpg"},
                {id:7,title:"市场代采",imgsrc:"images/discover/index/dis7.jpg"},
                {id:8,title:"产地找货",imgsrc:"images/discover/index/dis8.jpg"},

            ]
        }
    },
    mounted(){
        
    },
}
</script>

<style scoped>
    .discover{
        width: 100%;
        height: 100%;
        background-color:#f2f2f2 ;
        position: relative;
        
    }
    h1{
        font-size: .5rem;
        font-weight: bolder;
        text-align: center;
        height: 1.3rem;
        background-color:#f2f2f2;
        line-height: 1.6rem;
    }
    .botbar{
        position: fixed;
        bottom: 0;
    }
</style>