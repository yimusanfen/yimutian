<template>
<div>
    <div class="baseTop">
        <span class="returnup" @click="goback()"> ＜ </span>
        <div class="fengxiang">
            <van-cell title="分享" @click="showShare = true" style="border:1px soild white;margin-top:0.2rem;font-size:0.4rem" />
            <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
        </div>
    </div>
    <div class="boss-top">
        <div class="bossimg">
            <img src="../../../../public/images/boss1.png" alt="">
        </div>
        <div class="boss-content">
            <span>3483</span>
            <p>粉丝</p>
        </div>
        <div class="boss-content">
            <span>7.5万</span>
            <p>访客</p>
        </div>
        <div class="boss-content">
            <span>1969</span>
            <p>沟通</p>
        </div>
        <div class="boss-content">
            <span>9.47万元</span>
            <p>累计销售</p>
        </div>
    </div>
    <div class="shopname">
        <p>泉霖海产贸易</p>

        <div>关注</div>
    </div>
    <div class="shopsite">
        <p style="font-size:0.35rem;font-weight: bolder;">王海泉</p>
        <p style="font-size:.45rem;font-weight: bolder;"> 贸易公司</p>
        <div>
            <img src="../../../../public/images/dizhi.png" alt="">
        </div>
        <p>大家好，我是来自山东威海环翠区的泉霖海产贸易，欢迎大家关注我，在一亩田与我做生意!</p>
    </div>
    <div v-for="(v, i) in this.$store.state.mhome.obj" :key="i" class="title-big">
        <img :src="v.img" />
        <div class="title-left">
            <p>{{v.title}}</p>
            <div class="title-right">
                <span class="pri"> {{v.price}}</span>
                <span class="rob"> {{v.rob}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    Toast
} from 'vant';
export default {
    methods: {
        goback() {
            this.$router.go(-1);
        },
        onSelect(option) {
            Toast(option.name);
            this.showShare = false;
        },
    },
    data() {
        return {
            showShare: false,
            options: [{
                    name: '微信',
                    icon: 'wechat'
                },
                {
                    name: '微博',
                    icon: 'weibo'
                },
                {
                    name: '复制链接',
                    icon: 'link'
                },
                {
                    name: '分享海报',
                    icon: 'poster'
                },
                {
                    name: '二维码',
                    icon: 'qrcode'
                },
            ],
        };
    },
    mounted() {
        this.$store.dispatch("listact");
    },

}
</script>

<style scoped>
.baseTop {
    height: 1.2rem;
    background: white;
    text-align: center;
    font-size: 0.4rem;
    line-height: 1.2rem;

    font-family: "微软雅黑";

}

.returnup {
    float: left;
    padding-left: 0.5rem;
    font-size: 0.5rem;
}

.fengxiang {

    float: right;
    text-align: center;
    font-size: 0.5rem;
}

.bossimg img {
    width: 1.2rem;
    height: 1.2rem;
    padding-left: 0.5rem;
}

.bossimg {
    width: 1.2rem;
    height: 1.2rem;
}

.boss-top {
    display: flex;
    justify-content: space-between;
}

.boss-content>span {
    font-size: 0.35rem;
    text-align: center;
    color: black;
    line-height: 0.35rem;
}

.boss-content>p {
    font-size: 0.3rem;
    text-align: center;
    color: rgb(155, 155, 155);
}

.shopname {
    display: flex;
    justify-content: space-between;
    line-height: 1.2rem;
    padding: 0.2rem;
}

.shopname>p {
    font-size: 0.6rem;
    font-weight: bolder;
}

.shopname>div {
    border: 1px solid rgb(0, 253, 103);
    height: 0.65rem;
    width: 1.2rem;
    text-align: center;
    line-height: 0.65rem;
    border-radius: 25px;
    background-color: rgb(0, 253, 103);
    color: white;
}

.shopsite {
    padding: .2rem;
    font-size: 0.3rem;
}

.title-big {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid gainsboro;
    padding: 0.3rem 0rem;
}

.title-big img {
    width: 2rem;
    height: 2rem;
    margin-left: 0.2rem;
}

.title-left {
    width: 5rem;
    height: 3rem;
    margin-left: 0.2rem;
}

.title-left p {
    font-size: 0.3rem;
}

.title-right {
    width: 4.5rem;
    display: flex;
    justify-content: space-between;

}

.pri {
    font-size: 0.4rem;
    margin-top: 0.7rem;
    color: red;
    font-weight: 700
}

.rob {
    font-size: 0.3rem;
    color: white;
    margin-top: 0.5rem;
    background-color: skyblue;
    padding: 0.15rem 0.4rem;
    border-radius: 0.3rem;
}
</style>
