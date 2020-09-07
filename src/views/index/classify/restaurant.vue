<template>
    <div class="resta">
        <topbar class="topbar" title="餐厅食材" @pao="fu"></topbar>
        <search search="搜索您感兴趣的食材">
            <p class="key" slot="keyword"><span>包邮</span>|<span>折扣</span>|<span>速达</span>|<span>保障</span></p>
        </search>
        <topconwrap :arr="conarr"></topconwrap>
        <adver :adver="adversrc"></adver>
        <sales title="销量排行榜"></sales>
        <reslist></reslist>
        <!-- 分享弹出框开始 -->
        <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        />
        <!-- 分享弹出框结束 -->

    </div>
</template>

<script>
import {mixin} from '&mi/index.js'
import topbar from '&c/index/restaurant/topbar.vue'
import search from '&c/index/restaurant/search.vue'
import topconwrap from '&c/index/restaurant/topconwrap.vue'
import adver from '&c/index/restaurant/adver.vue'
import sales from '&c/index/restaurant/sales.vue'
import reslist from '&c/index/restaurant/reslist.vue'
export default {
    mixins:[mixin],
    components:{
        topbar,
        search,
        topconwrap,
        adver,
        sales,
        reslist
    },
    data(){
        return {
            adversrc:"images/restaurant/index/adver.jpg",
            conarr:[
                {id:1,title:"禽肉",imgsrc:"images/restaurant/index/topbar1.jpg"},
                {id:2,title:"蛋类",imgsrc:"images/restaurant/index/topbar2.jpg"},
                {id:3,title:"调料",imgsrc:"images/restaurant/index/topbar3.jpg"},
                {id:4,title:"酒饮",imgsrc:"images/restaurant/index/topbar4.jpg"},
                {id:5,title:"蘑菇干货",imgsrc:"images/restaurant/index/topbar5.jpg"},
                {id:6,title:"冻品水产",imgsrc:"images/restaurant/index/topbar6.jpg"},
                {id:7,title:"米面粮油",imgsrc:"images/restaurant/index/topbar7.jpg"},
                {id:8,title:"新鲜果蔬",imgsrc:"images/restaurant/index/topbar8.jpg"},
            ],
            
        }
    },
    methods:{
        
    },
    created(){
        this.$store.dispatch("salesrank")
        
      },
    
}
</script>

<style scoped>
    .key{
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.3rem;
        color: white;

    }
    .key span{
        margin: 0 0.2rem;
    }
    .resta{
        position: relative;
    }
    .topbar{
        position: sticky;
        top: 0;
    }
</style>