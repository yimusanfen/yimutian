<template>
<div class="head_112">
    <serverzi v-for="(v,i) in arr" :key="i" :imgs="v.imgs" :shuo="v.shuo" :jiage="v.jiage" :dizhi="v.dizhi" :path="v.path" :dizhi1="v.dizhi1" :kanguo="v.kanguo"></serverzi>
</div>
</template>

<script>
import serverzi from '&c/index/serverzi.vue'
export default {
    components: {
        serverzi
    },
    data() {
        return {
            arr: [{
                    imgs: "/images/cai1.png",
                    shuo: "麻竹笋、烟丝笋、细丝、竹笋丝、江湖地摊笋",
                    jiage: "3.50",
                    dizhi: "成交569元",
                    path: "shop",
                    dizhi1: "四川攀枝花米易县距离1285公里",
                    gankan: "7418"
                },
                {
                    imgs: "/images/cai2.png",
                    shuo: "干笋产地直供福建特产农家碳烤笋干、嫩笋尖..",
                    jiage: "25",
                    dizhi: "福建三明",
                    path: "shop",
                    dizhi1: "四川攀枝花米易县距离1285公里",
                    kanguo: "7418"
                },
                {
                    imgs: "/images/cai3.png",
                    shuo: "纸袋嘎啦次果大量供货，膜袋嘎啦大量供货",
                    jiage: "0.50",
                    dizhi: "山东烟台",
                    path: "shop",
                    dizhi1: "四川攀枝花米易县距离1285公里",
                    kanguo: "7418"
                },
                {
                    imgs: "/images/cai4.png",
                    shuo: "浙江绍兴万亩红阳红心猕猴桃上市了，各种规",
                    jiage: "1.70",
                    dizhi: "浙江绍兴",
                    path: "shop",
                    dizhi1: "四川攀枝花米易县距离1285公里",
                    kanguo: "7418"
                },
                {
                    imgs: "/images/cai1.png",
                    shuo: "麻竹笋、烟丝笋、细丝、竹笋丝、江湖地摊笋",
                    jiage: "3.50",
                    dizhi: "成交569元",
                    path: "shop",
                    dizhi1: "四川攀枝花米易县距离1285公里",
                    kanguo: "7418"
                },
                {
                    imgs: "/images/cai2.png",
                    shuo: "干笋产地直供福建特产农家碳烤笋干、嫩笋尖..",
                    jiage: "25",
                    dizhi: "福建三明",
                    path: "shop",
                    dizhi1: "四川攀枝花米易县距离1285公里",
                    kanguo: "7418"
                },
                {
                    imgs: "/images/cai3.png",
                    shuo: "纸袋嘎啦次果大量供货，膜袋嘎啦大量供货",
                    jiage: "0.50",
                    dizhi: "山东烟台",
                    path: "shop",
                    dizhi1: "四川攀枝花米易县距离1285公里",
                    kanguo: "7418"
                },
                {
                    imgs: "/images/cai4.png",
                    shuo: "浙江绍兴万亩红阳红心猕猴桃上市了，各种规",
                    jiage: "1.70",
                    dizhi: "浙江绍兴",
                    path: "shop",
                    dizhi1: "四川攀枝花米易县距离1285公里",
                    kanguo: "7418"
                },
                {
                    imgs: "/images/cai1.png",
                    shuo: "麻竹笋、烟丝笋、细丝、竹笋丝、江湖地摊笋",
                    jiage: "3.50",
                    dizhi: "成交569元",
                    path: "shop",
                    dizhi1: "四川攀枝花米易县距离1285公里",
                    kanguo: "7418"
                },
                {
                    imgs: "/images/cai2.png",
                    shuo: "干笋产地直供福建特产农家碳烤笋干、嫩笋尖..",
                    jiage: "25",
                    dizhi: "福建三明",
                    path: "shop",
                    dizhi1: "四川攀枝花米易县距离1285公里",
                    kanguo: "7418"
                },
                {
                    imgs: "/images/cai3.png",
                    shuo: "纸袋嘎啦次果大量供货，膜袋嘎啦大量供货",
                    jiage: "0.50",
                    dizhi: "山东烟台",
                    path: "shop",
                    dizhi1: "四川攀枝花米易县距离1285公里",
                    kanguo: "7418"
                },
                {
                    imgs: "/images/cai4.png",
                    shuo: "浙江绍兴万亩红阳红心猕猴桃上市了，各种规",
                    jiage: "1.70",
                    dizhi: "浙江绍兴",
                    path: "shop",
                    dizhi1: "四川攀枝花米易县距离1285公里",
                    kanguo: "7418"
                },
                {
                    imgs: "/images/cai1.png",
                    shuo: "麻竹笋、烟丝笋、细丝、竹笋丝、江湖地摊笋",
                    jiage: "3.50",
                    dizhi: "成交569元",
                    path: "shop",
                    dizhi1: "四川攀枝花米易县距离1285公里",
                    kanguo: "7418"
                },
                {
                    imgs: "/images/cai2.png",
                    shuo: "干笋产地直供福建特产农家碳烤笋干、嫩笋尖..",
                    jiage: "25",
                    dizhi: "福建三明",
                    path: "shop",
                    dizhi1: "四川攀枝花米易县距离1285公里",
                    kanguo: "7418"
                },
                {
                    imgs: "/images/cai3.png",
                    shuo: "纸袋嘎啦次果大量供货，膜袋嘎啦大量供货",
                    jiage: "0.50",
                    dizhi: "山东烟台",
                    path: "shop",
                    dizhi1: "四川攀枝花米易县距离1285公里",
                    kanguo: "7418"
                },
                {
                    imgs: "/images/cai4.png",
                    shuo: "浙江绍兴万亩红阳红心猕猴桃上市了，各种规",
                    jiage: "1.70",
                    dizhi: "浙江绍兴",
                    path: "shop",
                    dizhi1: "四川攀枝花米易县距离1285公里",
                    kanguo: "7418"
                }
            ]
        }
    },
}
</script>

<style scoped>
.head_112 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
}
</style>
