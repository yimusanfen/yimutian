<template>
    <div>
        <img :src="adver" alt="">
    </div>
</template>

<script>
export default {
    props:['adver']
}
</script>

<style scoped>
    div{
        background-color: #f2f2f2;
    }
    img{
        width: 95%;
        margin: 0 auto;
    }
</style>