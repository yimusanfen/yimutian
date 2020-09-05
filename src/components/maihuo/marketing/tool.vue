<template>
<div id="tool_head">
    <div class="tool_header">
        <span>推广营销</span>
    </div>
    <div class="tool_nav">
        <businesszi v-for="(v,i) in tool_arr" :key="i" :ids="v.id" :icon="v.ico" :path="v.path" :spans="v.spans" :colors="v.colors"></businesszi>

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
            tool_arr: [{
                    id: 1,
                    ico: "iconfont icon-shouhou2",
                    path: "/ceshi2",
                    spans: "精准推广",
                    colors: '#000'
                },
                {
                    id: 2,
                    ico: "iconfont icon-fahuo",
                    path: "/ceshi2",
                    spans: "万能推广包",
                    colors: '#000'
                }
            ]
        }
    },
}
</script>

<style scoped>
#tool_head {
    width: 100%;
    overflow: hidden;
}

.tool_header {

    height: .8rem;

    line-height: .8rem;
    padding-left: .3rem;
    font-size: .3rem;
    font-weight: bold;
}

.tool_nav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    border-radius: 25px;

}

.tool_nav>i {
    color: #000;
}
</style>
