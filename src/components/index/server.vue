<template>
<div class="head_112">
    <serverzi v-for="(v,i) in this.$store.state.hxhome.arr.server_arr" :key="i" :imgs="v.imgs" :shuo="v.shuo" :jiage="v.jiage" :dizhi="v.dizhi" :path="v.path" :dizhi1="v.dizhi1" :kanguo="v.gankan"></serverzi>
</div>
</template>

<script>
import serverzi from '&c/index/serverzi.vue'
export default {
    components: {
        serverzi
    },
    mounted() {
        this.$store.dispatch("listact")
    },
}
</script>

<style scoped>
.head_112 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
}
</style>
