<template>
<div class="salabelist">
    <Salabaelistzi v-for="(v,i) in arr" :key="i" :imgs="v.imgs" :shuo="v.shuo" :jiage="v.jiage" :dizhi="v.dizhi" />
</div>
</template>

<script>
import Salabaelistzi from "&c/cx/base/salabelistzi";
export default {
    components: {
        Salabaelistzi,
    },
    data() {
        return {
            arr: [{
                    imgs: "/images/tao.png",
                    shuo: "信阳桃李树，新品种畅销品种...",
                    jiage: "3.50",
                    dizhi: "河南信阳"
                },
                {
                    imgs: "/images/ningmeng.png",
                    shuo: "【优质货源】，安岳柠檬....",
                    jiage: "2.8",
                    dizhi: "福建三明"
                },
                {
                    imgs: "/images/shanyao.png",
                    shuo: "【有好货】，正宗焦作温县山药...",
                    jiage: "0.50",
                    dizhi: "河南焦作"
                },
                {
                    imgs: "/images/sangshen.png",
                    shuo: "干桑葚桑葚干一斤装精选优质",
                    jiage: "1.70",
                    dizhi: "浙江绍兴"
                },
                {
                    imgs: "/images/putao.png",
                    shuo: "冷链包邮  户太8号 无籽多汁",
                    jiage: "3.50",
                    dizhi: "陕西西安"
                },
                {
                    imgs: "/images/hongshu.png",
                    shuo: "福建六鳌蜜薯红心地瓜",
                    jiage: "2.6",
                    dizhi: "福建三明"
                },
            ]
        }
    },
}
</script>

<style scoped>
.salabelist {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
}
</style>
