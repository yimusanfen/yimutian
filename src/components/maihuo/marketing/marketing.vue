<template>
<div id="marketing_head">
    <div class="marketing_header">
        <span>推广营销</span>
    </div>
    <div class="marketing_nav">
        <businesszi v-for="(v,i) in marketing_arr" :key="i" :ids="v.id" :icon="v.ico" :path="v.path" :spans="v.spans" :colors="v.colors"></businesszi>

    </div>
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
            marketing_arr: [{
                    id: 1,
                    ico: "iconfont icon-shouhou2",
                    path: "/ceshi1",
                    spans: "精准推广",
                    colors: '#000'
                },
                {
                    id: 2,
                    ico: "iconfont icon-fahuo",
                    path: "/ceshi1",
                    spans: "万能推广包",
                    colors: '#000'
                },
                {
                    id: 3,
                    ico: "iconfont icon-dianhua",
                    path: "/ceshi1",
                    spans: "品牌广告",
                    colors: '#000'
                }, {
                    id: 4,
                    ico: "iconfont icon-fahuo",
                    path: "/ceshi1",
                    spans: "生意热门",
                    colors: '#000'
                }, {
                    id: 5,
                    ico: "iconfont icon-baoguoshuju",
                    path: "/ceshi1",
                    spans: "基地招商",
                    colors: '#000'
                }
            ]
        }
    },
}
</script>

<style scoped>
#marketing_head {
    width: 100%;
    overflow: hidden;
}

.marketing_header {

    height: .8rem;

    line-height: .8rem;
    padding-left: .3rem;
    font-size: .3rem;
    font-weight: bold;
}

.marketing_nav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    border-radius: 25px;

}

.marketing_nav>i {
    color: #000;
}
</style>
