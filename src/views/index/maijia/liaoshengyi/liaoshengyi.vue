<template>
<div id="liaoshengyi_head">
    <liao></liao>
    <lists></lists>
    <dibuber></dibuber>
</div>
</template>

<script>
import dibuber from '#1/dibuber.vue'
import liao from '&c/liao/liao.vue'
import lists from '&c/liao/lists.vue'
export default {
    components: {
        dibuber,
        liao,
        lists
    }
}
</script>

<style scoped>
#liaoshengyi_head {
    width: 100%;
}
</style>
