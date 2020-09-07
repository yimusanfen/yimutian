<template>
<div class="botbar-item">
    <router-link :to="path">
        <em :class="icon" id="span_11"></em>
        <br>
        <span>{{name}}</span>

    </router-link>
</div>
</template>

<script>
export default {
    props: ["name", "icon", "path"]
}
</script>

<style scoped>
.botbar-item {
    flex: 1;
    text-align: center;
    line-height: .25rem;
    padding-top: .2rem;
}

#span_11 {
    color: #cccccc;
    font-size: .6rem;

}

.router-link-active {
    color: skyblue;
}

.router-link-active #span_11 {
    color: skyblue;

}

span {
    color: #000
}
</style>
