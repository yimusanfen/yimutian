<template>
    <div>
        <Yc_newA :BBB="this.$store.state.objA.arr"></Yc_newA>
        <!-- {{this.$store.state.objA.arr}} -->
    </div>
</template>

<script>
    import Yc_newA from "#Y/yaocai_new/yc_newA.vue"
export default {
    components:{
        Yc_newA
    },
    created(){
      this.$store.dispatch("vuexaxiosA")
    }
}
</script>

<style scoped>

</style>