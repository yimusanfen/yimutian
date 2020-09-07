<template>
<div>
    <topbar title="应季特惠" class="topbar"></topbar>
    <search search="搜索你感兴趣的商品"></search>
    <div class="title">
        <h1 @click="com='tehuione';" :class="com=='tehuione'?'act':''">坚果干果</h1>
        <h1 @click="com='tehuitwo';" :class="com=='tehuitwo'?'act':''">肉食</h1>
        <h1 @click="com='tehuithree'" :class="com=='tehuithree'?'act':''">食用菌</h1>
        <h1 @click="com='tehuifour'" :class="com=='tehuifour'?'act':''">农副食品</h1>
        <h1 @click="com='tehuifive'" :class="com=='tehuifive'?'act':''">农资农机</h1>
    </div>
    <component :is="com"></component>
</div>
</template>

<script>
import topbar from "./topbar.vue"
import search from "./search.vue"
import tehuione from "./tehuione.vue"
import tehuitwo from "./tehuitwo.vue"
import tehuithree from "./tehuithree.vue"
import tehuifour from "./tehuifour.vue"
import tehuifive from "./tehuifive.vue"

export default {
    components: {
        topbar,
        search,
        tehuione,
        tehuitwo,
        tehuithree,
        tehuifour,
        tehuifive

    },
    data() {
        return {
            com: "tehuione",
        }
    },

    mounted() {
        this.$store.dispatch("tehuilist")
    },

}
</script>

<style scoped>
.act {
    color: blue;
    border-bottom: 1px solid blue;
}

.topbar {
    position: sticky;
    top: 0;
    left: 0;
}

.title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 1rem;
    background-color: rgb(241, 241, 241);
}

.title h1 {
    font-size: 0.3rem;
    height: 0.8rem;
    line-height: 0.8rem;
}
</style>
