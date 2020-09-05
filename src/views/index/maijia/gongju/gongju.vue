<template>
<div id="gongju">
    <div class="gongju_head">
        工具
    </div>
    <van-grid>
        <span>商品</span>
        <van-grid-item icon="send-gift-o" text="供应管理" to="/" />
    </van-grid>
    <van-grid>
        <span>订单</span>
        <van-grid-item icon="orders-o" text="订单管理" to="/" />
        <van-grid-item icon="bar-chart-o" text="经营分析" to="/" />
        <van-grid-item icon="bill-o" text="发付款单" to="/" />
    </van-grid>
    <van-grid>
        <span>商机</span>
        <van-grid-item icon="bulb-o" text="潜在客户" to="/" />
        <van-grid-item icon="contact" text="客户管理" to="/" />
        <van-grid-item icon="notes-o" text="求购大厅" to="/" />
        <van-grid-item icon="send-gift-o" text="有人要货" to="/" />
        <van-grid-item icon="gift-card-o" text="发布动态" to="/" />
    </van-grid>
    <van-grid>
        <span>营销工具</span>
        <van-grid-item icon="coupon-o" text="优惠券" to="/" />
        <van-grid-item icon="fire-o" text="牛商通" to="/" />
        <van-grid-item icon="award-o" text="推广管理" to="/" />
        <van-grid-item icon="vip-card-o" text="实力认证" to="/" />
    </van-grid>
    <van-grid>
        <span>其他</span>
        <van-grid-item icon="award-o" text="出货榜" to="/" />
        <van-grid-item icon="label-o" text="规则中心" to="/" />
        <van-grid-item icon="logistics" text="代办服务" to="/" />
    </van-grid>
    <dibuber></dibuber>
</div>
</template>

<script>
import dibuber from '#1/dibuber.vue'
export default {
    components: {
        dibuber
    }
}
</script>

<style scoped>
#gongju {
    background-color: #f2f2f2;
}

.van-grid {
    padding: 2px 10px;

}

.gongju_head {
    font-size: 18px;
    text-align: center;

}

#gongju {
    width: 100%;
    height: 100%;
}

span {
    width: 100%;
    font-size: 20px;
}
</style>
