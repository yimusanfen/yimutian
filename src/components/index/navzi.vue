<template>
<div class="head_11">
    <div>
        <p>{{ title1 }}</p>
        <p>{{ title2 }}</p>
    </div>
    <i :class="icon" id="herrt" :style="{color:color}"></i>
</div>
</template>

<script>
export default {
    props: ["title1", "title2", "icon", "color"],
};
</script>

<style scoped>
.head_11 {
    width: 19%;
    height: 1.61rem;
    border-radius: .3rem .3rem .3rem .3rem;
    flex: 1;
    line-height: 0.4rem;
    margin-top: .2rem;
}

.head_11 p:nth-of-type(1) {
    font-size: .29rem;
    font-weight: bolder;
}

.head_11 div:nth-of-type(1) {
    text-align: left;
}

#herrt {
    margin: 0 auto;
}
</style>
