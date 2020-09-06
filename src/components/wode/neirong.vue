<template>
<div id="neirong">
    <div class="neirong_head">
        <span>我的订单</span>
        <span>全部订单></span>
    </div>
    <van-grid :gutter="2">
        <van-grid-item icon="home-o" text="路由跳转" to="/ceshi5" />
        <van-grid-item icon="home-o" text="路由跳转" to="/ceshi5" />
        <van-grid-item icon="home-o" text="路由跳转" to="/ceshi5" />
        <van-grid-item icon="home-o" text="路由跳转" to="/ceshi5" />
    </van-grid>
    <van-grid :gutter="2" :column-num="4" class="wode_www">
        <van-grid-item v-for="(v,i) in neirong_arr" :key="i" :icon="v.icon" :text="v.text" />
    </van-grid>

    <div class="wode_button">
        帮助中心
    </div>
    <van-grid :gutter="2" :column-num="5">
        <van-grid-item icon="sign" text="下载更新" to="/ceshi5" />
        <van-grid-item icon="description" text="常见问题" to="/ceshi5" />
        <van-grid-item icon="cash-back-record" text="在线客服·" to="/ceshi5" />
        <van-grid-item icon="points" text="电话客服" to="/ceshi5" />
        <van-grid-item icon="newspaper-o" text="意见反馈" to="/ceshi5" />
    </van-grid>
</div>
</template>

<script>
export default {
    data() {
        return {
            neirong_arr: [{
                icon: 'goods-collect-o',
                text: '我的余额'
            }, {
                icon: 'balance-o',
                text: '我的账单'
            }, {
                icon: 'tv-o',
                text: '极速到账'
            }, {
                icon: 'envelop-o',
                text: '我的评价'
            }, {
                icon: 'flag-o',
                text: '银行账户'
            }, {
                icon: 'flower-o',
                text: '我的田币'
            }, {
                icon: 'brush-o',
                text: '关心资源'
            }, {
                icon: 'apps-o',
                text: '收货地址'
            }, {
                icon: 'closed-eye',
                text: '积分商城'
            }, {
                icon: 'certificate',
                text: '优惠券'
            }, {
                icon: 'sign',
                text: '支付安全'
            }, {
                icon: 'other-pay',
                text: '违规记录'
            }, {
                icon: 'idcard',
                text: '我的采购'
            }, {
                icon: 'shrink',
                text: '实力认证'
            }, ]
        }
    },
}
</script>

<style scoped>
#neirong {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
}

.neirong_head {
    display: flex;
    justify-content: space-around;
    font-size: 17px;
    font-weight: bold;
}

.neirong_head>span:nth-of-type(1) {
    margin-right: 240px;
}

.wode_button {
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 17px;
}

.wode_www {
    margin-top: 20px;
}
</style>
