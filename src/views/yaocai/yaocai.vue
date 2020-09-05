<template>
    <div class="aa">
        <YaocaiA :OOO="this.$store.state.objA.arr"></YaocaiA>
        <YaocaiB></YaocaiB>
        <YaocaiC :AAA="this.$store.state.objA.arrYC_cx"></YaocaiC>
        <Yaocai_zujian v-if="this.$store.state.objA.arr" :WWW="this.$store.state.objA.arr"></Yaocai_zujian>
        <!-- {{this.$store.state.objA.arrYC_cx}} -->
    </div>
</template>

<script>
    import YaocaiA from "#Y/yaocaiA.vue"
    import YaocaiB from "#Y/yaocaiB.vue"
    import YaocaiC from "#Y/yaocaiC.vue"
    import Yaocai_zujian from "#Y/dongtai/yaocai_zujian.vue"
export default {
    components:{
        YaocaiA,YaocaiB,YaocaiC,Yaocai_zujian
    },
    created(){
      this.$store.dispatch("vuexaxiosA")
    }
}
</script>

<style scoped>

</style>