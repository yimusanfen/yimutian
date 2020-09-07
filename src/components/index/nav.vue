<template>
<div class="head_5">
    <navzi v-for="(v,i) in this.$store.state.hxhome.arr.nav_arr" :key="i" :title1="v.title_1" :title2="v.title_2" :icon="v.icon" :color="v.color"> </navzi>
</div>
</template>

<script>
import navzi from '&c/index/navzi.vue'
export default {
    components: {
        navzi
    },
    mounted() {
        this.$store.dispatch("listact")
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
