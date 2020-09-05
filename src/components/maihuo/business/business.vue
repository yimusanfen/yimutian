<template>
<div class="business_head">

    <businesszi v-for="(v,i) in business_arr" :key="i" :ids="v.id" :icon="v.ico" :spans="v.spans" :path="v.path" :colore="v.colors"></businesszi>
</div>
</template>

<script>
import businesszi from '#1/business/businesszi.vue'
export default {
    components: {
        businesszi
    },
    data() {
        return {
            business_arr: [{
                    id: 1,
                    ico: "iconfont icon-baoguoshuju",
                    spans: "供应管理",
                    path: "/ceshi",
                    colors: "#0bb294"
                },
                {
                    id: 2,
                    ico: "iconfont icon-shouhuo2",
                    spans: "运费模板",
                    path: "/ceshi",
                    colors: "#5fa6ff"
                },
                {
                    id: 3,
                    ico: "iconfont icon-konglong",
                    spans: "潜在客户",
                    path: "/ceshi",
                    colors: "#ffa415"
                },
                {
                    id: 4,
                    ico: "iconfont icon-wode",
                    spans: "客户管理",
                    path: "/ceshi",
                    colors: "#6bbcfe"
                },
                {
                    id: 5,
                    ico: "iconfont icon-jinhuodan",
                    spans: "订单管理",
                    path: "/ceshi",
                    colors: "#f7e6bb"
                },
                {
                    id: 6,
                    ico: "iconfont icon-baoguoshuju",
                    spans: "供应管理",
                    path: "/ceshi",
                    colors: "#f7e6bb"
                },
                {
                    id: 7,
                    ico: "iconfont icon-shouhuo2",
                    spans: "运费模板",
                    path: "/ceshi",
                    colors: "#f7e6bb"
                },
                {
                    id: 8,
                    ico: "iconfont icon-konglong",
                    spans: "潜在客户",
                    path: "/ceshi",
                    colors: "#0bb294"
                },
                {
                    id: 9,
                    ico: "iconfont icon-wode",
                    spans: "客户管理",
                    path: "/ceshi",
                    colors: "#5fa6ff"
                },
                {
                    id: 10,
                    ico: "iconfont icon-jinhuodan",
                    spans: "订单管理",
                    path: "/ceshi",
                    colors: "#f7e6bb"
                },
                {
                    id: 11,
                    ico: "iconfont icon-baoguoshuju",
                    spans: "供应管理",
                    path: "/ceshi",
                    colors: "#5fa6ff"
                },
                {
                    id: 12,
                    ico: "iconfont icon-shouhuo2",
                    spans: "运费模板",
                    path: "/ceshi",
                    colors: "#0bb294"
                },
                {
                    id: 13,
                    ico: "iconfont icon-konglong",
                    spans: "潜在客户",
                    path: "/ceshi",
                    colors: "#5fa6ff"
                },
                {
                    id: 14,
                    ico: "iconfont icon-wode",
                    spans: "客户管理",
                    path: "/ceshi",
                    colors: "#f7e6bb"
                },
                {
                    id: 15,
                    ico: "iconfont icon-jinhuodan",
                    spans: "订单管理",
                    path: "/ceshi",
                    colors: "#0bb294"
                },
                {
                    id: 16,
                    ico: "iconfont icon-baoguoshuju",
                    spans: "供应管理",
                    path: "/ceshi",
                    colors: "#f7e6bb"
                }
            ]
        }
    },
}
</script>

<style scoped>
.business_head {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    border-radius: 25px;
    margin-top: .2rem;
}
</style>
