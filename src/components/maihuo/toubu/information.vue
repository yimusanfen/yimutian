<template>
<div class="head_1">
    <div class="head_11">
        <span>商家必读</span>
    </div>
    <div class="head_22">
        何啸
        <div class="head_33">
            <span>店铺未开通</span>
            <span>个人等级：0级</span>
        </div>
    </div>
    <div class="head_44">
        <div class="head_55" @click="fun()">
            <span>买货</span><i class="iconfont icon-iconfontjiantou"></i>
        </div>
    </div>
</div>
</template>

<script>
export default {
    components: {

    },
    methods: {
        fun() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.head_1 {
    width: 413px;
    height: 2.2rem;
    display: flex;
    background-color: #23be9f;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 999;
    overflow-x: hidden;
}

.head_11 {
    font-size: .35rem;
    color: #ffffff;
    margin-left: .5rem;
    margin-top: .5rem;
}

.head_22 {
    margin-top: .5rem;
    text-align: center;
    font-size: .35rem;
    color: #ffffff;
}

.head_33 {
    font-size: .33rem;
    margin-top: .15rem;
}

.head_33>span:nth-of-type(1) {
    padding: .05rem;
    background-color: #00b6a9;
    margin-right: .1rem;
    color: #96efed;
}

.head_44 {

    margin-top: .4rem;

}

.head_55 {
    font-size: .35rem;
    color: #ffffff;
    width: 1.1rem;
    height: .85rem;
    background-color: #f8c625;
    text-align: center;
    line-height: .85rem;
    border-radius: 25px 0 0 25px;

}
</style>
