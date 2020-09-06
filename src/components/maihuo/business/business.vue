<template>
<div class="business_head">

    <businesszi v-for="(v,i) in this.$store.state.hxhome.arr.business_arr" :key="i" :ids="v.id" :icon="v.ico" :spans="v.spans" :path="v.path" :colore="v.colors"></businesszi>
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
.business_head {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    border-radius: 25px;
    margin-top: .2rem;
}
</style>
