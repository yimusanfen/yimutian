<template>
<div id="rich_head">
    <div class="rich_header">
        <span>致富经</span>
        <span>更多></span>
    </div>
    <richzi v-for="(v,i) in rich_arr" :key="i" :ids="v.ids" :img="v.img" :title="v.title" :heading="v.heading" :path="v.path"></richzi>
</div>
</template>

<script>
import richzi from '#1/rich/richzi.vue'
export default {
    components: {
        richzi
    },
    data() {
        return {
            rich_arr: [{
                ids: 1,
                img: "/images/small_1.jpg",
                title: "从2天买一筐,到3天发一车",
                heading: "想到就要做到",
                path: "/ceshi3"
            }, {
                ids: 2,
                img: "/images/small_2.jpg",
                title: "广东小伙用一亩田豆牛买香蕉",
                heading: "共同致富，一起赚钱",
                path: "/ceshi3"
            }, {
                ids: 3,
                img: "/images/small_3.jpg",
                title: "东北小伙用一亩田豆牛,半年时间",
                heading: "敢于想敢于尝试",
                path: "/ceshi3"
            }, ]
        }
    },
}
</script>

<style scoped>
#rich_head {
    width: 100%;
    background-color: #ffffff;
    border-radius: 15px;
    overflow: hidden;
}

.rich_header {

    height: .8rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

}

.rich_header span:nth-of-type(1) {
    margin-left: .3rem;
    font-size: .3rem;
    font-weight: bolder;
}

.rich_header span:nth-of-type(2) {
    margin-right: .3rem;
    font-size: .25rem;
    color: #999999;
}
</style>
