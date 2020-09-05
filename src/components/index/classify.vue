<template>
<div class="classify">

    <Classifyzi v-for="(v,i) in arr" :key="i" :cass="v.cass" :name="v.name" class="zi" :to="v.path"></Classifyzi>

</div>
</template>

<script>
import Classifyzi from "&c/index/classifyzi.vue"
export default {
    data() {
        return {
            arr: [{
                    name: "餐厅食材",
                    path: "/restaurant",
                    cass: "iconfont icon-shicailiebiao2"
                },
                {
                    name: "限时秒杀",
                    path: "/miaosha",
                    cass: "iconfont icon-miaosha"
                },
                {
                    name: "拼工厂",
                    path: "/pingongchang",
                    cass: "iconfont icon-gongchang1"
                },
                {
                    name: "包基地",
                    path: "/baojidi",
                    cass: "iconfont icon-jidi"
                },
                {
                    name: "一件代发",
                    path: "/yijiandaifa",
                    cass: "iconfont icon-baoguoshuju"
                },
                {
                    name: "滋补药材",
                    path: "/yijiandaifa",
                    cass: "iconfont icon-rencan"
                },
                {
                    name: "农机农资",
                    path: "/yijiandaifa",
                    cass: "iconfont icon-xin1"
                },
                {
                    name: "补贴专区",
                    path: "/yijiandaifa",
                    cass: "iconfont icon-hongbao"
                },
                {
                    name: "品质种苗",
                    path: "/yijiandaifa",
                    cass: "iconfont icon-zhongzi"
                },
                {
                    name: "最新资源",
                    path: "/yijiandaifa",
                    cass: "iconfont icon-xin"
                },
            ]
        }
    },
    components: {
        Classifyzi
    }
}
</script>

<style scoped>
.classify {
    width: 100%;
    height: 3rem;
    display: flex;
    margin-top: .4rem;
    flex-flow: wrap;

}

.zi {
    width: 20%;
    height: 1.4rem;
}
</style>
