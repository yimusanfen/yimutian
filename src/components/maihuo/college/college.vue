<template>
<div id="rich_head">
    <div class="rich_header">
        <span>生意学院</span>
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
                    img: "/images/small_4.jpg",
                    title: "新手商家训练营",
                    heading: "【包教包会】手把手教,详细功能介绍",
                    path: "/ceshi3"
                }, {
                    ids: 2,
                    img: "/images/small_5.jpg",
                    title: "常用工具总动员",
                    heading: "【官方精选】生意精选课，营销策略，电商",
                    path: "/ceshi3"
                }, {
                    ids: 3,
                    img: "/images/small_6.jpg",
                    title: "实用工具一点通",
                    heading: "【轻松学会】功能讲解，实用课程，一学就会",
                    path: "/ceshi3"
                }, {
                    ids: 4,
                    img: "/images/small_7.jpg",
                    title: "运费模板",
                    heading: "【实用功能】自动计算运费，省心省力",
                    path: "/ceshi3"
                }, {
                    ids: 5,
                    img: "/images/small_8.jpg",
                    title: "多规格货品发布",
                    heading: "【商家必会】一键发布多个货品",
                    path: "/ceshi3"
                },

            ]
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
