<template>
<div id="heads">
    <span v-for="(v,i) in this.$store.state.hxhome.arr.melons_arr" :key="i" class="sgfl">{{v}}</span>
</div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch("listact")
    }
}
</script>

<style scoped>
#heads {
    width: 100%;
    height: 1.09rem;
    display: flex;
    flex-flow: wrap;
    background-color: #ffffff;
    margin-top: .2rem;
    text-align: center;
    align-items: center;
    border-radius: .25rem .25rem .25rem .25rem;
}

.sgfl {
    width: 20%;

}
</style>
