<template>
<div class="lists_head">
    <listszi v-for="(v,i) in this.$store.state.hxhome.arr.lists_arr" :key="i" :id="v.id" :icon="v.icon" :title="v.title" :small="v.small" :date="v.date" :color="v.color" :path="v.path"></listszi>
</div>
</template>

<script>
import listszi from '&c/liao/listszi.vue'
export default {
    components: {
        listszi
    },
    mounted() {
        this.$store.dispatch("listact")
    },
}
</script>

<style scoped>
.lists_head {

    background-color: #ffffff;
    border-radius: 15px;
    padding-left: .2rem;
    overflow: hidden;
    margin: 10px 0;
}
</style>
