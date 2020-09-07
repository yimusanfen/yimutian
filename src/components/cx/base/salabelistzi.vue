<template>
<div class="details">
    <img :src="imgs" />
    <br />
    <p class="details1">{{ shuo }}</p>
    <br />
    ￥<span class="details2">{{ jiage }}</span>/斤<span class="details3">{{ dizhi }}</span>
</div>
</template>

<script>
export default {
    props: ["imgs", "shuo", "jiage", "dizhi"],
};
</script>

<style scoped>
img {
     width: 3.43rem;
    height: 3.43rem;
}

.details {
    width: 49.5%;
    color: red;
    font-size: 0.32rem;
}

.details1 {
    font-size: 0.27rem;
    color: #3e3e3e;
}

.details2 {
    font-size: 0.47rem;
    color: red;
}

.details3 {
    font-size: 0.35rem;
    color: #cccccc;
}
</style>
