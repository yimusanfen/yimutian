<template>
    <div>
        <topbar class="topbar" v-if="newdata[0]" :title="newdata[0].headtitle" @pao="fu"></topbar>
        <img class="adver" :src="newdata[0].adver"  v-if="newdata[0].hasadver&&newdata[0]">
        <h2 v-else>促销推荐</h2>
        <listtop :listtop="newdata[0].topdata"></listtop>

        <van-tabs v-model="active" sticky offset-top="1.2rem" style="background-color: #ff4135;padding-bottom: 0.2rem;">
            <van-tab v-for="index in newdata[0].classify.length" :key="index" :title="newdata[0].classify[index-1]" >
              <seckill :newarr="newdata[0].data.filter((item=>item.categoryid==index))"></seckill>
            </van-tab>
        </van-tabs>

        <!-- {{this.$store.state}} -->
        <!-- {{this.$route.params.index}} -->
        <!-- {{newdata[0].topdata}} -->




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
import listtop from '&c/index/restaurant/listtop.vue'
import seckill from '&c/index/restaurant/seckill.vue'
export default {
    mixins:[mixin],
    components:{
        topbar,
        listtop,
        seckill
    },
    data() {
        return {
            active:0
        }
    },
    computed:{
        newdata(){
         
            return this.$store.state.resmodule.liebiaoarr.filter(item=>item.category==this.$route.params.index)
        }
    },
    mounted(){
        
    },
    created () {
        this.$store.dispatch("liebiao")
        // 在页面加载时读取localStorage里的状态信息
        if (localStorage.getItem("data") ) { //判断data中是否有数据，有就存起来
            //replaceState替换数据 Object.assign合并对象
            this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(localStorage.getItem("data"))))
        } 
        //在页面刷新时将vuex里的信息保存到localStorage里
        window.addEventListener("beforeunload",()=>{   //使用addEventListener监听页面刷新
            localStorage.setItem("data",JSON.stringify(this.$store.state))
        })
      },
    
}
</script>

<style scoped>
    .topbar{
        position: sticky;
        top: 0;
    }
    .adver{
        width: 100%;
    }
    h2{
        width: 100%;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        font-size: 0.4rem;
        font-weight: bolder;
    }
</style>