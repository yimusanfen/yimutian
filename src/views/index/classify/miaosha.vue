<template>
<div class="miaosha">
    <p>限时秒杀
        <span class="iconfont icon-zuojiantou" @click="goback()"></span>
    </p>
    <span>超级秒杀</span><br>
    <span>限时底价</span><br>
    <div class="route">
        <router-link to="/miaoera"> <img src="images/pingguo.png"></router-link>
        <router-link to="/miaoerb"> <img src="images/mihou.png"></router-link>
    </div>
    <!-- <div class="list">
        <p>今日秒杀</p>
        <p>进行中</p>
        <p>即将结束</p>
    </div>-->
    <underway></underway>
    <component :is="com"></component>
    <router-view></router-view>
</div>
</template>

<script>
import over from "&c/fsylist/over.vue"
import underway from "&c/fsylist/underway.vue"

export default {
    components: {
        over,
        underway

    },
    data() {
        return {
            com: over,

        }
    },
    methods: {
        goback() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.miaosha {
    width: 100%;
    text-align: center;
    background-color: red;

}

.miaosha p {
    font-size: 0.42rem;
    color: #fff;
    position: sticky;
    top: 0;
    background-color: red;
    z-index: 1;
    height: 1rem;
    line-height: 1rem;

}

.miaosha p span {
    font-size: 0.8rem;
}

.iconfont {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0.01rem;
}

.miaosha span {
    font-size: 1.0rem;
    color: #fff;
}

.route {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 0.21rem;
}

.route img {
    width: 100%;

}

.list {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: .2rem;
}

.list p {
    color: #000;
    font-size: .32rem;
}
</style>
