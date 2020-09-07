<template>
<div class="botbar">
    <!-- <router-link class="botbar-item" v-for="(v,i) in botBarArr" :to="v.path" :key="i">{{v.name}}</router-link> -->
    <bottomBarzi v-for="(v,i) in this.$store.state.hxhome.arr.botBarArr_arr" :key="i" :icon="v.icon" :name="v.name" :path="v.path"></bottomBarzi>

</div>
</template>

<script>
import bottomBarzi from '&c/index/bottomBarzi.vue'
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
 components: {
        bottomBarzi
    },
    mounted() {
        this.$store.dispatch("listact")
    },
}
</script>

<style scoped>
    /* .botbar{
        width: 100%;
<<<<<<< HEAD
        height: 1rem;
=======
        height: 0.5rem;
>>>>>>> 2f6ab0eda520238e48f69772e2e21670f38b5beb
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
    } */
.botbar {
    width: 100%;
    height: .8rem;
    display: flex;
    position: fixed;
    bottom: 0;

    background-color: #ffffff;
}
</style>
