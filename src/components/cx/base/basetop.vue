<template>
<div id="togetherBase">
    <div class="baseTop">
        <span class="returnup" @click="fun()"> ＜ </span>
        <span>一起包基地</span>
        <div class="fengxiang">
            <van-cell title="分享" @click="showShare = true" style="background: rgb(255, 169, 62);color:#fff;" />
            <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
        </div>
    </div>
</div>
</template>

<script>
import {
    Toast
} from "vant";
export default {
    methods: {
        fun() {
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
                    name: "微信",
                    icon: "wechat",
                },
                {
                    name: "微博",
                    icon: "weibo",
                },
                {
                    name: "复制链接",
                    icon: "link",
                },
                {
                    name: "分享海报",
                    icon: "poster",
                },
                {
                    name: "二维码",
                    icon: "qrcode",
                },
            ],
        };
    },
};
</script>

<style scoped>
.baseTop {
    height: 1.2rem;
    background: rgb(255, 169, 62);
    text-align: center;
    font-size: 0.4rem;
    line-height: 1.2rem;
    color: white;
    font-family: "微软雅黑";

}

.returnup {
    float: left;
}

.fengxiang {
    background: rgb(255, 169, 62);
    float: right;
}

#togetherBase {
    position: fixed;
    top: 0;
    width: 100%;
}
</style>
