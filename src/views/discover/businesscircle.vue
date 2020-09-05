<template>
<div id="top111">
    <div class="top-nav">
        <span class="iconfont icon-zuojiantou" @click="fun()"> </span>
        <div class="shengyiquan">生意圈</div>
    </div>
    <div class="top-img">
        <img src="../../../public/images/shengyiquan.png" alt="">
    </div>
    <div class="tongxunlu">
        <p style="font-weight:bolder;font-size:0.3rem">看看通讯录谁在用一亩田</p>
        <p style="color:gray">关注后，他们的生意动态将会显示在这里</p>
        <div class="addresslist">查看通讯录好友</div>
        <van-checkbox v-model="checked" class="xieyi">已阅读并同意《用户协议》和《隐私协议》</van-checkbox>
    </div>
    <div v-for="(v,i) in arr" :key="i" class="haoyoulist">
        <div class="abcd">
            <img :src="v.imgleft" class="imgleft">
            <div style="padding-left:0.3rem">
                <p style="color:#606A8E;font-size:0.5rem">{{v.shop}}</p>
                <span style="color:#999999;font-size:0.35rem">{{v.site}}</span>
            </div>
        </div>
        <div style="text-align:center">
            <p style="color:#333333;font-size:0.3rem;font-weight:bolder">{{v.content}}</p>
            <img :src="v.img" style="margin:0 auto;height:4.5rem;width:4.5rem">
            <p style="color:#606A8E;font-size:0.3rem">{{v.bottom}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        fun() {
            this.$router.go(-1);
        },
    },
    data() {
        return {
            checked: true,
            arr: [{
                    imgleft: "/images/like1.png",
                    shop: "力克农业",
                    site: "河南商丘梁园区",
                    content: "效果杠杠的，欢迎大家选购",
                    img: "/images/like2.png",
                    bottom: "11分钟前  27人在看"
                },
                {
                    imgleft: "/images/huajiao1.png",
                    shop: "农村青花椒",
                    site: "云南昭通巧家县",
                    content: "自家种的青花椒，数量不多，价格优惠",
                    img: "/images/huajiao2.png",
                    bottom: "26分钟前  272人在看"
                },
                {
                    imgleft: "/images/huluobu1.png",
                    shop: "殷建才",
                    site: "陕西榆林靖边县",
                    content: "绿色无公害蔬菜，胡萝卜大面积上市",
                    img: "/images/huluobu2.png",
                    bottom: "33分钟前  63人在看"
                },
                {
                    imgleft: "/images/xigua1.png",
                    shop: "小刘西瓜代办",
                    site: "江苏盐城东台市",
                    content: "大量供应大棚美都西瓜",
                    img: "/images/xigua2.png",
                    bottom: "56分钟前  115人在看"
                },
                {
                    imgleft: "/images/like1.png",
                    shop: "力克农业",
                    site: "河南商丘梁园区",
                    content: "效果杠杠的，欢迎大家选购",
                    img: "/images/like2.png",
                    bottom: "11分钟前  95人在看"
                },
                {
                    imgleft: "/images/nihoutao1.png",
                    shop: "杜凤斌",
                    site: "陕西西安灞桥区",
                    content: "猕猴桃已成熟",
                    img: "/images/nihoutao2.png",
                    bottom: "1小时前  51人在看"
                },
                {
                    imgleft: "/images/lizi1.png",
                    shop: "梁师傅水果店",
                    site: "陕西咸阳乾县",
                    content: "吃梨就吃乾县梨",
                    img: "/images/lizi2.png",
                    bottom: "1小时前  58人在看"
                },

            ]
        };
    },
}
</script>

<style scoped>
#top111 {
    position: relative;
}

.top-img img {
    height: 3.5rem;
    width: 100%;

}

.top-nav {
    display: flex;
    position: absolute;
    color: white;
}

.icon-zuojiantou {
    font-size: 0.6rem;
}

.shengyiquan {
    font-size: 0.5rem;
    padding-left: 2.60rem;
}

.tongxunlu {
    width: 100%;
    line-height: 0.8rem;
    text-align: center;
}

.xieyi {
    padding-left: 1.3rem;
}

.addresslist {
    background: rgb(35, 190, 159);
    border: 1px solid;
    color: white;
    height: 0.8rem;
    line-height: 0.8rem;
    width: 4.5rem;
    border-radius: 25px;
    margin-left: 1.65rem;
}

.abcd {
    display: flex;
}

.imgleft {
    width: 0.8rem;
    height: 0.8rem;
    padding-left: 0.5rem;
}

.haoyoulist {
    margin-bottom: 0.4rem;
}
</style>
