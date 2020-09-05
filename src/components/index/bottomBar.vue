<template>
<div class="botbar">
    <bottomBarzi v-for="(v,i) in botBarArr" :key="i" :icon="v.icon" :name="v.name" :path="v.path"></bottomBarzi>

</div>
</template>

<script>
import bottomBarzi from '&c/index/bottomBarzi.vue'
export default {
    data() {
        return {
            botBarArr: [{
                    icon: "iconfont icon-dianpu",
                    name: '首页',
                    path: '/index'
                },
                {
                    icon: "iconfont icon-jinhuodan",
                    name: '进货单',
                    path: '/purchaselist'
                },
                {
                    icon: "iconfont icon-faxian",
                    name: '发现',
                    path: '/discover'
                },
                {
                    icon: "iconfont icon-liaotian",
                    name: '聊生意',
                    path: '/talkbusiness'
                },
                {
                    icon: "iconfont icon-wode",
                    name: '我的',
                    path: '/mine'
                },

            ]
        }
    },
    components: {
        bottomBarzi
    }
}
</script>

<style scoped>
.botbar {
    width: 100%;
    height: .8rem;
    display: flex;
    position: fixed;
    bottom: 0;

    background-color: #ffffff;
}
</style>
