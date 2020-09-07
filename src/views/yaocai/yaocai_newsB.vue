<template>
    <div>
        <Yc_newB :CCC="this.$store.state.objA.arr"></Yc_newB>
       
    </div>
</template>

<script>
    import Yc_newB from "#Y/yaocai_new/yc_newB.vue"
export default {
    components:{Yc_newB},
    created(){
        this.$store.dispatch("vuexaxiosA")
	}
   
}
</script>

<style scoped>

</style>