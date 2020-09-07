<template>
<div id="head">
    <information></information>
    <div id="headed">
        <div class="jilu">
            <div class="jilu_1">
                <span class="jilu_21">0</span>
                <br>
                <span>商品曝光</span>
            </div>
            <span class="shu">|</span>
            <div class="jilu_2">
                <span class="jilu_22">0</span>
                <br>
                <span>客户浏览 昨日0</span>
            </div>
            <span class="shu">|</span>
            <div class="jilu_3">
                <span class="jilu_23">0</span>
                <br>
                <span>客户联系</span>
            </div>
        </div>
        <novice></novice>
        <business></business>
        <carousel></carousel>
        <anchor></anchor>
        <promote></promote>
        <rights></rights>
        <certification></certification>
        <marketing></marketing>
        <tool></tool>
        <rich></rich>
        <college></college>
        <dibuber></dibuber>

    </div>

</div>
</template>

<script>
import information from '#1/toubu/information.vue'
import novice from '#1/novice/novice.vue'
import business from '#1/business/business.vue'
import carousel from '#1/carousel/carousel.vue'
import anchor from '#1/anchor/anchor.vue'
import promote from '#1/promote/promote.vue'
import rights from '#1/rights/rights.vue'
import certification from '#1/certification/certification.vue'
import marketing from '#1/marketing/marketing.vue'
import tool from '#1/marketing/tool.vue'
import rich from '#1/rich/rich.vue'
import college from '#1/college/college.vue'
import dibuber from '#1/dibuber.vue'
export default {
    components: {
        information,
        novice,
        business,
        carousel,
        anchor,
        promote,
        rights,
        certification,
        marketing,
        tool,
        rich,
        college,
        dibuber
    }
}
</script>

<style scoped>
html {
    box-sizing: border-box;
}

#head {
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
    box-sizing: border-box;

}

#headed {
    width: 100%;
    height: 100%;
    margin-top: 2.2rem;
    box-sizing: border-box;
    position: relative;
    display: inline-block;
}

.jilu {
    width: 100%;
    height: 2.2rem;
    background-color: #23be9f;
    display: flex;
    text-align: center;
    align-items: center;

}

.jilu_1,
.jilu_2,
.jilu_3 {
    flex: 1;
}

.jilu_21,
.jilu_22,
.jilu_23 {
    font-size: .65rem;
    color: #ffffff;
}

.jilu_1 span:nth-of-type(2),
.jilu_2 span:nth-of-type(2),
.jilu_3 span:nth-of-type(2) {
    font-size: .2rem;
    color: #cccccc;
}

.shu {
    font-size: .8rem;
    color: #cccccc;
}
</style>
