<template>
<div>
    <topbar title="19.9专区" class="topbar"></topbar>
    <router-link to="/details">
        <div v-for="(v,i) in this.$store.state.zhuanqu.arr" :key="i" class="title-big">
            <img :src="v.img">
            <div class="title-left">
                <p>{{v.title}}</p>
                <div class="title-right">
                    <span class="pri">{{v.price}}</span>
                    <span class="rob">{{v.rob}}</span>
                </div>
            </div>
        </div>

    </router-link>

</div>
</template>

<script>
import topbar from "./topbar.vue"
export default {
    components: {
        topbar
    },
    methods: {
        goback() {
            this.$router.go(-1)
        }
    },
    mounted() {
        this.$store.dispatch('zhuanqulist')
    },
}
</script>

<style scoped>
.topbar {
    position: sticky;
    top: 0;
    left: 0;
}

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
    margin-left: 0.2rem
}

.title-left {
    width: 5rem;
    height: 3rem;
    margin-left: 0.2rem
}

.title-left p {
    font-size: 0.3rem;
    color: #000;
    font-weight: 800;
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
    font-weight: 700;
}

.rob {
    font-size: 0.3rem;
    color: #fff;
    margin-top: 0.5rem;
    background-color: hotpink;
    padding: 0.15rem 0.4rem;
    border-radius: 0.3rem;
}
</style>
