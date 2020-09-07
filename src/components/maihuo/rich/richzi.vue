<template>
<div class="richzi_head">
    <router-link :to="path" class="router">
        <img :src="img">
        <div class="richzi_nav">
            <span>{{title}}</span>
            <span>{{heading | jiajie}}</span>
        </div>
    </router-link>

</div>
</template>

<script>
export default {
    props: ["ids", "img", "title", "heading", "path"],
    computed: {

    },
    filters: {
        jiajie(val) {
            return val.substr(0, 15) + "..."
        }
    }
}
</script>

<style scoped>
.richzi_head {
    width: 100%;
    margin: .2rem 0;
}

img {
    width: 1.5rem;
    height: 1.1rem;
}

.router {
    width: 100%;
    display: flex;
}

.richzi_nav {
    display: flex;
    flex-direction: column;
    margin-left: .1rem;
}

.richzi_nav span:nth-of-type(1) {
    font-size: .3rem;
    color: #000;
    font-weight: bolder;
}

.richzi_nav span:nth-of-type(2) {
    font-size: .25rem;
    color: #000;
    white-space: nowrap;
}
</style>
