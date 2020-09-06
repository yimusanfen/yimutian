<template>
<div class="headed">
    <div class="head_1">
        <div>
            <i>
                <span class="iconfont icon-hongbao1"></span>
            </i>
            <span class="span_1">天天领红包</span><span class="span_2">天天签到,天天领</span>
        </div>
        <div class="span_3">
            <span>查看更多</span><span>></span>
        </div>
    </div>

    <div class="head_3">
        <envelopezi v-for="(v,i) in this.$store.state.hxhome.arr.envelope_arr" :key="i" :img="v.img" :jg="v.jg"></envelopezi>
    </div>
</div>
</template>

<script>
import envelopezi from '&c/index/envelopezi.vue'
export default {
    components: {
        envelopezi
    },
    mounted() {
        this.$store.dispatch("listact")
    },
}
</script>

<style scoped>
.headed {
    width: 100%;
    height: 3.1rem;

    display: flex;
    flex-flow: wrap;
}

.head_1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.head_3 {
    width: 100%;
    display: flex;
    text-align: center;

}

i {
    display: inline-block;
    width: .37rem;
    height: .37rem;
    background-color: red;
    text-align: center;
    border-radius: 50%;
}

i>span {
    color: #fff;

}

.span_1 {
    font-size: .25rem;
    font-weight: bolder;
    margin: 0 .16rem;
}

.span_2 {
    font-size: .21rem;
    color: #9E9E9E;
}

.span_3 {
    margin-right: .25rem;
    font-size: .25rem;
    color: #9E9E9E;
}
</style>
