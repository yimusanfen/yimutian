<template>
    <div class="topcon" @click="toliebiao(obj.id)">
        <img :src="obj.imgsrc" alt="">
        <p>{{obj.title}}</p>
    </div>
</template>

<script>

export default {
    props:['obj'],
    methods: {
        toliebiao(i){
            console.log("aaaaa",i)
            this.$router.push({name:'liebiao',params:{index:i}})
        }
    },
}
</script>

<style scoped>
    img{
        width: 90%;
        margin: 0 auto;
        height: 1.5rem;
        border-radius: 50%;
    }
</style>