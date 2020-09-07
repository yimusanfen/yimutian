<template>
    <div class="box">
        <OrderFormA></OrderFormA>
        <OrderFormB :ZZZ="data" :PPP="obj"></OrderFormB>
        <OrderFormC></OrderFormC>
       <!-- {{obj}} -->
       {{this.$route.query.saisai}}
       
    </div>
</template>

<script>
    import OrderFormA from "&c/orderForm/orderFormA.vue"
    import OrderFormB from "&c/orderForm/orderFormB.vue"
    import OrderFormC from "&c/orderForm/orderFormC.vue"
   
export default {
    components:{OrderFormA,OrderFormB,OrderFormC},
    data(){
        return{
            data:{},
            obj:""
        }
    },
    created() {
        this.data=JSON.parse(this.$route.query.xixi);
        // this.data=this.$route.params.dahuang
        this.obj =JSON.parse(this.$route.query.saisai)
    }       
}
</script>

<style scoped>
.box{background-color: #e2e2e2;padding-bottom: 2rem;}
</style>