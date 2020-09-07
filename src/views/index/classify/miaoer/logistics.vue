<template>
<div>
    <div class="transport">
        <p>物流</p>
        <span>快递.物流专线.整车.铁路运输.空运.其他.....</span>
        <i class="iconfont icon-iconfontjiantou5" @click="fun()"></i>
        <van-popup v-model="show" round position="bottom" :style="{ height: '50%' }" class="van">
            <h1 class="material">物流</h1>
            <h2 class="buyer">快递.物流专线.整车.铁路运输.空运.其他;按斤收费;运费买家自理</h2>
            <h3 class="know" @click="funb()">知道了</h3>
        </van-popup>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    methods: {
        fun() {
            this.show = true
        },
        funb() {
            this.show = false
        }
    }
}
</script>

<style scoped>
.transport {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    margin-left: 0.2rem;
}

.transport p {
    font-size: 0.3rem;
    color: rgb(155, 155, 155)
}

.transport span {
    font-size: 0.3rem;
    margin-left: 0.4rem;
}

.material {
    position: absolute;
    top: 0;
    left: 45%;
    font-size: 0.5rem;
}

.buyer {
    font-size: 0.4rem;
    font-weight: 800;
    margin-left: 0.3rem;
    margin-top: 1rem;

}

.know {
    width: 80%;
    background-color: green;
    margin: 0 auto;
    font-size: 0.4rem;
    text-align: center;
    line-height: 1rem;
    margin-top: 45%;
    color: #fff;
}
</style>
