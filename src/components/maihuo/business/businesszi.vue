<template>
<div class="businesszi_head">
    <router-link :to="{path:path,query:{id:ids}}">
        <i :class="icon" :style="{backgroundColor:colore,color:colors}"></i>
        <br>
        <p>{{spans}}</p>
    </router-link>
</div>
</template>

<script>
export default {
    props: ["ids", "icon", "spans", "path", "colore", "colors"]
}
</script>

<style scoped>
.businesszi_head {
    width: 20%;
    text-align: center;
    padding: .3rem .15rem;
}

i {
    font-size: .6rem;
    padding: .1rem;
    border-radius: 10px;
    margin-bottom: .2rem;
    color: #ffffff;
}

p {
    color: #666666;
    font-size: .3rem;
    margin-top: .1rem;
}
</style>
