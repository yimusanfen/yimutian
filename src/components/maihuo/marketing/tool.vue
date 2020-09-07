<template>
<div id="tool_head">
    <div class="tool_header">
        <span>推广营销</span>
    </div>
    <div class="tool_nav">
        <businesszi v-for="(v,i) in this.$store.state.hxhome.arr.tool_arr" :key="i" :ids="v.id" :icon="v.ico" :path="v.path" :spans="v.spans" :colors="v.colors"></businesszi>

    </div>
</div>
</template>

<script>
import businesszi from '#1/business/businesszi.vue'
export default {
    components: {
        businesszi
    },
    mounted() {
        this.$store.dispatch("listact")
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
