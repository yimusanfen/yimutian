<template>
<div class="head_2">
    <img :src="img">
    <br>
    ￥<span class="span_4">{{jg}}</span>/斤
</div>
</template>

<script>
export default {
    props: ["img", "jg"]
}
</script>

<style scoped>
img {
    width: 1.46rem;
    height: 1.77rem;
    margin: 0 auto;
    align-items: center;
}

.head_2 {
    color: red;
    flex: 1;
}

.span_4 {
    font-size: .32rem;
    color: red;
}
</style>
