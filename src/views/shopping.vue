<template>
    <div class="shopping">
        <ShoppingC></ShoppingC>
       
        <ShoppingA :DDD="data"></ShoppingA>

    
    </div>
</template>

<script>
import ShoppingC from "&c/shopping/shoppingC.vue"
import ShoppingA from "&c/shopping/shoppingA.vue"
export default {
    components:{
        ShoppingC,ShoppingA
    },
    data(){
        return{
            data:{}
        }
    },
    created() {
        this.data=JSON.parse(this.$route.query.dahuang);
        // this.data=this.$route.params.dahuang
    }

      
}
</script>

<style scoped>
    .box{
        width: 100%;
        position: fixed;
        top: 0;
        z-index:99
    }
    .shopping{
        width: 100%;
    }

</style>