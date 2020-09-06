<template>
<div id="rich_head">
    <div class="rich_header">
        <span>致富经</span>
        <span>更多></span>
    </div>
    <richzi v-for="(v,i) in this.$store.state.hxhome.arr.rich_arr" :key="i" :ids="v.ids" :img="v.img" :title="v.title" :heading="v.heading" :path="v.path"></richzi>
</div>
</template>

<script>
import richzi from '#1/rich/richzi.vue'
export default {
    components: {
        richzi
    },
    mounted() {
        this.$store.dispatch("listact")
    },
}
</script>

<style scoped>
#rich_head {
    width: 100%;
    background-color: #ffffff;
    border-radius: 15px;
    overflow: hidden;
}

.rich_header {

    height: .8rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

}

.rich_header span:nth-of-type(1) {
    margin-left: .3rem;
    font-size: .3rem;
    font-weight: bolder;
}

.rich_header span:nth-of-type(2) {
    margin-right: .3rem;
    font-size: .25rem;
    color: #999999;
}
</style>
