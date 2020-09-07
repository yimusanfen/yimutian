<template>
<div id="promote_head">
    <div class="promote_header">
        <span>活动报名</span>
        <span>更多></span>
    </div>

    <div class="promote_nav">
        <i class="iconfont icon-fahuo box3"></i>
        <div class="promote_da">
            <p>官方【9周年】大促招商</p>
            <p>活动时间：20/09/16~20/09/30</p>
            <div class="promote_bao">报名</div>
        </div>

    </div>
    <div class="promote_nav box1">
        <i class="iconfont icon-miaosha box2"></i>
        <div class="promote_da">
            <p>【牛商专享】餐厅食材频道</p>
            <p>活动时间：20/08/16~20/12/31</p>
            <div class="promote_bao">报名</div>
        </div>

    </div>
    <div class="promote_nav">
        <i class="iconfont icon-GroupCopy box4"></i>
        <div class="promote_da">
            <p>0825【餐厅】促销活动</p>
            <p>活动时间:20/08/26~20/09/09</p>
            <div class="promote_bao">报名</div>
        </div>

    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
#promote_head {

    background-color: #ffffff;
    border-radius: 15px;
    padding-left: .2rem;
}

.promote_header {

    height: .8rem;
    background-color: snow;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.promote_header span:nth-of-type(1) {
    margin-left: .3rem;
    font-size: .3rem;
    font-weight: bolder;
}

.promote_header span:nth-of-type(2) {
    margin-right: .3rem;
    font-size: .25rem;
    color: #999999;
}

.promote_nav {
    width: 100%;
    display: flex;
    position: relative;
}

.promote_nav i {
    padding: .1rem;
    background-color: #bce5c7;
    font-size: .9rem;
    border-radius: 10px;
    color: #ffffff;
}

.box1 {
    margin: .25rem 0;
}

.promote_nav .box3 {
    background-color: #f4d4c7;
}

.promote_nav .box4 {
    background-color: #e8d8f2;
}

.promote_bao {
    position: absolute;
    right: 22px;
    top: 19px;
    width: 1.2rem;
    height: .5rem;
    border: 1px solid #bce5c7;
    text-align: center;
    line-height: .5rem;
    border-radius: 25rem;
}

.promote_da {
    padding-top: .3rem;

}

.promote_da p:nth-of-type(1) {
    font-size: .3rem;
    font-weight: bolder;

}

.promote_da p:nth-of-type(2) {
    font-size: .25rem;
    color: #666666;
}
</style>
