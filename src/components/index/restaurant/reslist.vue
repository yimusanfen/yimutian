<template>
    <div class="reslist">
        <van-tabs v-model="active" sticky offset-top="1.2rem" style="background-color: #ff4135;">
            <van-tab v-for="index in 4" :key="index" :title="listtitle[index-1]">
              <!-- 引用列表组件 -->
              <listcom :num="index"></listcom>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import listcom from '&c/index/restaurant/listcom.vue'
export default {
    components:{
        listcom
    },
    data() {
        return {
            active:"2",
            listtitle:["为你推荐","销量排行","最新上架","卖家排行"],
            
        }
    },
}
</script>

<style scoped>
   
    .van-sticky{
        height: 0.8rem;
    }
    .van-tabs__wrap{
        height: 0.8rem;
    }
    .van-tabs__nav{
        height: 0.8rem;
    }
    .van-tab{
        height: 0.8rem;
        font-size: 0.3rem;
        padding: 0;
    }
    .van-tab__text{
        height: 100%;
        line-height: 0.8rem;
    }
    .van-button{
        background-color: red;
    }
</style>