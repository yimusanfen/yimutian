<template>
    <div class="evalpage">
        <topbar class="topbar" title="交易评价"></topbar>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="ping">
            <p><span :class="this.active=='all'? 'act':''" @click="active='all';select()">全部({{evalobj.length}})</span>
                <span :class="this.active=='img'? 'act':''" @click="active='img';select()">有图(0)</span>
                <span :class="this.active=='zhui'? 'act':''" @click="active='zhui';select()">追评(0)</span>
                <span :class="this.active=='mid'? 'act':''" @click="active='mid';select()">中评{{this.$route.params.evalobj.filter(item=>item.eval=='mid').length}}</span></p>
            <p><span :class="this.active=='low'? 'act':''" @click="active='low';select()">差评{{this.$route.params.evalobj.filter(item=>item.eval=='low').length}}</span>
                <span :class="this.active=='good'? 'act':''" @click="active='good';select()">好评{{this.$route.params.evalobj.filter(item=>item.eval=='good').length}}</span></p>
        </div>
        <evacon :evalarr="this.evalobj" :isshow="this.isshow"></evacon>
        <!-- {{this.evalobj}} -->
        <br>
        <!-- {{this.$route.params.isshow}} -->
        
         
        </van-pull-refresh>
    </div>
</template>

<script>
import topbar from '&c/index/restaurant/topbar.vue'
import evacon from '&c/index/details/evacon.vue'
export default {
    data() {
        return {
            evalobj:this.$route.params.evalobj,
            isshow:this.$route.params.isshow,
            active:"all",
            isLoading: false,
        }

    },
    components:{
        evacon,
        topbar
    },
    methods: {
        select(){
            if(this.active=='all'){
                this.evalobj = this.$route.params.evalobj;
                this.isshow = this.$route.params.isshow;
            }else{
                this.evalobj = this.$route.params.evalobj.filter(item=>item.eval==this.active)
                this.isshow = this.evalobj.length;
            }
            
        },
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
            }, 1000);
        },
    },
}   
</script>

<style scoped>
    .act{
        background-color: hotpink;
    }
    .evalpage{
        position: relative;
    }
    .topbar{
        position: sticky;
        top: 0;
    }
    .ping{
        font-size: 0.3rem;
        width: 95%;
        margin: 0 auto;
    }
    .ping p{
        margin: 0.6rem 0;
    }
    .ping span{
        padding: 0.2rem 0.3rem;
        border-radius: 0.4rem;
        border: 1px solid #666;
        margin: 0 0.2rem;
    }
</style>