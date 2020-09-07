<template>
<div class="head_111">
    <router-link :to="{path:path,query:{dizhi1:dizhi1,kanguo:kanguo}}">
        {{kanguo}}
        <img :src="imgs">
        <br>
        <p class="head_113">{{shuo}}</p>
        <br>
        ￥<span class="head_4">{{jiage}}</span>/斤<span class="head_5">{{dizhi}}</span>
    </router-link>
</div>
</template>

<script>
export default {
    props: ["imgs", "shuo", "jiage", "dizhi", "path", "dizhi1", "kanguo"]
}
</script>

<style scoped>
img {
    width: 3.43rem;
    height: 3.43rem;

}

.head_111 {
    width: 49.5%;
    color: red;
    font-size: .32rem;
}

.head_113 {
    font-size: .27rem;
    color: #3E3E3E;
}

.head_4 {
    font-size: .47rem;
    color: red;
}

.head_5 {
    font-size: .35rem;
    color: #cccccc;
}
</style>
