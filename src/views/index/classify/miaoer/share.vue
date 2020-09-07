<template>
<div>
    <div class="price">
        <p>￥9.00/斤</p>
        <span>50斤起</span>
    </div>
    <div class="share">
        <p>现货 公蟹六月黄 江苏大闸蟹 小规格公蟹<br /> 全国代发</p>
        <div class="link">
            <i class="iconfont icon-fenxiang"></i><strong>分享</strong>
        </div>
    </div>
    <div class="address">
        <em class="iconfont icon-location"></em>
        <span>江苏省宿迁市泗洪县距离877公里</span>
    </div>
    <div class="order">
        <i class="iconfont icon-kanguo"></i>
        <p>7.02万人看过</p>
        <b>订单数23</b>
        <span>成交8.93万元</span>
    </div>
    <router-link to="/example">
        <div class="ranking">
            <p class="iconfont icon-zhubangdan"></p>
            <span>[大闸蟹畅销榜]</span>
            <b>第<em>3</em>名</b>
            <i class="iconfont icon-iconfontjiantou5"></i>
        </div>
    </router-link>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.price {
    width: 100%;
    height: 1rem;
    display: flex;
    margin-left: 0.2rem;
    align-items: center;
}

.price p {
    font-size: 0.5rem;
    color: red;
}

.price span {
    background-color: red;
    color: #fff;
}

.share {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.2rem;
}

.share p {
    font-size: 0.3rem;
    font-weight: 800;
}

.link {
    display: flex;
    background-color: rgb(247, 247, 247);
    padding: 0.1rem 0.3rem;
    margin-left: 0.7rem;
    margin-top: -0.3rem;
    border-radius: 0.3rem 0 0 0.3rem;

}

.link span {
    color: rgb(246, 246, 246);
    font-size: 0.3rem;
    margin-left: 0.1rem;
}

.address {
    width: 100%;
    height: 0.5rem;
    display: flex;
    align-items: center;
    margin-left: 0.2rem;
}

.address span {
    font-size: 0.3rem;
    margin-left: 0.2rem;
    color: rgb(205, 205, 205)
}

.order {
    width: 100%;
    height: 0.5rem;
    display: flex;
    align-items: center;
    margin-left: 0.2rem;
    margin-bottom: 0.2rem;
}

.order p {
    font-size: 0.28rem;
    color: rgb(205, 205, 205)
}

.order b {
    font-size: 0.28rem;
    color: rgb(205, 205, 205);
    margin-left: 0.5rem;
}

.order span {
    font-size: 0.28rem;
    color: rgb(205, 205, 205);
    margin-left: 2.0rem;
}

.ranking {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    margin-left: 0.2rem;
    border-top: 1px solid rgb(205, 205, 205);
}

.ranking p {
    color: red;
    font-weight: 800;
}

.ranking span {
    margin-left: 0.2rem;

}

.ranking b {
    margin-left: 0.4rem;
}

.ranking b em {
    color: red;
}

.ranking i {
    margin-left: 3.7rem;
    color: rgb(198, 198, 198)
}
</style>
