<template>
<div class="botbar">
    <router-link class="botbar-item" v-for="(v,i) in botBarArr" :to="v.path" :key="i">{{v.name}}</router-link>
</div>
</template>

<script>
export default {
    data() {
        return {
            botBarArr: [{
                    name: '首页',
                    path: '/index'
                },
                {
                    name: '进货单',
                    path: '/purchaselist'
                },
                {
                    name: '发现',
                    path: '/discover'
                },
                {
                    name: '聊生意',
                    path: '/talkbusiness'
                },
                {
                    name: '我的',
                    path: '/mine'
                },

            ]
        }
    },
}
</script>

<style scoped>
    .botbar{
        width: 100%;
        height: 1rem;
        display: flex;
        position: fixed;
        bottom: 0;
        background-color: white;
    }
    .botbar-item{
        flex: 1;
        text-align: center;
        align-items: center;
        line-height: 1rem;
    }
</style>
