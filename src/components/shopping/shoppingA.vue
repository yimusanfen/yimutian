<template>
    <div>
        <ShoppingD :EEE="DDD.image"></ShoppingD>
        <ShoppingE :FFF="DDD"></ShoppingE>
        <ShoppingF></ShoppingF>
        <ShoppingB :XXX="DDD"></ShoppingB>
        
    </div>
</template>

<script>
    import ShoppingB from "./shoppingB.vue"
    import ShoppingD from "./shoppingD.vue"
    import ShoppingE from "./shoppingE.vue"
    import ShoppingF from "./shoppingF.vue"
export default {
    components:{
        ShoppingB,ShoppingD,ShoppingE,ShoppingF
    },
    props:["DDD"]
}
</script>

<style scoped>

</style>