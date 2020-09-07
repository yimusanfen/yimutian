<template>
<div id="marketing_head">
    <div class="marketing_header">
        <span>推广营销</span>
    </div>
    <div class="marketing_nav">
        <businesszi v-for="(v,i) in this.$store.state.hxhome.arr.marketing_arr" :key="i" :ids="v.id" :icon="v.ico" :path="v.path" :spans="v.spans" :colors="v.colors"></businesszi>

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
