<template>
<div class="lists_head">
    <listszi v-for="(v,i) in lists_arr" :key="i" :id="v.id" :icon="v.icon" :title="v.title" :small="v.small" :date="v.date" :color="v.color" :path="v.path"></listszi>
</div>
</template>

<script>
import listszi from '&c/liao/listszi.vue'
export default {
    components: {
        listszi
    },
    data() {
        return {
            lists_arr: [{
                id: 1,
                icon: "iconfont icon-tongzhi",
                title: "通话记录",
                small: "您拨打,接通或遗漏的电话均可在此查到",
                date: "11:25",
                color: "#fe866e",
                path: "/ceshi4"
            }, {
                id: 2,
                icon: "iconfont icon-GroupCopy",
                title: "互动消息",
                small: "随时提醒您收到的点赞，评论和关注,",
                date: "11:25",
                color: "#49ec9d",
                path: "/ceshi4"
            }, {
                id: 3,
                icon: "iconfont icon-miaosha",
                title: "系统通知",
                small: "全平台重要的公告或活动通知",
                date: "11:25",
                color: "#39d2fc",
                path: "/ceshi4"
            }, {
                id: 4,
                icon: "iconfont icon-dianzan",
                title: "打招呼",
                small: "来和客商们打个招呼吧",
                date: "11:25",
                color: "#ffa956",
                path: "/ceshi4"
            }, ]
        }
    },
}
</script>

<style scoped>
.lists_head {

    background-color: #ffffff;
    border-radius: 15px;
    padding-left: .2rem;
    overflow: hidden;
    margin: 10px 0;
}
</style>
