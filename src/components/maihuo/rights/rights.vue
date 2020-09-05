<template>
<div id="rights_head">
    <div class="rights_header">
        <span>开店宝权益</span>
        <span>了解更多></span>
    </div>
    <div class="rights_nav">
        <div class="rights_navs">
            <p class="iconfont icon-jiaoyi"></p>
            <p>做生意</p>
            <p>在线直接交易</p>
        </div>
        <div class="rights_navs">
            <p class="iconfont icon-dianhua"></p>
            <p>打电话</p>
            <p>每月多联系20人</p>
        </div>
        <div class="rights_navs">
            <p class="iconfont icon-mingpian"></p>
            <p>发工资</p>
            <p>每月多送30次</p>
        </div>
        <div class="rights_navs">
            <p class="iconfont icon-youhuiquan"></p>
            <p>入场券</p>
            <p>全年50+场活动</p>
        </div>
        <div class="rights_navs">
            <p class="iconfont icon-dianpu"></p>
            <p>店铺标识</p>
            <p>有店经营更靠谱</p>
        </div>
        <div class="rights_navs">
            <p class="iconfont icon-xianxingtu"></p>
            <p>营销工具</p>
            <p>优惠券使用特权</p>
        </div>
    </div>
    <div class="rights_footer">
        <span>立即开通</span>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
#rights_head {
    width: 100%;
    background-color: #ffffff;
    border-radius: 15px;
}

.rights_header {
    width: 100%;
    height: .8rem;
    background-color: snow;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.rights_header span:nth-of-type(1) {
    margin-left: .3rem;
    font-size: .3rem;
    font-weight: bolder;
}

.rights_header span:nth-of-type(2) {
    margin-right: .3rem;
    font-size: .25rem;
    color: #999999;
}

.rights_nav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
}

.rights_navs {
    width: 32%;
    background-color: #e0edfd;
    margin: .05rem;
    border-radius: 15px;
}

.rights_navs p:nth-of-type(1) {
    font-size: .5rem;
    color: #588bde;
}

.rights_navs p:nth-of-type(2) {
    font-size: .3rem;
    color: #42748d;
}

.rights_navs p:nth-of-type(3) {
    font-size: .2rem;
    color: #8999a6;
}

.rights_footer {
    width: 100%;

}

.rights_footer span {
    display: block;
    width: 2.5rem;
    height: .8rem;
    margin: 0 auto;
    margin-top: .15rem;
    text-align: center;
    line-height: .8rem;
    border-radius: 25px 25px 25px 25px;
    border: 1px solid #d0e9e3;
    color: #54a88e;
    font-size: .2rem;
}
</style>
