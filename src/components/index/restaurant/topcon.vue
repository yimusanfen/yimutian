<template>
    <div>
        <img :src="obj.imgsrc" alt="">
        <p>{{obj.title}}</p>
    </div>
</template>

<script>
export default {
    props:['obj']
}
</script>

<style scoped>
    img{
        width: 90%;
        height: 1.5rem;
        border-radius: 50%;
    }
</style>