<template>
<div class="botbar">
    <bottomBarzi v-for="(v,i) in this.$store.state.hxhome.arr.botBarArr_arr" :key="i" :icon="v.icon" :name="v.name" :path="v.path"></bottomBarzi>

</div>
</template>

<script>
import bottomBarzi from '&c/index/bottomBarzi.vue'
export default {
    components: {
        bottomBarzi
    },
    mounted() {
        this.$store.dispatch("listact")
    },
}
</script>

<style scoped>
.botbar {
    width: 100%;
    height: .8rem;
    display: flex;
    position: fixed;
    bottom: 0;

    background-color: #ffffff;
}
</style>
