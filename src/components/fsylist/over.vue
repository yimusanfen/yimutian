<template>
<div>
    <div class="title">
        <h1 @click="com='seckill'">今日秒杀</h1>
        <h1 @click="com='under'">进行中</h1>
        <h1 @click="com='underway'">即将结束</h1>
    </div>
    <component :is="com"></component>
</div>
</template>

<script>
import seckill from "./seckill.vue"
import under from "./under.vue"
import underway from "./underway.vue"
export default {
    components: {
        seckill,
        under,
        underway

    },
    data() {
        return {
            com: "seckill"
        }
    },

    mounted() {
        this.$store.dispatch('listact')
    },

}
</script>

<style>
h1 {
    font-size: 0.4rem
}

.title {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

}
</style>
