<template>
<div class="big-box">
    <div class="top">
        <div class="topbar">
            <em class="iconfont icon-zuojiantou" @click="goback()"></em>
            <h4>供应</h4>
            <h5>评价</h5>
            <h6>详情</h6>
            <h4>推荐</h4>
            <i class="iconfont icon-gouwuche"></i>
            <p class="iconfont icon-ziyuan"></p>
        </div>
    </div>
    <van-swipe @change="onChange">
        <van-swipe-item><img src="../../../../../public/images/img/list1.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../../../../public/images/img/list3.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../../../../public/images/img/list4.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../../../../public/images/img/list5.jpg" alt=""></van-swipe-item>
        <template #indicator>
            <div class="custom-indicator">
                {{ current + 1 }}/4
            </div>
        </template>
    </van-swipe>
    <share></share>
    <serve></serve>
    <div class="last">
        <p>规格</p>
        <speci v-for="(v,i) in arr" :key="i" :weight="v.weight" :price="v.price"></speci>
    </div>
    <div class="null">
    </div>
    <logistics></logistics>
</div>
</template>

<script>
import share from "./share.vue"
import serve from "./serve.vue"
import speci from "./speci.vue"
import logistics from "./logistics.vue"

export default {
    components: {
        share,
        serve,
        speci,
        logistics

    },
    methods: {
        goback() {
            this.$router.go(-1)
        },
        onChange(index) {
            this.current = index;
        },

    },
    data() {
        return {
            current: 0,
            arr: [{
                    weight: "小公 0.5~0.7两",
                    price: "9.00/斤"
                },
                {
                    weight: "两公 0.8~1.0两",
                    price: "15.00/斤"
                },
                {
                    weight: "1.5公 1.1~1.3两",
                    price: "20.00/斤"
                },
                {
                    weight: "2.0公 1.4~1.6两",
                    price: "26.00/斤"
                },

                {
                    weight: "2.5公 1.7~2.1两",
                    price: "31.00/斤"
                },
            ]
        };
    },

};
</script>

<style scoped>
.big-box {
    overflow: hidden;
}

.top {
    position: sticky;
    top: 0;
}

.topbar {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1rem;

}

.topbar i {
    font-size: 0.5rem;

    color: green;
}

.topbar p {
    font-size: 0.5rem;
    color: green;
}

em {
    font-size: 0.5rem;
    color: green;
}

.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
}

img {
    width: 100%;
}

.last {
    position: relative;
}

.last p {
    font-size: 0.3rem;
    color: rgb(155, 155, 155);
    position: absolute;
    top: 0.15rem;
    left: 0.2rem;
}

.null {
    width: 100%;
    height: 0.2rem;
    background-color: rgb(241, 241, 241)
}
</style>
