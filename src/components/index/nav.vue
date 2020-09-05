<template>
<div class="head_5">
    <navzi v-for="(v,i) in arr" :key="i" :title1="v.title_1" :title2="v.title_2" :icon="v.icon" :color = "v.color"> </navzi>
</div>
</template>

<script>
import navzi from '&c/index/navzi.vue'
export default {
    components: {
        navzi
    },
    data() {
        return {
            arr: [{
                    title_1: "全国行情",
                    title_2: "全国走货",
                    icon: "iconfont icon-hangqing",
                    color: "#58E4B3"
                },
                {
                    title_1: "市场代购",
                    title_2: "专人采购",
                    icon: "iconfont icon-baoguoshuju",
                    color: "#FBD126"
                },
                {
                    title_1: "市场代卖",
                    title_2: "轻松带货",
                    icon: "iconfont icon-konglong",
                    color: "#AEE950"
                },
                {
                    title_1: "直播助农",
                    title_2: "百县行",
                    icon: "iconfont icon-shexiangji",
                    color: "#FB764D"
                },
                {
                    title_1: "品牌馆",
                    title_2: "保供稳价",
                    icon: "iconfont icon-xin1",
                    color: "#9FD3EF"
                }
            ]
        }
    },
}
</script>

<style scoped>
.head_5 {
    width: 100%;
    height: 1.63ren;
    background-color: #ffffff;
    display: flex;
    text-align: center;
    align-items: center;
}

.head_5>.head_11:nth-of-type(1)>#herrt {
    color: red;
}
</style>
