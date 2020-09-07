<template>
<div class="head">
    <div class="header">
        <div>
            <span class="maih">买货</span>
            <router-link to="/businesscircle" class="syq">生意圈</router-link>
        </div>
        <div class="mh">
            <router-link to="/sell">
                卖货<span class="iconfont icon-iconfontjiantou"></span>
            </router-link>
        </div>
    </div>
    <div class="ssou">
        <span class="iconfont icon-fangdajing"></span><input type="text" placeholder="干笋">
    </div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.head {
    width: 100%;
    height: 1.3rem;
    background-color: #f1f1f1;
    position: fixed;
    z-index: 2;
    top: 0;
}

.header {
    width: 100%;
    height: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.maih {
    font-size: 0.4rem;
    font-weight: bolder;
}

.syq {
    font-size: 0.3rem;
    color: #909090;
}

.maih {
    margin-right: 0.3rem;
}

.mh {
    font-size: 0.27rem;

    line-height: 0.7rem;
    width: 1.36rem;
    height: 0.62rem;
    text-align: center;
    background-color: #01ddb7;
    border-radius: .5rem 0 0 .5rem;
}

.mh a {
    color: #ffff;
}

.ssou {
    width: 98%;
    height: .7rem;
    background-color: #ffff;
    border-radius: .5rem .5rem .5rem .5rem;
    text-align: center;
    border: 1px solid #ccc;
}

.ssou input {
    width: 90%;
    height: .7rem;
    border: none;

}
</style>
