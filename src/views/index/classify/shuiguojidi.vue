<template>
<div>
    <Topbar title="水果基地"></Topbar>
    <div v-for="(v, i) in this.$store.state.mhome.obj" :key="i" class="title-big">
        <img :src="v.img" />
        <div class="title-left">
            <p>{{v.title}}</p>
            <div class="title-right">
                <span class="pri"> {{v.price}}</span>
                <span class="rob"> {{v.rob}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Topbar from "./topbar.vue";
export default {
    components: {
        Topbar,
    },
    mounted() {
        this.$store.dispatch("listact");
    },
};
</script>

<style scoped>
.title-big {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid gainsboro;
    padding: 0.3rem 0rem;
}

.title-big img {
    width: 2rem;
    height: 2rem;
    margin-left: 0.2rem;
}

.title-left {
    width: 5rem;
    height: 3rem;
    margin-left: 0.2rem;
}

.title-left p {
    font-size: 0.3rem;
}

.title-right {
    width: 4.5rem;
    display: flex;
    justify-content: space-between;

}

.pri {
    font-size: 0.4rem;
    margin-top: 0.7rem;
    color: red;
    font-weight: 700
}

.rob {
    font-size: 0.3rem;
    color: white;
    margin-top: 0.5rem;
    background-color: skyblue;
    padding: 0.15rem 0.4rem;
    border-radius: 0.3rem;
}
</style>
