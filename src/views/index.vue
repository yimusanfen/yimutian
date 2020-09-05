<template>
<div class="is">
    <topBar></topBar>
    <div class="iss">
        <classify></classify>
        <melons></melons>
        <envelope></envelope>
        <navs></navs>
        <server></server>
    </div>
    <bottomBar></bottomBar>

</div>
</template>

<script>
import bottomBar from '&c/index/bottomBar.vue'
import topBar from '&c/index/topBar.vue'
import melons from '&c/index/melons.vue'
import classify from '&c/index/classify.vue'
import envelope from '&c/index/envelope.vue'
import navs from '&c/index/nav.vue'
import server from '&c/index/server.vue'
export default {
    components: {
        bottomBar,
        topBar,
        melons,
        classify,
        envelope,
        navs,
        server
    }
}
</script>

<style scoped>
.is {
    width: 100%;
    background-color: #F0F0F0;
    position: relative;
    display: flex;

}

.iss {
    position: absolute;
    top: 1.4rem;
    overflow-y: hidden;
    background-color: #F0F0F0;
    margin-bottom: 1.2rem;
}
</style>
