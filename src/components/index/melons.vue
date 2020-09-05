<template>
<div id="heads">
    <span v-for="(v,i) in arr" :key="i" class="sgfl">{{v}}</span>
</div>
</template>

<script>
export default {
    data() {
        return {
            arr: ["笋干", "芒果", "人参", "苹果", "石榴", "柑橘", "猕猴桃", "竹笋", "黄花菜", "全部分类"]
        }
    },
}
</script>

<style scoped>
#heads {
    width: 100%;
    height: 1.09rem;
    display: flex;
    flex-flow: wrap;
    background-color: #ffffff;
    margin-top: .2rem;
    text-align: center;
    align-items: center;
    border-radius: .25rem .25rem .25rem .25rem;
}

.sgfl {
    width: 20%;

}
</style>
