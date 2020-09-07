<template>
<div class="classify">

    <Classifyzi v-for="(v,i) in this.$store.state.hxhome.arr.classify_arr" :key="i" :cass="v.cass" :name="v.name" class="zi" :to="v.path"></Classifyzi>

</div>
</template>

<script>
import Classifyzi from "&c/index/classifyzi.vue"
export default {
    components: {
        Classifyzi
    },
    mounted() {
        this.$store.dispatch("listact")
    },
}
</script>

<style scoped>
    /* .classify{
        width: 100%;
        height: 2rem;
        flex-flow: wrap;
        display: flex;
    }
    .classify-item{
        width: 20%;
    } */
    .classify {
    width: 100%;
    height: 3rem;
    display: flex;
    margin-top: .4rem;
    flex-flow: wrap;

}

.zi {
    width: 20%;
    height: 1.4rem;
}


</style>
