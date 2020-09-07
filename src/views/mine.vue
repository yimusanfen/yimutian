<template>
<div>
    <wodehead></wodehead>
    <neirong></neirong>
    <bottomBar></bottomBar>

</div>
</template>

<script>
import bottomBar from '&c/index/bottomBar.vue'
import wodehead from '&c/wode/wodehead.vue'
import neirong from '&c/wode/neirong.vue'
export default {
    components: {
        bottomBar,
        wodehead,
        neirong
    }
}
</script>

<style scoped>
</style>
