<template>
<div id="certification——head">
    <div class="certification_header">
        <span>实力认证</span>
        <span>立即认证></span>
    </div>
    <div class="certification_nav">
        <div class="certification_navs">
            <p>交易规模认证<i class="iconfont icon-xin1"></i></p>
            <p>向客户展示你的生意规模</p>
        </div>
        <div class="certification_navs">
            <p>经营资质认证<i class="iconfont icon-renzheng"></i></p>
            <p>有证经营，客户更信赖</p>
        </div>
        <div class="certification_navs">
            <p>固定资产认证<i class="iconfont icon-dianpu"></i></p>
            <p>合作之前看一看硬资质</p>
        </div>
        <div class="certification_navs">
            <p>合作荣誉认证<i class="iconfont icon-shicailiebiao2"></i></p>
            <p>展示您过往的所有的资质荣耀</p>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
#certification_head {
    width: 100%;
    background-color: #ffffff;
    border-radius: 15px;
    overflow: hidden;
}

.certification_header {
    width: 100%;
    height: .8rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

}

.certification_header span:nth-of-type(1) {
    margin-left: .3rem;
    font-size: .3rem;
    font-weight: bolder;
}

.certification_header span:nth-of-type(2) {
    margin-right: .3rem;
    font-size: .25rem;
    color: #999999;
}

.certification_nav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    align-items: center;
}

.certification_navs {
    width: 46%;
    background-color: #e4f8ef;
    margin: .05rem;
    padding: 0 .1rem;
    border-radius: 10px;
}

.certification_navs p:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    font-size: .3rem;
    font-weight: bolder;
    color: #41666f;
}

.certification_navs>p>i {
    font-size: .5rem;
    color: #7a7b7d;
}

.certification_navs p:nth-of-type(2) {
    font-size: .25rem;
    color: #829ea2;
}
</style>
